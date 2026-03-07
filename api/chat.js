import OpenAI from "openai";

// Initialize the OpenAI client using the securely injected environment variable
// which you will need to add to your Vercel project settings.
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    // Only allow POST requests for sending messages
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const userMessage = req.body.message;

        if (!userMessage) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Define the rigid System Prompt mapping exactly what Flare offers.
        const systemPrompt = `You are the AI assistant for Flare Technologies.
Flare Technologies is an AI-driven company that provides integrated solutions across technology, marketing, automation, and engineering.
Your role is to help website visitors understand Flare’s services and guide them toward booking a consultation or requesting a strategy audit.

Services include:
- AI automation
- Workflow automation
- Custom logistics systems
- Website development
- Web application development
- Software development
- Cloud infrastructure setup
- Cloud migration
- DevOps and deployment systems
- Digital marketing
- Influencer-led product launches
- E-commerce growth acceleration
- Brand identity revamp
- Video production
- Agile development team augmentation

Guidelines:
- Be professional and concise.
- Be easy to understand for both technical and non-technical users.
- Highlight how Flare can help solve the user’s problem.
- Guide the user toward booking a consultation if appropriate.
- If a user asks about working with Flare, suggest: "Book Consultation" or "Request Strategy Audit".
- If you don't know something, say you will connect them with the team.
- Format responses elegantly with basic HTML if needed (e.g. <br>, <strong>). Do not use markdown syntax, output raw text/HTML suitable for injection via innerHTML.`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // Using the efficient 4o-mini instructed by user
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: userMessage
                }
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        // Return the successful completion payload
        return res.status(200).json({
            reply: completion.choices[0].message.content
        });

    } catch (error) {
        console.error('OpenAI Error:', error);
        return res.status(500).json({ error: 'Failed to generate response' });
    }
}

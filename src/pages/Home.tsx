
import Hero from "@/components/ui/animated-shader-hero"
import GrowthStack from "@/components/GrowthStack"
import WhyFlare from "@/components/WhyFlare"
import Contact from "@/components/Contact"

interface HomeProps {
    openModal: () => void;
}

export default function Home({ openModal }: HomeProps) {
    return (
        <main>
            <Hero
              trustBadge={{
                text: "AI-Driven Systems for Modern Businesses",
                icons: ["⚡"]
              }}
              headline={{
                line1: "AI-powered",
                line2: "business ecosystem"
              }}
              subtitle="AI automation, development, cloud infrastructure, and digital growth systems"
              buttons={{
                primary: {
                  text: "Book Consultation",
                  onClick: openModal
                },
                secondary: {
                  text: "Request Strategy Audit",
                  onClick: openModal
                }
              }}
            />
            <GrowthStack />
            <WhyFlare />
            <Contact onOpenModal={openModal} />
        </main>
    );
}

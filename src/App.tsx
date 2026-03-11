import Hero from "@/components/ui/animated-shader-hero"

function App() {
  return (
    <Hero
      trustBadge={{
        text: "AI-Driven Systems for Modern Businesses",
        icons: ["⚡"],
      }}
      headline={{
        line1: "AI-powered",
        line2: "business ecosystem",
      }}
      subtitle="AI automation, development, cloud infrastructure, and digital growth systems"
      buttons={{
        primary: {
          text: "Book Consultation",
          onClick: () => {
            window.location.href = "#contact";
          },
        },
        secondary: {
          text: "Request Strategy Audit",
          onClick: () => {
            window.location.href = "#audit";
          },
        },
      }}
    />
  )
}

export default App

import Hero from "@/components/ui/animated-shader-hero";

// Demo Component showing how to use the Hero
const HeroDemo: React.FC = () => {

    return (
        <div className="w-full">
            <Hero
                trustBadge={{
                    text: "We help businesses save time, grow faster, and operate efficiently"
                }}
                headline={{
                    line1: "Technology Systems",
                    line2: "Built For Growth"
                }}
                subtitle="We build applications and automated systems that handle your daily work and help you reach more customers. Your business runs smoothly so you have time to focus on what actually matters."
                buttons={{
                    primary: {
                        text: "Book a Free Call",
                        onClick: () => {
                            window.location.href = "#contact";
                        }
                    },
                    secondary: {
                        text: "Get a Free Strategy Review",
                        onClick: () => {
                            window.location.href = "#audit";
                        }
                    }
                }}
            />

        </div>
    );
};

export default HeroDemo;

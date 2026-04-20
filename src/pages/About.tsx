import { useEffect, useRef } from 'react';
import { CircularGallery } from '@/components/ui/circular-gallery-2';
import { CardStack } from '@/components/ui/card-stack';
import MagicBento from '@/components/ui/MagicBento';
import DotField from '@/components/ui/DotField';

interface AboutProps {
    openModal: () => void;
}

export default function About({ openModal }: AboutProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));
        }
        return () => observer.disconnect();
    }, []);

    return (
        <main ref={sectionRef} style={{ paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: '4rem', backgroundColor: 'var(--bg-base)' }}>
            
            {/* 1. HERO SECTION */}
            <section className="container" style={{ position: 'relative', marginBottom: '6rem' }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    borderRadius: '40px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    background: 'rgba(255, 255, 255, 0.01)'
                }}>
                    <DotField 
                        dotRadius={1.5}
                        dotSpacing={18}
                        cursorRadius={400}
                        glowRadius={300}
                        gradientFrom="rgba(255, 140, 0, 0.55)"
                        gradientTo="rgba(249, 168, 212, 0.45)"
                        glowColor="rgba(255, 140, 0, 0.2)"
                    />
                </div>

                <div className="section-header text-center scroll-anim slide-up" style={{ position: 'relative', zIndex: 1, padding: 'clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem)' }}>
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>About Us</h2>
                    <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        We Help Businesses <br />
                        <span style={{ color: '#FF8C00' }}>Work Smarter, Not Harder</span>
                    </h1>
                    <p className="section-desc mx-auto"
                        style={{ maxWidth: '800px', color: '#E2E8F0', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: 1.6, fontWeight: 500 }}>
                        We build simple, powerful systems that save you time, reduce manual work, and keep your business running smoothly. No technical jargon, no buzzwords—just technology that actually works for you.
                    </p>
                </div>
            </section>

            {/* 2. WHAT WE DO (SIMPLIFIED) */}
            <section className="section-padding border-top-gradient" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header text-center scroll-anim slide-up">
                        <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>What We Do</h2>
                        <h3 className="section-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: '#fff' }}>We Simplify The Complex</h3>
                        <p className="section-desc mx-auto"
                            style={{ maxWidth: '700px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500, marginTop: '1rem' }}>
                            For many business owners, technology feels more confusing than helpful. We take the complicated tools your business uses and turn them into one smooth operation.
                        </p>
                    </div>

                    <div className="scroll-anim slide-up" style={{ height: 'clamp(300px, 50vw, 500px)', width: '100%', marginTop: '3rem' }}>
                        <CircularGallery 
                            items={[
                                { 
                                    text: 'We Save You Time',
                                    description: 'Stop wasting hours on repetitive tasks. We automate the boring stuff so you can focus on growth.',
                                    cardColor: '#F9A8D4' // Pink
                                },
                                { 
                                    text: 'Reduce Work',
                                    description: 'We eliminate the need for manual data entry and spreadsheets. Let systems handle the heavy lifting.',
                                    cardColor: '#B794F4' // Pastel Purple
                                },
                                { 
                                    text: 'Connect Systems',
                                    description: 'If you use different tools, we connect them so they talk to each other seamlessly.',
                                    cardColor: '#7DD3FC' // Sky Blue
                                },
                                { 
                                    text: 'Ensure Scalability',
                                    description: 'As your business grows, your systems handle the increased load effortlessly.',
                                    cardColor: '#86EFAC' // Green
                                },
                                { 
                                    text: 'One Central System',
                                    description: 'Your website, emails, messages, and payments all live under one roof. No more tab jumping.',
                                    cardColor: '#FDE68A' // Pastel Amber
                                },
                                { 
                                    text: 'We Handle The Tech',
                                    description: 'No IT degree needed. we handle the coding, hosting, and security so you can focus on customers.',
                                    cardColor: '#A5F3FC' // Pastel Cyan
                                },
                                { 
                                    text: 'Simplified Operations',
                                    description: 'From the first visit to the final payment, we create a smooth, guided path that happens automatically.',
                                    cardColor: '#DDD6FE' // Pastel Violet
                                },
                                { 
                                    text: 'Uninterrupted Growth',
                                    description: 'Reliable infrastructure ensures your systems never become a bottleneck. Sleep easy while tech runs.',
                                    cardColor: '#FECACA' // Pastel Rose
                                }
                            ]}
                            bend={3}
                            borderRadius={0.08}
                            scrollEase={0.03}
                        />
                    </div>
                </div>
            </section>

            {/* 3. THE PROBLEM (RELATABLE) */}
            <section className="section-padding container">
                <div className="scroll-anim slide-up text-center" style={{ marginBottom: '5rem' }}>
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>The Problem</h2>
                    <h3 className="section-title" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1, maxWidth: '900px', margin: '0 auto 2rem' }}>
                        Most businesses struggle because <br /> things are <span style={{ color: '#FF3B3B' }}>disconnected</span>.
                    </h3>
                    <p className="section-desc mx-auto" style={{ color: '#E2E8F0', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: 1.7, fontWeight: 500, maxWidth: '800px' }}>
                        You are probably paying for a website, an email tool, a CRM, and maybe an advertising agency. But because they don't work together, you end up doing all the management yourself.
                    </p>
                </div>

                <div className="scroll-anim slide-up flex justify-center">
                    <CardStack 
                        items={[
                            {
                                title: "Too Many Tools",
                                description: "Managing passwords, payments, and settings across five different platforms is exhausting and kills focus.",
                                color: "#FCA5A5" // Soft Red
                            },
                            {
                                title: "Manual Work Wasting Time",
                                description: "Copy-pasting customer details from emails into your sales tracker takes away hours from your week.",
                                color: "#FDBA74" // Soft Orange
                            },
                            {
                                title: "Hiring Multiple Vendors",
                                description: "Graphic designers, web developers, and marketing agencies rarely talk to each other, causing massive delays.",
                                color: "#C4B5FD" // Soft Purple
                            }
                        ]}
                    />
                </div>
            </section>



            {/* 5. HOW WE WORK (INNOVATIVE PROCESS) */}
            <section className="section-padding container">
                <div className="section-header text-center scroll-anim slide-up" style={{ marginBottom: '5rem' }}>
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>The Workflow</h2>
                    <h3 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>How We Work</h3>
                    <p className="section-desc mx-auto" style={{ maxWidth: '600px', marginTop: '1rem', color: '#8A9BB3' }}>
                        A systematic approach to transforming your digital architecture from messy to managed.
                    </p>
                </div>

                <div className="scroll-anim slide-up">
                    <MagicBento 
                        textAutoHide={false}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={400}
                        particleCount={20}
                        glowColor="255, 140, 0"
                    />
                </div>

            </section>



            {/* 7. HUMAN TOUCH (PREMIUM QUOTE) */}
            <section className="section-padding container">
                <div className="scroll-anim slide-up" style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
                    {/* Background Glow */}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(249,168,212,0.1) 0%, transparent 70%)', zIndex: -1 }}></div>
                    
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '40px',
                        padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
                        backdropFilter: 'blur(30px)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Huge Decorative Quote Mark */}
                        <div style={{ position: 'absolute', top: '-20px', left: '40px', fontSize: '15rem', color: 'rgba(255, 255, 255, 0.03)', fontFamily: 'serif', lineHeight: 1, pointerEvents: 'none' }}>“</div>
                        
                        <h3 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '3rem', letterSpacing: '-0.03em' }}>
                            Our Honest Belief
                        </h3>
                        
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <p style={{ color: '#F9A8D4', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                                "We built Flare because we saw too many hardworking business owners struggling just to keep their systems afloat."
                            </p>
                            
                            <p style={{ color: '#E2E8F0', fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto', fontWeight: 400 }}>
                                "Technology should work for you, not the other way around. Our entire mission is to lift the burden of digital management off your shoulders so you can get back to doing what you actually love—running your business."
                            </p>
                        </div>

                        <div style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                            <span style={{ color: '#F98D00', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Flare Technologies Core Values</span>
                            <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA SECTION */}
            <section className="section-padding container">
                <div className="scroll-anim slide-up" style={{
                    textAlign: 'center',
                    background: 'rgba(11, 15, 25, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '24px',
                    padding: '5rem 2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(16px)'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '100%',
                        background: 'radial-gradient(ellipse at center, rgba(255, 140, 0, 0.08) 0%, transparent 60%)',
                        zIndex: -1,
                        pointerEvents: 'none'
                    }} />
                    <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#FF8C00', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Let's Simplify Your Business
                    </h3>
                    <p style={{ color: '#E2E8F0', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto 3rem', display: 'block' }}>
                        Stop fighting with your technology. Chat with us to find out exactly how we can make your day-to-day operations easier.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                        <button onClick={openModal} className="btn btn-primary btn-large" style={{ backgroundColor: '#FF8C00', color: '#000', fontWeight: 800, border: 'none', padding: '1.25rem 2.5rem' }}>
                            Book Consultation
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}


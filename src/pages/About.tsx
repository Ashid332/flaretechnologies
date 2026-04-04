import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
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
        <main ref={sectionRef} style={{ paddingTop: '8rem', paddingBottom: '4rem', backgroundColor: 'var(--bg-base)' }}>
            
            {/* 1. HERO SECTION */}
            <section className="section-padding container">
                <div className="section-header text-center scroll-anim slide-up" style={{ marginBottom: '6rem' }}>
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>About Us</h2>
                    <h1 className="section-title" style={{ fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        We Help Businesses <br />
                        <span className="highlight-gradient">Work Smarter, Not Harder</span>
                    </h1>
                    <p className="section-desc mx-auto"
                        style={{ maxWidth: '800px', color: '#E2E8F0', fontSize: '1.15rem', lineHeight: 1.6, fontWeight: 500 }}>
                        We build simple, powerful systems that save you time, reduce manual work, and keep your business running smoothly. No technical jargon, no buzzwords—just technology that actually works for you.
                    </p>
                </div>
            </section>

            {/* 2. WHAT WE DO (SIMPLIFIED) */}
            <section className="section-padding border-top-gradient" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header text-center scroll-anim slide-up">
                        <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>What We Do</h2>
                        <h3 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>We Simplify The Complex</h3>
                        <p className="section-desc mx-auto"
                            style={{ maxWidth: '700px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500, marginTop: '1rem' }}>
                            For many business owners, technology feels more confusing than helpful. We take the complicated tools your business uses and turn them into one smooth operation.
                        </p>
                    </div>

                    <div className="features-grid scroll-anim slide-up">
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>We Save You Time</h4>
                            <p>Stop wasting hours on repetitive tasks. We automate the boring stuff so you and your team can focus on what actually grows your business.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>We Reduce Manual Work</h4>
                            <p>We eliminate the need for manual data entry and endless spreadsheets. Let systems handle the heavy lifting quietly in the background.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>We Connect Systems</h4>
                            <p>If you use different tools for emails, sales, and your website, we connect them so they talk to each other seamlessly without constant supervision.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>We Ensure Scalability</h4>
                            <p>As your business grows, your systems should handle the increased load effortlessly. We build foundations that scale with you from day one.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE PROBLEM (RELATABLE) */}
            <section className="section-padding container">
                <div className="scroll-anim slide-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>The Problem</h2>
                        <h3 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Most businesses struggle because things are disconnected.
                        </h3>
                        <p className="section-desc" style={{ color: '#E2E8F0', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500, marginBottom: '2rem' }}>
                            You are probably paying for a website, an email tool, a CRM, and maybe an advertising agency. But because they don't work together, you end up doing all the management yourself.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Too Many Tools</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>Managing passwords, payments, and settings across five different platforms is exhausting.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Manual Work Wasting Time</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>Copy-pasting customer details from emails into your sales tracker takes away hours from your week.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Hiring Multiple Vendors</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>Graphic designers, web developers, and marketing agencies rarely talk to each other, causing delays and mistakes.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(255,140,0,0.1), transparent)', borderRadius: '24px', zIndex: -1, filter: 'blur(30px)' }}></div>
                        <img 
                            src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Frustrating disconnected systems" 
                            style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}
                        />
                    </div>
                </div>
            </section>

            {/* 4. OUR SOLUTION (CLEAR + SIMPLE) */}
            <section className="section-padding border-top-gradient" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header text-center scroll-anim slide-up">
                        <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>The Solution</h2>
                        <h3 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>Everything simply works.</h3>
                        <p className="section-desc mx-auto"
                            style={{ maxWidth: '700px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500, marginTop: '1rem' }}>
                            We don't just sell you software. We provide a complete foundation for your business to operate without the headaches.
                        </p>
                    </div>

                    <div className="features-grid scroll-anim slide-up">
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>One Central System</h4>
                            <p>Your website, emails, customer messages, and payments all live under one roof. No more jumping between different tabs.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>We Handle The Tech</h4>
                            <p>You don't need an IT degree to work with us. We handle the complex coding, hosting, and security so you can focus entirely on customers.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>Simplified Operations</h4>
                            <p>From the moment a customer visits your website to the final payment, we create a smooth, guided path that happens automatically.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>Uninterrupted Growth</h4>
                            <p>We build with reliable infrastructure so your systems never become a bottleneck for your progress. Sleep easy while your tech runs seamlessly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (HIGH-LEVEL) */}
            <section className="section-padding container">
                <div className="section-header text-center scroll-anim slide-up">
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>Our Process</h2>
                    <h3 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>How We Work</h3>
                </div>

                <div className="horizontal-timeline scroll-anim slide-up" style={{ marginTop: '4rem' }}>
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-1-border">
                            <span style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '1.2rem', fontWeight: 800, color: 'rgba(255, 61, 61, 0.4)' }}>01</span>
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 01</span>
                            <h4>Understand</h4>
                            <p style={{ lineHeight: 1.6, marginTop: '0.25rem' }}>We sit down and listen to how your business currently runs.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-2-border">
                            <span style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '1.2rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.4)' }}>02</span>
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="6"></circle>
                                <circle cx="12" cy="12" r="2"></circle>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 02</span>
                            <h4>Plan</h4>
                            <p style={{ lineHeight: 1.6, marginTop: '0.25rem' }}>We map out exactly which tools and websites you need, in plain language.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-3-border">
                            <span style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '1.2rem', fontWeight: 800, color: 'rgba(0, 212, 255, 0.4)' }}>03</span>
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 03</span>
                            <h4>Build</h4>
                            <p style={{ lineHeight: 1.6, marginTop: '0.25rem' }}>We build and connect everything without technical babble.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-4-border">
                            <span style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '1.2rem', fontWeight: 800, color: 'rgba(138, 43, 226, 0.4)' }}>04</span>
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                <polyline points="16 7 22 7 22 13"></polyline>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 04</span>
                            <h4>Improve</h4>
                            <p style={{ lineHeight: 1.6, marginTop: '0.25rem' }}>We monitor the systems to ensure they save time and make you money.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. WHY FLARE (TRUST SECTION) */}
            <section className="section-padding border-top-gradient" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="section-header text-center scroll-anim slide-up">
                        <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>Why Trust Us</h2>
                        <h3 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>Why Flare Technologies?</h3>
                        <p className="section-desc mx-auto"
                            style={{ maxWidth: '700px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500, marginTop: '1rem' }}>
                            We exist to make technology accessible and stress-free for everyday businesses.
                        </p>
                    </div>

                    <div className="features-grid scroll-anim slide-up">
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>One Team For Everything</h4>
                            <p>No more playing middleman between different agencies. We handle it all.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>Clear Communication</h4>
                            <p>We respond fast, speak plainly, and never try to confuse you with tech jargon.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>Real Results</h4>
                            <p>We don't care about flashy features unless they actually help your business grow.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-gradient-bar"></div>
                            <h4>Long-Term Support</h4>
                            <p>We stick around after launch to make sure things continue running smoothly year after year.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. HUMAN TOUCH (IMPORTANT) */}
            <section className="section-padding container">
                <div className="scroll-anim slide-up" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <svg style={{ margin: '0 auto 2rem' }} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#infinity-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <defs>
                            <linearGradient id="infinity-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF3D3D" />
                                <stop offset="50%" stopColor="#FF8C00" />
                                <stop offset="100%" stopColor="#FFD500" />
                            </linearGradient>
                        </defs>
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <h3 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '2rem' }}>
                        Our Honest Belief
                    </h3>
                    <div style={{
                        background: 'rgba(11, 15, 25, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: '3rem 4rem',
                        backdropFilter: 'blur(16px)',
                        textAlign: 'left'
                    }}>
                        <p style={{ color: '#E2E8F0', fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic', fontWeight: 300 }}>
                            "We built Flare because we saw too many excellent, hardworking business owners struggling just to keep their websites and systems afloat. They were losing sleep over technology they were told would make their lives easier."
                        </p>
                        <p style={{ color: '#E2E8F0', fontSize: '1.25rem', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 300 }}>
                            "Technology should work for you, not the other way around. Our entire mission is to lift the burden of digital management off your shoulders so you can get back to doing what you actually love—running your business."
                        </p>
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
                    <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Let's Simplify Your Business
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto', display: 'inline-block' }}>
                        Stop fighting with your technology. Chat with us to find out exactly how we can make your day-to-day operations easier.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                        <Link to="/contact" className="btn btn-primary btn-large" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', background: 'linear-gradient(135deg, #FF8C00, #FF3D3D)', boxShadow: '0 4px 15px rgba(255, 140, 0, 0.4)', borderRadius: '100px' }}>
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

import React, { useEffect, useRef } from 'react';

const features = [
    {
        title: 'Agile Delivery Model',
        desc: 'You never have to wait six months to see progress. We move fast, keep you informed, and deliver working solutions in a matter of weeks.',
    },
    {
        title: 'Senior-Led Execution',
        desc: 'Your project is handled entirely by experienced professionals. The same engineers who plan your system are the ones who build it.',
    },
    {
        title: 'Security-First Architecture',
        desc: 'Your data is safe and your systems remain stable. We build things properly the first time so you never pay to fix avoidable problems later.',
    },
    {
        title: 'Automated Systems',
        desc: 'Imagine a team member who works constantly, never forgets a task, and handles your repetitive work automatically. That is what our systems do for your business.',
    },
];

const WhyFlare: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

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
        <section id="why-flare" className="why-us-section container section-padding border-top-gradient" ref={sectionRef}>
            <div className="section-header text-center scroll-anim slide-up">
                <h2 className="section-badge">Why Flare</h2>
                <h3 className="section-title">Why Businesses Choose Flare</h3>
                <p className="section-desc mx-auto text-sm sm:text-[1.1rem] leading-relaxed max-w-md sm:max-w-[650px] px-4"
                    style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    <span style={{ color: '#00D4FF', fontWeight: 700 }}>Real businesses</span> trust Flare because we do what we say, deliver on time, and explain our work clearly. We leave out the confusing tech talk.
                </p>
            </div>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={feature.title} className={`feature-card scroll-anim fade-in delay-${index + 1}`}>
                        <div className="feature-gradient-bar"></div>
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyFlare;

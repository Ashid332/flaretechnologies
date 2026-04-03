import React, { useEffect, useRef } from 'react';

const Results: React.FC = () => {
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
        <section id="results" className="results-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="section-header scroll-anim slide-up">
                    <h2 className="section-badge">Outcomes</h2>
                    <h3 className="section-title">Real Results for Real Businesses</h3>
                    <p className="section-desc">Here is exactly what happened when businesses partnered with us. The numbers speak for themselves.</p>
                </div>

                <div className="results-grid">
                    <div className="result-card scroll-anim slide-up delay-1">
                        <div className="result-glow-border"></div>
                        <div className="result-tag">E-Commerce Brand</div>
                        <div className="result-metric text-gradient-primary">300%</div>
                        <p className="result-metric-label">Revenue Growth in Q1</p>
                        <div className="result-breakdown">
                            <div className="r-row"><span className="r-label">Challenge</span> Their old website crashed every time traffic spiked. They were losing sales when it mattered the most.</div>
                            <div className="r-row"><span className="r-label">Solution</span> We rebuilt the platform to handle thousands of concurrent visitors. We also launched a targeted campaign that drove a flood of new buyers.</div>
                        </div>
                    </div>

                    <div className="result-card scroll-anim slide-up delay-2">
                        <div className="result-glow-border"></div>
                        <div className="result-tag">B2B Logistics</div>
                        <div className="result-metric text-gradient-primary">40hrs/wk</div>
                        <p className="result-metric-label">Saved via Automation</p>
                        <div className="result-breakdown">
                            <div className="r-row"><span className="r-label">Challenge</span> Their team spent over forty hours every week copying data between systems. This caused errors, delays, and constant frustration.</div>
                            <div className="r-row"><span className="r-label">Solution</span> We built an automated system that moves data between platforms and predicts required stock levels. The process now requires zero manual work.</div>
                        </div>
                    </div>

                    <div className="result-card scroll-anim slide-up delay-3">
                        <div className="result-glow-border"></div>
                        <div className="result-tag">Enterprise SaaS</div>
                        <div className="result-metric text-gradient-primary">Zero</div>
                        <p className="result-metric-label">Downtime during Migration</p>
                        <div className="result-breakdown">
                            <div className="r-row"><span className="r-label">Challenge</span> They needed to overhaul their backend systems without taking their product offline. A single mistake would mean lost data and angry customers.</div>
                            <div className="r-row"><span className="r-label">Solution</span> Our engineers planned and executed the entire migration while the product remained live. Users never noticed an interruption, and no data was lost.</div>
                        </div>
                    </div>
                </div>

                <div className="trust-booster text-center scroll-anim fade-in delay-4">
                    <p>Ready to be the next success story? Let's talk about what we can build for you.</p>
                </div>
            </div>
        </section>
    );
};

export default Results;

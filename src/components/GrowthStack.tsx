import React, { useEffect, useRef } from 'react';

const GrowthStack: React.FC = () => {
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
        <section id="growth-stack" className="stack-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="stack-layout">
                    <div className="stack-content scroll-anim slide-right">
                        <h2 className="section-badge">How It Works Together</h2>
                        <h3 className="section-title">One Team. Every Layer. Better Results.</h3>
                        {/* Desktop view */}
                        <p className="hidden md:block section-desc">Most businesses hire separate agencies for marketing, technology, and automation. The issue is they never collaborate. We manage all three disciplines as a single connected team. You get better results, zero confusion, and exactly one point of contact for everything.</p>
                        
                        {/* Mobile view - Swipeable horizontal cards */}
                        <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory pb-6 mt-8 w-full scrollbar-hide py-2 px-1">
                            <div className="min-w-[280px] snap-center p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-left">
                                <h3 className="text-base font-semibold text-white mb-2">The Problem</h3>
                                <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                                    Most businesses hire separate agencies for marketing, technology, and automation. The issue is they never collaborate.
                                </p>
                            </div>
                            <div className="min-w-[280px] snap-center p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-left">
                                <h3 className="text-base font-semibold text-white mb-2">The Flare Model</h3>
                                <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                                    We manage all three disciplines as a single connected team. You have exactly one point of contact for everything.
                                </p>
                            </div>
                            <div className="min-w-[280px] snap-center p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-left">
                                <h3 className="text-base font-semibold text-white mb-2">The Advantage</h3>
                                <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                                    You get better results, zero confusion, and systems that scale effortlessly with your business.
                                </p>
                            </div>
                        </div>

                        <ul className="stack-list">
                            <li>
                                <div className="list-dot" style={{ background: '#00D4FF', boxShadow: '0 0 10px #00D4FF' }}></div>
                                <div>
                                    <h5>Execution and Growth Operations</h5>
                                    <p>We ensure the right audience sees your business. We create content that builds trust and turns website visitors into paying customers.</p>
                                </div>
                            </li>
                            <li>
                                <div className="list-dot" style={{ background: '#5A5AFF', boxShadow: '0 0 10px #5A5AFF' }}></div>
                                <div>
                                    <h5>Infrastructure and Automation</h5>
                                    <p>Your technology runs automatically in the background. We set up reliable hosting and automate your workflows. Your systems will handle growth while you focus on the business.</p>
                                </div>
                            </li>
                            <li>
                                <div className="list-dot" style={{ background: '#8A2BE2', boxShadow: '0 0 10px #8A2BE2' }}></div>
                                <div>
                                    <h5>Data and Intelligence</h5>
                                    <p>We analyze performance and provide clear reporting. Every decision you make will be backed by reliable data instead of guesswork.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="stack-visual scroll-anim slide-left">
                        <div className="layer layer-3 data-layer">
                            <span>DATA & INTELLIGENCE</span>
                        </div>
                        <div className="layer layer-2 infra-layer">
                            <span>INFRASTRUCTURE & AUTOMATION</span>
                        </div>
                        <div className="layer layer-1 growth-layer">
                            <span>EXECUTION & GROWTH</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthStack;

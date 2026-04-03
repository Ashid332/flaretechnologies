import React, { useEffect, useRef } from 'react';
const flareLogo = "/logo.png";

const Services: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (sectionRef.current) {
            const animElements = sectionRef.current.querySelectorAll('.scroll-anim');
            animElements.forEach(el => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="ecosystem-section section-padding" ref={sectionRef}>
            {/* Animated Ecosystem SVG Background */}
            <svg className="eco-bg-visual" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="eco-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF3D3D" />
                        <stop offset="33%" stopColor="#FF8C00" />
                        <stop offset="66%" stopColor="#00D4FF" />
                        <stop offset="100%" stopColor="#8A2BE2" />
                    </linearGradient>
                </defs>
                <path className="eco-bg-path" d="M 350,200 L 700,500" style={{ animationDelay: '0s' }} />
                <path className="eco-bg-path" d="M 1050,200 L 700,500" style={{ animationDelay: '-2s' }} />
                <path className="eco-bg-path" d="M 350,800 L 700,500" style={{ animationDelay: '-4s' }} />
                <path className="eco-bg-path" d="M 1050,800 L 700,500" style={{ animationDelay: '-6s' }} />
                <path className="eco-bg-path"
                    d="M 200,500 C 100,200 400,100 700,500 C 1000,900 1300,800 1200,500 C 1100,200 800,100 500,500 C 200,900 300,800 200,500 Z"
                    style={{ opacity: 0.5 }} />
            </svg>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-header text-center scroll-anim slide-up" style={{ maxWidth: '800px', margin: '0 auto 5rem auto' }}>
                    <h2 className="section-badge">What We Do</h2>
                    <h3 className="section-title">Everything Your Business Needs to Grow</h3>
                    <p className="hidden sm:block section-desc mx-auto">
                        We cover everything from building your website to automating daily operations and scaling your brand. We handle these responsibilities as a unified team. This ensures every component works flawlessly together with no gaps in execution.
                    </p>
                    <div className="sm:hidden text-center flex flex-col mb-8 mt-2 px-2">
                        <p className="text-sm leading-relaxed text-gray-300 mx-auto max-w-md">
                            We cover everything from building your website to automating daily operations and scaling your brand. We handle these responsibilities as a unified team. This ensures every component works flawlessly together with no gaps in execution.
                        </p>
                    </div>
                </div>

                <div className="eco-interactive-layout scroll-anim fade-in delay-2">
                    {/* Top: AI & Automation Systems */}
                    <div className="eco-floating-card card-top p-4 sm:p-6 text-sm sm:text-base">
                        <div className="eco-glow-border"></div>
                        <div className="eco-card-header">
                            <div className="eco-title-wrap">
                                <h4>Automated Systems</h4>
                                <p className="hidden sm:block eco-short-desc">
                                    Stop doing identical tasks manually every day. We build capable systems to handle your repetitive work for you. This saves your team hours every week.
                                </p>
                                
                                <div className="sm:hidden mt-2 flex flex-col text-center">
                                    <p className="text-sm leading-relaxed text-gray-300 mb-3 mx-auto max-w-md">
                                        Stop doing identical tasks manually every day. We build capable systems to handle your repetitive work for you. This saves your team hours every week.
                                    </p>
                                    <details className="group border border-white/10 rounded-xl bg-white/5 text-left overflow-hidden">
                                        <summary className="p-3 text-sm font-semibold text-white cursor-pointer hover:bg-white/10 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                            <span>Capabilities</span>
                                            <span className="transition-transform group-open:rotate-180">▼</span>
                                        </summary>
                                        <div className="p-3 border-t border-white/10 text-sm text-gray-400">
                                            <p>
                                                We integrate intelligent automation, set up digital agents that operate around the clock, design custom workflows, and build tailored logistics platforms to run your operations efficiently.
                                            </p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block card-reveal-content">
                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                We integrate intelligent automation, set up digital agents that operate around the clock, design custom workflows, and build tailored logistics platforms to run your operations efficiently.
                            </p>
                        </div>
                    </div>

                    {/* Middle Left: Development & Engineering */}
                    <div className="eco-floating-card card-mid-left p-4 sm:p-6 text-sm sm:text-base">
                        <div className="eco-glow-border"></div>
                        <div className="eco-card-header">
                            <div className="eco-title-wrap">
                                <h4>Development and Engineering</h4>
                                <p className="hidden sm:block eco-short-desc">
                                    When you need a reliable website or custom application, we step in. We design digital products that look professional, perform flawlessly, and scale naturally with your business.
                                </p>

                                <div className="sm:hidden mt-2 flex flex-col text-center">
                                    <p className="text-sm leading-relaxed text-gray-300 mb-3 mx-auto max-w-md">
                                        When you need a reliable website or custom application, we step in. We design digital products that look professional, perform flawlessly, and scale naturally with your business.
                                    </p>
                                    <details className="group border border-white/10 rounded-xl bg-white/5 text-left overflow-hidden">
                                        <summary className="p-3 text-sm font-semibold text-white cursor-pointer hover:bg-white/10 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                            <span>Capabilities</span>
                                            <span className="transition-transform group-open:rotate-180">▼</span>
                                        </summary>
                                        <div className="p-3 border-t border-white/10 text-sm text-gray-400">
                                            <p>
                                                We handle complete web and software engineering from start to finish. Our team can build products entirely from scratch or provide extra support to your existing engineers.
                                            </p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block card-reveal-content">
                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                We handle complete web and software engineering from start to finish. Our team can build products entirely from scratch or provide extra support to your existing engineers.
                            </p>
                        </div>
                    </div>

                    {/* Central Hub: Flare Intelligence Platform - FIXED LOGO */}
                    <div className="eco-central-node w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 mx-auto">
                        <div className="central-glow blur-md"></div>
                        <div className="central-content">
                            <div className="central-icon">
                                <img
                                    src={flareLogo}
                                    alt="Flare Technologies Logo"
                                    className="w-20 h-20 object-contain mx-auto mb-2"
                                />
                            </div>
                            <h3>Everything Connected</h3>
                        </div>
                    </div>

                    {/* Middle Right: Cloud & Infrastructure */}
                    <div className="eco-floating-card card-mid-right p-4 sm:p-6 text-sm sm:text-base">
                        <div className="eco-glow-border"></div>
                        <div className="eco-card-header">
                            <div className="eco-title-wrap">
                                <h4>Cloud and Infrastructure</h4>
                                <p className="hidden sm:block eco-short-desc">
                                    Your digital presence must remain stable and responsive for every user. We ensure your platforms stay online constantly and handle higher traffic without breaking.
                                </p>
                                
                                <div className="sm:hidden mt-2 flex flex-col text-center">
                                    <p className="text-sm leading-relaxed text-gray-300 mb-3 mx-auto max-w-md">
                                        Your digital presence must remain stable and responsive for every user. We ensure your platforms stay online constantly and handle higher traffic without breaking.
                                    </p>
                                    <details className="group border border-white/10 rounded-xl bg-white/5 text-left overflow-hidden">
                                        <summary className="p-3 text-sm font-semibold text-white cursor-pointer hover:bg-white/10 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                            <span>Capabilities</span>
                                            <span className="transition-transform group-open:rotate-180">▼</span>
                                        </summary>
                                        <div className="p-3 border-t border-white/10 text-sm text-gray-400">
                                            <p>
                                                We manage robust cloud environments, seamlessly migrate your data without downtime, deploy updates safely, and architect strong backends to power your product.
                                            </p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block card-reveal-content">
                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                We manage robust cloud environments, seamlessly migrate your data without downtime, deploy updates safely, and architect strong backends to power your product.
                            </p>
                        </div>
                    </div>

                    {/* Bottom: Growth & Marketing Systems */}
                    <div className="eco-floating-card card-bottom p-4 sm:p-6 text-sm sm:text-base">
                        <div className="eco-glow-border"></div>
                        <div className="eco-card-header">
                            <div className="eco-title-wrap">
                                <h4>Growth and Marketing</h4>
                                <p className="hidden sm:block eco-short-desc">
                                    Reach the ideal audience and establish a brand people value. We help you attract attention and convert those regular visitors into paying customers.
                                </p>

                                <div className="sm:hidden mt-2 flex flex-col text-center">
                                    <p className="text-sm leading-relaxed text-gray-300 mb-3 mx-auto max-w-md">
                                        Reach the ideal audience and establish a brand people value. We help you attract attention and convert those regular visitors into paying customers.
                                    </p>
                                    <details className="group border border-white/10 rounded-xl bg-white/5 text-left overflow-hidden">
                                        <summary className="p-3 text-sm font-semibold text-white cursor-pointer hover:bg-white/10 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                            <span>Capabilities</span>
                                            <span className="transition-transform group-open:rotate-180">▼</span>
                                        </summary>
                                        <div className="p-3 border-t border-white/10 text-sm text-gray-400">
                                            <p>
                                                We execute targeted digital marketing campaigns, guide e-commerce strategies, manage influencer product launches, revamp your brand identity, and produce engaging videos.
                                            </p>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block card-reveal-content">
                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                We execute targeted digital marketing campaigns, guide e-commerce strategies, manage influencer product launches, revamp your brand identity, and produce engaging videos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

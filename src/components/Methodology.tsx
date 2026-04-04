import React, { useEffect, useRef } from 'react';

const Methodology: React.FC = () => {
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
        <section id="methodology" className="process-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center scroll-anim slide-up">
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>Methodology</h2>
                    <h3 className="section-title" style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.5rem' }}>
                        How We Work With You
                    </h3>
                    <p className="section-desc mx-auto"
                        style={{ maxWidth: '600px', color: '#E2E8F0', fontSize: '1.15rem', lineHeight: 1.6, fontWeight: 500 }}>
                        We eliminate guesswork. A structured, predictable system designed to turn your concept into a scalable digital asset.
                    </p>
                </div>

                <div className="horizontal-timeline scroll-anim slide-up">
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
                            <h4>Strategy & Assessment</h4>
                            <p style={{ lineHeight: 1.6, marginTop: '0.25rem' }}>Understand your business, identify inefficiencies, and define clear goals before execution.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-2-border">
                            <span style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '1.2rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.4)' }}>02</span>
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 02</span>
                            <h4>Architecture & Planning</h4>
                            <p style={{ lineHeight: 1.6, marginTop: '0.25rem' }}>Map out the technical architecture, project scope, and system requirements for a scalable foundation.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-3-border">
                            <span style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '1.2rem', fontWeight: 800, color: 'rgba(0, 212, 255, 0.4)' }}>03</span>
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 03</span>
                            <h4>Development & Execution</h4>
                            <p style={{ lineHeight: 1.6, marginTop: '0.25rem' }}>Agile build process with transparent updates, integrating features while ensuring high performance.</p>
                        </div>
                    </div>
                    
                    <div className="timeline-node">
                        <div className="timeline-icon-box gradient-4-border">
                            <span style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '1.2rem', fontWeight: 800, color: 'rgba(138, 43, 226, 0.4)' }}>04</span>
                            <svg className="timeline-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <div className="timeline-content">
                            <span className="step-label">Step 04</span>
                            <h4>Optimization & Scale</h4>
                            <p style={{ lineHeight: 1.6, marginTop: '0.25rem' }}>Continuous monitoring, scaling operations, and refining the product to drive long-term workflow value.</p>
                        </div>
                    </div>
                </div>

                {/* Micro Trust Elements */}
                <div className="scroll-anim slide-up" style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center', 
                    gap: '1.5rem', 
                    marginTop: '4rem', 
                    marginBottom: '4rem' 
                }}>
                    {['Clear timelines', 'No hidden processes', 'Consistent communication', 'Built for scalability'].map((text, i) => (
                        <div key={i} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem', 
                            fontSize: '0.9rem', 
                            fontWeight: 600, 
                            color: 'var(--text-secondary)',
                            background: 'rgba(255,255,255,0.03)',
                            padding: '0.5rem 1rem',
                            borderRadius: '100px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {text}
                        </div>
                    ))}
                </div>

                {/* 1. DETAILED PROCESS BREAKDOWN */}
                <div className="scroll-anim slide-up" style={{ marginTop: '8rem', marginBottom: '8rem' }}>
                    <div className="section-header text-center" style={{ marginBottom: '5rem' }}>
                        <h3 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>Inside Our Process</h3>
                    </div>

                    <style>
                        {`
                        .process-flow-container {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 2rem;
                            position: relative;
                            z-index: 1;
                        }
                        @media (max-width: 1024px) {
                            .process-flow-container { grid-template-columns: repeat(2, 1fr); row-gap: 3rem; }
                        }
                        @media (max-width: 640px) {
                            .process-flow-container { grid-template-columns: 1fr; }
                        }
                        .process-flow-line {
                            position: absolute;
                            top: 45px;
                            left: 12.5%;
                            right: 12.5%;
                            height: 1px;
                            background: linear-gradient(90deg, rgba(255, 61, 61, 0), rgba(255, 140, 0, 0.3), rgba(0, 212, 255, 0.3), rgba(138, 43, 226, 0));
                            z-index: -1;
                        }
                        @media (max-width: 1024px) {
                            .process-flow-line { display: none; }
                        }
                        .process-node {
                            background: rgba(255, 255, 255, 0.015);
                            backdrop-filter: blur(12px);
                            border: 1px solid rgba(255, 255, 255, 0.06);
                            border-radius: 16px;
                            padding: 2.5rem 2rem;
                            position: relative;
                            transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                            display: flex;
                            flex-direction: column;
                        }
                        .process-node:hover {
                            transform: translateY(-8px);
                            border-color: rgba(255, 140, 0, 0.3);
                            background: rgba(255, 255, 255, 0.03);
                            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(255, 140, 0, 0.05);
                        }
                        .process-node-active {
                            border-color: rgba(255, 140, 0, 0.2);
                            background: rgba(255, 255, 255, 0.03);
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), inset 0 0 15px rgba(255, 140, 0, 0.05);
                        }
                        .p-node-step {
                            font-size: 0.75rem;
                            font-weight: 700;
                            letter-spacing: 0.15em;
                            text-transform: uppercase;
                            color: var(--text-secondary);
                            margin-bottom: 1rem;
                            display: flex;
                            align-items: center;
                            gap: 0.75rem;
                        }
                        .p-node-step-dot {
                            width: 6px;
                            height: 6px;
                            border-radius: 50%;
                            background: var(--text-secondary);
                            transition: background 0.3s;
                        }
                        .process-node-active .p-node-step-dot { background: #FF8C00; box-shadow: 0 0 10px rgba(255, 140, 0, 0.5); }
                        .process-node:hover .p-node-step-dot { background: #FF8C00; box-shadow: 0 0 10px rgba(255, 140, 0, 0.5); }
                        
                        .p-node-divider {
                            height: 1px;
                            width: 100%;
                            background: rgba(255, 255, 255, 0.06);
                            margin-bottom: 2rem;
                        }
                        .p-node-title {
                            font-size: 1.4rem;
                            font-weight: 800;
                            color: var(--text-primary);
                            margin-bottom: 2rem;
                            line-height: 1.3;
                        }
                        .p-node-list {
                            list-style: none;
                            padding: 0;
                            margin: 0;
                        }
                        .p-node-item {
                            display: flex;
                            align-items: flex-start;
                            gap: 0.85rem;
                            margin-bottom: 1.25rem;
                            font-size: 0.95rem;
                            color: var(--text-secondary);
                            line-height: 1.5;
                        }
                        .p-node-item:last-child {
                            margin-bottom: 0;
                        }
                        .p-node-icon {
                            margin-top: 4px;
                            flex-shrink: 0;
                            color: rgba(255, 255, 255, 0.2);
                            transition: color 0.3s;
                        }
                        .process-node:hover .p-node-icon, .process-node-active .p-node-icon {
                            color: #FF8C00;
                        }
                        
                        .value-grid-container {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 2rem;
                            margin-bottom: 8rem;
                        }
                        @media (max-width: 1200px) {
                            .value-grid-container { grid-template-columns: repeat(2, 1fr); }
                        }
                        @media (max-width: 640px) {
                            .value-grid-container { grid-template-columns: 1fr; }
                        }
                        `}
                    </style>

                    <div className="process-flow-container">
                        <div className="process-flow-line"></div>
                        
                        {/* NODE 01 */}
                        <div className="process-node process-node-active">
                            <div className="p-node-step"><div className="p-node-step-dot"></div> STEP 01</div>
                            <div className="p-node-divider"></div>
                            <h4 className="p-node-title">Strategy & Assessment</h4>
                            <ul className="p-node-list">
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Understand your business context
                                </li>
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Identify current inefficiencies
                                </li>
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Define clear, measurable goals
                                </li>
                            </ul>
                        </div>

                        {/* NODE 02 */}
                        <div className="process-node">
                            <div className="p-node-step"><div className="p-node-step-dot"></div> STEP 02</div>
                            <div className="p-node-divider"></div>
                            <h4 className="p-node-title">Architecture & Planning</h4>
                            <ul className="p-node-list">
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Design robust system structure
                                </li>
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Select optimal technologies
                                </li>
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Create exact execution roadmap
                                </li>
                            </ul>
                        </div>

                        {/* NODE 03 */}
                        <div className="process-node">
                            <div className="p-node-step"><div className="p-node-step-dot"></div> STEP 03</div>
                            <div className="p-node-divider"></div>
                            <h4 className="p-node-title">Development & Execution</h4>
                            <ul className="p-node-list">
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Build scalable infrastructure
                                </li>
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Integrate core system features
                                </li>
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Ensure uncompromised speed
                                </li>
                            </ul>
                        </div>

                        {/* NODE 04 */}
                        <div className="process-node">
                            <div className="p-node-step"><div className="p-node-step-dot"></div> STEP 04</div>
                            <div className="p-node-divider"></div>
                            <h4 className="p-node-title">Optimization & Scale</h4>
                            <ul className="p-node-list">
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Monitor system performance
                                </li>
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Iterate and improve workflows
                                </li>
                                <li className="p-node-item">
                                    <svg className="p-node-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Scale operations securely
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2-5. OUTCOMES, TIMELINE, COMMUNICATION, WHY THIS WORKS */}
                <div className="scroll-anim slide-up value-grid-container">
                    
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '24px', padding: '2.5rem' }}>
                        <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem' }}>What You Get</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                            <li style={{ marginBottom: '1.2rem', display: 'flex', flexDirection: 'column' }}><strong style={{ color: '#FF8C00', marginBottom: '0.2rem' }}>Strategy:</strong> A clear, actionable plan</li>
                            <li style={{ marginBottom: '1.2rem', display: 'flex', flexDirection: 'column' }}><strong style={{ color: '#FF8C00', marginBottom: '0.2rem' }}>Planning:</strong> The right tools chosen for you</li>
                            <li style={{ marginBottom: '1.2rem', display: 'flex', flexDirection: 'column' }}><strong style={{ color: '#FF8C00', marginBottom: '0.2rem' }}>Development:</strong> A fast, working product</li>
                            <li style={{ display: 'flex', flexDirection: 'column' }}><strong style={{ color: '#FF8C00', marginBottom: '0.2rem' }}>Optimization:</strong> Support to keep you growing</li>
                        </ul>
                    </div>
                    
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '24px', padding: '2.5rem' }}>
                        <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem' }}>Typical Timeline</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}><span>Strategy:</span> <strong style={{ color: '#fff' }}>2–5 days</strong></li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}><span>Planning:</span> <strong style={{ color: '#fff' }}>5–10 days</strong></li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}><span>Development:</span> <strong style={{ color: '#fff' }}>2–6 weeks</strong></li>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Optimization:</span> <strong style={{ color: '#fff' }}>Ongoing</strong></li>
                        </ul>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '24px', padding: '2.5rem' }}>
                        <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem' }}>How We Work</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D4FF', flexShrink: 0 }}></div> We keep you in the loop weekly</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D4FF', flexShrink: 0 }}></div> You'll always know what's next</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D4FF', flexShrink: 0 }}></div> No hidden fees or surprises</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00D4FF', flexShrink: 0 }}></div> We won't ever go silent on you</li>
                        </ul>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: '24px', padding: '2.5rem' }}>
                        <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem' }}>Why This Works</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF3D3D', flexShrink: 0 }}></div> We follow a proven method</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF3D3D', flexShrink: 0 }}></div> No guessing—we use real data</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF3D3D', flexShrink: 0 }}></div> Built to handle future growth</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF3D3D', flexShrink: 0 }}></div> Our focus is strictly your ROI</li>
                        </ul>
                    </div>
                </div>

                {/* 6. Final CTA Section */}
                <div className="scroll-anim slide-up" style={{
                    marginTop: '3rem',
                    textAlign: 'center',
                    background: 'rgba(11, 15, 25, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '24px',
                    padding: '4rem 2rem',
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
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
                        Ready to Build a System That Works?
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', background: 'linear-gradient(135deg, #FF8C00, #FF3D3D)', boxShadow: '0 4px 15px rgba(255, 140, 0, 0.4)' }}>
                            Book Consultation
                        </a>
                        <a href="#contact" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                            Request Strategy Audit
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Methodology;

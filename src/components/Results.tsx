import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Results: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // We do not unobserve because scroll animations might be repeated, or we can keep it as is.
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
        <section id="results" ref={sectionRef} style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-base)' }}>
            <style>
                {`
                .results-grid-new {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2.5rem;
                    margin-top: 4rem;
                }
                .result-premium-card {
                    background: #121620;
                    border: 1px solid var(--border-subtle);
                    border-radius: 24px;
                    padding: 3rem 2.5rem;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                }
                .result-premium-card:hover {
                    transform: translateY(-10px);
                    border-color: rgba(255, 140, 0, 0.3);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 140, 0, 0.05);
                }
                .r-pill-tag {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.35rem 1rem;
                    border-radius: 100px;
                    border: 1px solid rgba(255, 140, 0, 0.3);
                    background: rgba(255, 140, 0, 0.05);
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #FF8C00;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 2rem;
                    align-self: flex-start;
                }
                .r-metric-display {
                    font-size: 4rem;
                    font-weight: 800;
                    line-height: 1;
                    margin-bottom: 0.5rem;
                }
                .r-metric-label {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.25rem;
                }
                .r-impact-summary {
                    font-size: 1rem;
                    color: #8A9BB3; /* Slightly brighter than text-secondary */
                    font-style: italic;
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                }
                .r-structure-box {
                    margin-bottom: 2rem;
                    padding-bottom: 2rem;
                    border-bottom: 1px solid var(--border-subtle);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .r-text-block {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }
                .r-text-block strong {
                    color: var(--text-primary);
                    font-weight: 700;
                    margin-right: 0.5rem;
                }
                .r-bullet-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 2.5rem 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    flex-grow: 1;
                }
                .r-bullet-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    font-size: 0.95rem;
                    color: var(--text-primary);
                    font-weight: 500;
                }
                .r-bullet-check {
                    color: #00D4FF;
                    font-weight: bold;
                }
                .r-view-link {
                    color: #FF8C00;
                    font-weight: 700;
                    font-size: 0.95rem;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: color 0.2s;
                    margin-top: auto;
                }
                .r-view-link:hover {
                    color: #FFA333;
                }
                .global-stats-bar {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    padding: 3rem 0;
                    margin-bottom: 6rem;
                    border-bottom: 1px solid var(--border-subtle);
                    text-align: center;
                }
                .stat-item h4 {
                    font-size: 3rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                    line-height: 1;
                }
                .stat-item p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                }
                `}
            </style>

            <div className="container">
                {/* 8. TOP SUMMARY SECTION (GLOBAL STATS) */}
                <div className="global-stats-bar scroll-anim slide-up">
                    <div className="stat-item">
                        <h4>100+</h4>
                        <p>Hours Saved Weekly</p>
                    </div>
                    <div className="stat-item">
                        <h4>300%</h4>
                        <p>Avg Growth Increase</p>
                    </div>
                    <div className="stat-item">
                        <h4>0</h4>
                        <p>Downtime Deployments</p>
                    </div>
                </div>

                {/* HEADER SECTION */}
                <div className="section-header text-center scroll-anim slide-up">
                    <h2 className="section-badge" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>Outcomes</h2>
                    <h3 className="section-title" style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        Real Results for Real Businesses
                    </h3>
                    {/* 9. TRUST LINE */}
                    <p className="mx-auto" style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600, maxWidth: '700px', marginBottom: '0.75rem' }}>
                        Real businesses. Measurable outcomes. No guesswork.
                    </p>
                    <p className="section-desc mx-auto" style={{ maxWidth: '600px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Here is exactly what happened when businesses partnered with us. We deliver proof, not promises. The numbers speak for themselves.
                    </p>
                </div>

                {/* CARDS SECTION (3 COLUMNS) */}
                <div className="results-grid-new scroll-anim slide-up">
                    
                    {/* CARD 1: E-COMMERCE */}
                    <div className="result-premium-card">
                        <div className="feature-gradient-bar"></div>
                        <div className="r-pill-tag">E-Commerce</div>
                        
                        <div>
                            <div className="r-metric-display highlight-gradient">300%</div>
                            <h5 className="r-metric-label">Revenue Growth in Q1</h5>
                            {/* 3. IMPACT SUMMARY */}
                            <p className="r-impact-summary">"Handled 10,000+ concurrent users without crashes"</p>
                        </div>

                        {/* 4. RESTRUCTURED CONTENT */}
                        <div className="r-structure-box">
                            <div className="r-text-block"><strong>Challenge:</strong> Old website crashed during traffic spikes, causing severe drops in revenue.</div>
                            <div className="r-text-block"><strong>Solution:</strong> Rebuilt the platform to handle massive scale while running a targeted acquisition campaign.</div>
                        </div>

                        {/* 5. KEY RESULTS */}
                        <ul className="r-bullet-list">
                            <li className="r-bullet-item"><span className="r-bullet-check">✔</span> 300% increase in conversions</li>
                            <li className="r-bullet-item"><span className="r-bullet-check">✔</span> 2x faster load times globally</li>
                            <li className="r-bullet-item"><span className="r-bullet-check">✔</span> 0 downtime during peak sales</li>
                        </ul>

                        {/* 7. EXPANSION OPTION */}
                        <Link to="#" className="r-view-link">View Full Case Study &rarr;</Link>
                    </div>

                    {/* CARD 2: B2B LOGISTICS */}
                    <div className="result-premium-card">
                        <div className="feature-gradient-bar"></div>
                        <div className="r-pill-tag">B2B Logistics</div>
                        
                        <div>
                            <div className="r-metric-display highlight-gradient">40hrs</div>
                            <h5 className="r-metric-label">Saved via Automation</h5>
                            {/* 3. IMPACT SUMMARY */}
                            <p className="r-impact-summary">"Reduced manual workload and data entry by 80%"</p>
                        </div>

                        {/* 4. RESTRUCTURED CONTENT */}
                        <div className="r-structure-box">
                            <div className="r-text-block"><strong>Challenge:</strong> The team spent hours weekly copying data between disconnected tracking systems.</div>
                            <div className="r-text-block"><strong>Solution:</strong> Built automated data pipelines and predictive stock models to handle workflow.</div>
                        </div>

                        {/* 5. KEY RESULTS */}
                        <ul className="r-bullet-list">
                            <li className="r-bullet-item"><span className="r-bullet-check">✔</span> 40 hours saved per week</li>
                            <li className="r-bullet-item"><span className="r-bullet-check">✔</span> 100% elimination of data entry errors</li>
                            <li className="r-bullet-item"><span className="r-bullet-check">✔</span> Real-time inventory visibility</li>
                        </ul>

                        {/* 7. EXPANSION OPTION */}
                        <Link to="#" className="r-view-link">View Full Case Study &rarr;</Link>
                    </div>

                    {/* CARD 3: ENTERPRISE SAAS */}
                    <div className="result-premium-card">
                        <div className="feature-gradient-bar"></div>
                        <div className="r-pill-tag">Enterprise SaaS</div>
                        
                        <div>
                            <div className="r-metric-display highlight-gradient">Zero</div>
                            <h5 className="r-metric-label">Downtime Migration</h5>
                            {/* 3. IMPACT SUMMARY */}
                            <p className="r-impact-summary">"Executed full system overhaul seamlessly under load"</p>
                        </div>

                        {/* 4. RESTRUCTURED CONTENT */}
                        <div className="r-structure-box">
                            <div className="r-text-block"><strong>Challenge:</strong> Needed a complete backend migration without taking the active product offline.</div>
                            <div className="r-text-block"><strong>Solution:</strong> Engineered and executed a live migration architecture with no interruptions.</div>
                        </div>

                        {/* 5. KEY RESULTS */}
                        <ul className="r-bullet-list">
                            <li className="r-bullet-item"><span className="r-bullet-check">✔</span> 0 downtime during entire migration</li>
                            <li className="r-bullet-item"><span className="r-bullet-check">✔</span> No data loss or customer disruption</li>
                            <li className="r-bullet-item"><span className="r-bullet-check">✔</span> 50% reduction in long-term server costs</li>
                        </ul>

                        {/* 7. EXPANSION OPTION */}
                        <Link to="#" className="r-view-link">View Full Case Study &rarr;</Link>
                    </div>

                </div>

                {/* 10. FINAL CTA SECTION */}
                <div className="scroll-anim slide-up" style={{ marginTop: '8rem', marginBottom: '2rem' }}>
                    <div style={{
                        textAlign: 'center',
                        background: 'rgba(11, 15, 25, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '24px',
                        padding: '5rem 2rem',
                        position: 'relative',
                        overflow: 'hidden',
                        backdropFilter: 'blur(16px)',
                        maxWidth: '900px',
                        margin: '0 auto'
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
                        <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '3rem', letterSpacing: '-0.02em' }}>
                            Want Results Like These?
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                            <Link to="/contact" className="btn btn-primary btn-large" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', background: 'linear-gradient(135deg, #FF8C00, #FF3D3D)', boxShadow: '0 4px 15px rgba(255, 140, 0, 0.4)', borderRadius: '100px' }}>
                                Book Consultation
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', borderRadius: '100px', border: '1px solid var(--border-subtle)', background: 'transparent' }}>
                                Request Strategy Audit
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Results;

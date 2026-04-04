import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '@/data/servicesData';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const AllServices: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen relative overflow-hidden" style={{ background: 'var(--bg-base)', paddingTop: '7rem', paddingBottom: '5rem' }}>
            {/* Ambient glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[160px] pointer-events-none"
                style={{ background: 'rgba(255,77,0,0.07)' }} />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-[160px] pointer-events-none"
                style={{ background: 'rgba(138,43,226,0.07)' }} />

            <div className="container px-4 sm:px-6 mx-auto relative z-10 py-16">

                {/* Back link */}
                <div className="mb-10">
                    <Link to="/services"
                        className="inline-flex items-center gap-2 transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                        <ArrowLeft className="w-4 h-4" />
                        Back to Services
                    </Link>
                </div>

                {/* Page header */}
                <div className="mb-16 max-w-3xl">
                    <span className="section-badge">Full Directory</span>
                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        marginBottom: '1rem',
                    }}>
                        Explore <span className="highlight-gradient">All Services</span>
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.0625rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                        maxWidth: '560px',
                    }}>
                        A complete directory of our specialized technology, automation, and growth solutions designed to scale your business.
                    </p>
                </div>

                {/* Service categories */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginTop: '1rem' }}>
                    {servicesData.map((category) => (
                        <div key={category.id}>
                            {/* Category header */}
                            <div style={{ marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                                <h2 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.625rem',
                                    fontWeight: 700,
                                    color: '#fff',
                                    letterSpacing: '-0.015em',
                                    marginBottom: '0.5rem',
                                }}>
                                    {category.name}
                                </h2>
                                <p style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.9375rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.65,
                                    maxWidth: '680px',
                                }}>
                                    {category.description}
                                </p>
                            </div>

                            {/* Sub-service cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {category.subServices.map((sub, idx) => (
                                    <Link
                                        key={idx}
                                        to={`/services/${sub.slug}`}
                                        className="group flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
                                        style={{
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: '1rem',
                                            padding: '1.75rem',
                                            textDecoration: 'none',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = 'rgba(255,77,0,0.3)';
                                            e.currentTarget.style.boxShadow = '0 8px 32px -8px rgba(255,77,0,0.15)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div style={{ flexGrow: 1 }}>
                                            <h3 style={{
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '1.0625rem',
                                                fontWeight: 700,
                                                color: '#fff',
                                                letterSpacing: '-0.01em',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1.35,
                                                transition: 'color 0.2s',
                                            }}
                                                className="group-hover:text-orange-400">
                                                {sub.title}
                                            </h3>
                                            <p style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.85rem',
                                                color: 'var(--text-secondary)',
                                                lineHeight: 1.65,
                                                marginBottom: '1.25rem',
                                            }}>
                                                {sub.shortDesc}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-1.5 group-hover:gap-2 transition-all duration-200"
                                            style={{
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '0.8125rem',
                                                fontWeight: 600,
                                                color: 'var(--flare-orange)',
                                            }}>
                                            Explore Details
                                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
};

export default AllServices;

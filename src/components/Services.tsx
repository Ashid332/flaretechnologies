import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '@/data/servicesData';
import { ArrowRight, Sparkles, Cpu } from 'lucide-react';

const colorConfig: Record<string, {
    border: string;
    hoverBorder: string;
    accent: string;
    glow: string;
    iconBg: string;
    iconColor: string;
}> = {
    orange: {
        border: 'border-white/5',
        hoverBorder: 'hover:border-orange-500/40',
        accent: 'text-orange-400',
        glow: 'group-hover:shadow-[0_8px_40px_-8px_rgba(255,140,0,0.25)]',
        iconBg: 'bg-orange-500/10',
        iconColor: 'text-orange-400',
    },
    blue: {
        border: 'border-white/5',
        hoverBorder: 'hover:border-blue-500/40',
        accent: 'text-blue-400',
        glow: 'group-hover:shadow-[0_8px_40px_-8px_rgba(59,130,246,0.25)]',
        iconBg: 'bg-blue-500/10',
        iconColor: 'text-blue-400',
    },
    purple: {
        border: 'border-white/5',
        hoverBorder: 'hover:border-purple-500/40',
        accent: 'text-purple-400',
        glow: 'group-hover:shadow-[0_8px_40px_-8px_rgba(168,85,247,0.25)]',
        iconBg: 'bg-purple-500/10',
        iconColor: 'text-purple-400',
    },
    red: {
        border: 'border-white/5',
        hoverBorder: 'hover:border-red-500/40',
        accent: 'text-red-400',
        glow: 'group-hover:shadow-[0_8px_40px_-8px_rgba(239,68,68,0.25)]',
        iconBg: 'bg-red-500/10',
        iconColor: 'text-red-400',
    },
};

const nodes = [
    { area: 'topleft',     colorTheme: 'orange', dataIndex: 0 },
    { area: 'topright',    colorTheme: 'blue',   dataIndex: 1 },
    { area: 'bottomleft',  colorTheme: 'purple', dataIndex: 2 },
    { area: 'bottomright', colorTheme: 'red',    dataIndex: 3 },
];

const Services: React.FC = () => {
    return (
        <section className="relative overflow-hidden" style={{ background: 'var(--bg-base)', paddingTop: '7rem', paddingBottom: '5rem' }}>
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(255,77,0,0.04) 0%, transparent 70%)' }} />

            <style>{`
                .services-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                    align-items: start;
                    justify-items: center;
                }
                @media (min-width: 1024px) {
                    .services-grid {
                        grid-template-columns: 1fr minmax(220px, 280px) 1fr;
                        grid-template-rows: auto auto;
                        grid-template-areas:
                            "topleft    center  topright"
                            "bottomleft center  bottomright";
                        gap: 2rem 1.5rem;
                    }
                    .area-topleft     { grid-area: topleft; }
                    .area-topright    { grid-area: topright; }
                    .area-bottomleft  { grid-area: bottomleft; }
                    .area-bottomright { grid-area: bottomright; }
                    .area-center      { grid-area: center; grid-row: 1 / 3; }
                }
            `}</style>

            <div className="container px-4 sm:px-6 mx-auto relative z-10 py-16">

                {/* ── Page Header ── */}
                <div className="text-center mb-14 max-w-2xl mx-auto">
                    <span className="section-badge">Our Services</span>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.75rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem' }}>
                        Everything your business needs,{' '}
                        <span className="highlight-gradient">connected.</span>
                    </h1>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                        Intelligent systems, robust infrastructure, and aggressive growth strategies — all under one roof.
                    </p>
                </div>

                {/* ── Radial Grid ── */}
                <div className="services-grid w-full max-w-5xl mx-auto mb-14">

                    {/* Center Node */}
                    <div className="area-center w-52 h-52 lg:w-60 lg:h-60 rounded-full flex items-center justify-center relative group"
                        style={{ background: 'rgba(18,22,32,0.9)', border: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 0 60px rgba(255,77,0,0.12)' }}>
                        <div className="absolute inset-0 rounded-full transition-transform duration-700 group-hover:scale-110"
                            style={{ background: 'radial-gradient(ellipse at center, rgba(255,77,0,0.1) 0%, transparent 70%)' }} />
                        <div className="absolute w-1/2 h-1/2 rounded-full blur-[28px] opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                            style={{ background: 'linear-gradient(135deg, #FF4D00, #8A2BE2)' }} />
                        <div className="relative z-10 text-center">
                            <Cpu className="w-7 h-7 mx-auto mb-3 opacity-40" style={{ color: '#fff' }} />
                            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                                <span style={{ display: 'block', background: 'linear-gradient(90deg, #FF8C00, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Everything</span>
                                <span style={{ display: 'block', background: 'linear-gradient(90deg, #60A5FA, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connected</span>
                            </p>
                        </div>
                    </div>

                    {/* Service Cards */}
                    {nodes.map((node) => {
                        const cfg = colorConfig[node.colorTheme];
                        const data = servicesData[node.dataIndex];
                        return (
                            <Link
                                key={node.area}
                                to="/services/all"
                                className={`area-${node.area} w-full group flex flex-col h-full text-left relative overflow-hidden transition-all duration-400 hover:-translate-y-1 ${cfg.glow}`}
                                style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: '1.25rem',
                                    padding: '2rem',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.borderColor = cfg.hoverBorder.replace('hover:border-', '').replace('/40', ''))}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
                            >
                                {/* Icon */}
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${cfg.iconBg}`}>
                                    <Sparkles className={`w-5 h-5 ${cfg.iconColor}`} />
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.1875rem',
                                    fontWeight: 700,
                                    color: '#fff',
                                    letterSpacing: '-0.01em',
                                    marginBottom: '0.625rem',
                                    lineHeight: 1.3,
                                }}>
                                    {data.name}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.875rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.65,
                                    flexGrow: 1,
                                }}>
                                    {data.description}
                                </p>

                                {/* CTA */}
                                <div className={`mt-5 flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${cfg.accent}`}
                                    style={{ fontFamily: 'var(--font-body)' }}>
                                    Explore Methods
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* ── Action Buttons ── */}
                <div className="flex flex-col items-center gap-4 pt-10 w-full max-w-3xl mx-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                        <a href="#contact"
                            className="btn btn-primary"
                            style={{ borderRadius: '999px', padding: '0.875rem 2rem', fontSize: '0.9375rem', fontWeight: 700 }}>
                            Book Consultation
                        </a>
                        <a href="#contact"
                            className="btn btn-secondary"
                            style={{ borderRadius: '999px', padding: '0.875rem 2rem', fontSize: '0.9375rem', fontWeight: 600 }}>
                            Start Strategy Survey
                        </a>
                    </div>
                    <Link to="/services/all"
                        className="group flex items-center gap-2 transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none', marginTop: '0.5rem' }}>
                        Explore All Services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--flare-orange)' }} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Services;

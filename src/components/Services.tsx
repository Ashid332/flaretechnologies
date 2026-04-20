import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import OrbitingSkills from '@/components/ui/orbiting-skills';

interface ServicesProps {
    openModal: () => void;
}

const Services: React.FC<ServicesProps> = ({ openModal }) => {
    return (
        <section className="relative overflow-hidden" style={{ background: 'var(--bg-base)', paddingTop: '7rem', paddingBottom: '5rem' }}>
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(255,77,0,0.04) 0%, transparent 70%)' }} />

            <div className="container px-4 sm:px-6 mx-auto relative z-10 py-16">

                {/* ── Page Header ── */}
                <div className="text-center mb-14 max-w-4xl mx-auto">
                    <span className="section-badge">Our Services</span>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 700, color: '#FFC0CB', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem' }}>
                        Everything your business needs, connected.
                    </h1>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                        Intelligent systems, robust infrastructure, and aggressive growth strategies — all under one roof.
                    </p>
                </div>

                {/* ── Interactive Skills Hub ── */}
                <div className="flex items-center justify-center w-full max-w-5xl mx-auto mb-14">
                    <div className="relative">
                        <OrbitingSkills />
                    </div>
                </div>

                {/* ── Action Buttons ── */}
                <div className="flex flex-col items-center gap-4 pt-10 w-full max-w-3xl mx-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                        <button onClick={openModal} className="btn btn-primary cursor-pointer">Book Consultation</button>
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHideNav, setIsHideNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            setIsScrolled(currentScroll > 50);

            if (currentScroll <= 0) {
                setIsHideNav(false);
            } else if (currentScroll > lastScroll && currentScroll > 150) {
                setIsHideNav(true);
                if (isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = 'auto';
                }
            } else {
                setIsHideNav(false);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll, isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        document.body.style.overflow = newState ? 'hidden' : 'auto';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isHideNav ? 'hide-nav' : ''}`}>
            <div className="logo flex items-center">
                <Link to="/">
                    <img
                        src="/logo.png"
                        alt="Flare Technologies Logo"
                        className="brand-logo w-32 md:w-48 h-auto"
                        style={{ mixBlendMode: 'screen', filter: 'invert(1) hue-rotate(180deg) drop-shadow(0 0 10px rgba(255, 77, 0, 0.4))' }}
                    />
                </Link>
            </div>

            <nav className="nav desktop-nav hidden md:flex">
                <Link to="/">Home</Link>
                <div className="dropdown-wrapper">
                    <Link to="/services" className="dropdown-trigger">Services <span className="chevron">▾</span></Link>
                    <div className="mega-menu">
                        <div className="mega-content">
                            <div className="mega-column">
                                <h5 className="mega-title">Automated Systems</h5>
                                <Link to="/services">Process Automation</Link>
                                <Link to="/services">Digital Agents</Link>
                                <Link to="/services">Logistics Management</Link>
                            </div>
                            <div className="mega-column">
                                <h5 className="mega-title">Engineering and Infrastructure</h5>
                                <Link to="/services">Custom Software</Link>
                                <Link to="/services">Cloud Architecture</Link>
                                <Link to="/services">Team Augmentation</Link>
                            </div>
                            <div className="mega-column">
                                <h5 className="mega-title">Growth and Marketing</h5>
                                <Link to="/services">Digital Marketing</Link>
                                <Link to="/services">Brand Identity Revamp</Link>
                                <Link to="/services">E-commerce Optimization</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/methodology">Methodology</Link>
                <Link to="/results">Results</Link>
                <Link to="/about">About</Link>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>Contact</a>
            </nav>

            <div className="header-actions desktop-nav hidden md:flex">
                <button onClick={onOpenModal} className="btn btn-header-ghost">Request Audit</button>
                <button onClick={onOpenModal} className="btn btn-header-primary">Book Consultation</button>
            </div>

            <button
                className={`menu-toggle block md:hidden ${isMobileMenuOpen ? 'active' : ''}`}
                aria-label="Toggle menu"
                onClick={toggleMobileMenu}
            >
                <span className="hamburger"></span>
            </button>

            <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-links-container">
                    <Link to="/" className="mobile-link" onClick={closeMobileMenu}>Home</Link>
                    <Link to="/services" className="mobile-link" onClick={closeMobileMenu}>Services</Link>
                    <Link to="/methodology" className="mobile-link" onClick={closeMobileMenu}>Methodology</Link>
                    <Link to="/results" className="mobile-link" onClick={closeMobileMenu}>Results</Link>
                    <Link to="/about" className="mobile-link" onClick={closeMobileMenu}>About</Link>
                    <a href="#contact" className="mobile-link" onClick={(e) => { e.preventDefault(); closeMobileMenu(); onOpenModal(); }}>Contact</a>
                </div>
                <div className="mobile-actions">
                    <button
                        onClick={() => { closeMobileMenu(); onOpenModal(); }}
                        className="btn btn-header-ghost btn-full mb-3"
                        style={{ marginBottom: '1rem' }}
                    >
                        Request Audit
                    </button>
                    <button
                        onClick={() => { closeMobileMenu(); onOpenModal(); }}
                        className="btn btn-header-primary btn-full"
                    >
                        Book Consultation
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

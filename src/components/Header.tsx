import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Subscripció', path: '/subscription' },
        { name: 'Botiga', path: '/shop' },
        { name: 'Blog', path: '/blog' },
        { name: 'Sobre mi', path: '/about' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.3s ease',
                padding: 'var(--spacing-md) 0',
            }}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '24px', color: 'var(--color-text-main)' }}>by</span>
                    <span style={{ fontFamily: 'var(--font-script)', fontSize: '32px', color: 'var(--color-primary)' }}>lau</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden-mobile" style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{
                                color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text-main)',
                                fontWeight: 500,
                                position: 'relative',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text-main)'}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-md">
                    <div className="hidden-mobile">
                        <Button size="sm">Subscriu-te</Button>
                    </div>

                    <button
                        className="visible-mobile"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ display: 'none' }} // Hidden by default, shown in media query
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'var(--color-bg-white)',
                        padding: 'var(--spacing-lg)',
                        boxShadow: 'var(--shadow-md)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-md)',
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                fontSize: '18px',
                                fontWeight: 500,
                                color: 'var(--color-text-main)',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button fullWidth onClick={() => setIsMobileMenuOpen(false)}>Subscriu-te</Button>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .visible-mobile { display: block !important; }
        }
      `}</style>
        </header>
    );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-bg-footer)', padding: 'var(--spacing-3xl) 0 var(--spacing-lg)' }}>
            <div className="container">
                <div className="flex flex-col items-center gap-lg text-center">
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '20px' }}>by</span>
                        <span style={{ fontFamily: 'var(--font-script)', fontSize: '28px', color: 'var(--color-primary)' }}>lau</span>
                    </div>

                    <p style={{ color: 'var(--color-text-sub)', maxWidth: '400px' }}>
                        Plantilles i moments per pintar la calma.
                    </p>

                    {/* Links */}
                    <div className="flex gap-lg flex-wrap justify-center">
                        <Link to="/subscription">Subscripció</Link>
                        <Link to="/shop">Botiga</Link>
                        <Link to="/about">Sobre mi</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contacte</Link>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-md">
                        <a href="#" style={{ color: 'var(--color-text-main)' }}><Instagram size={20} /></a>
                        {/* Add more icons as needed */}
                    </div>

                    <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-border)', margin: 'var(--spacing-lg) 0' }}></div>

                    <div className="flex flex-col gap-sm text-center" style={{ fontSize: '14px', color: 'var(--color-text-sub)' }}>
                        <p>© bylau, 2025. Fet amb amor i aquarel·les.</p>
                        <div className="flex gap-md justify-center">
                            <Link to="/privacy">Política de privacitat</Link>
                            <Link to="/terms">Termes i condicions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

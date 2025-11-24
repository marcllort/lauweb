import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Brush, Mail, Heart, Star, Eye } from 'lucide-react';

export const Home: React.FC = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="flex flex-col md:flex-row items-center gap-3xl">
                    <div style={{ flex: 1 }} className="fade-in">
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'var(--spacing-md)' }}>
                            Plantilles boniques per pintar moments tranquils
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-sub)', marginBottom: 'var(--spacing-xl)' }}>
                            Cada mes rebràs plantilles il·lustrades per la Laura per pintar sola, amb amigues o amb família.
                        </p>
                        <div className="flex gap-md flex-wrap">
                            <Button size="lg">Subscriu-te al pack mensual</Button>
                            <Button variant="ghost" size="lg">Descobreix les plantilles digitals →</Button>
                        </div>
                    </div>
                    <div style={{ flex: 1, position: 'relative' }} className="fade-in">
                        {/* Placeholder for Hero Image */}
                        <div style={{
                            width: '100%',
                            height: '500px',
                            backgroundColor: '#EEE',
                            borderRadius: '24px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                                Hero Image Placeholder
                            </div>
                        </div>
                        {/* Decorative blob/shape could go here */}
                    </div>
                </div>
                <style>{`
          @media (min-width: 768px) {
            .md\\:flex-row { flex-direction: row; }
          }
        `}</style>
            </section>

            {/* How it works */}
            <section style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>Com funciona</h2>
                    <div className="flex flex-col md:flex-row gap-lg justify-center">
                        {[
                            { icon: <Brush size={32} color="var(--color-primary)" />, title: 'Tria la teva subscripció', text: 'Escull el pla que millor s\'adapti a tu.' },
                            { icon: <Mail size={32} color="var(--color-secondary)" />, title: 'Rep les plantilles', text: 'Cada mes una nova sorpresa a la teva bústia.' },
                            { icon: <Heart size={32} color="var(--color-primary)" />, title: 'Pinta i comparteix', text: 'Gaudeix del teu moment de calma.' },
                        ].map((step, index) => (
                            <Card key={index} className="text-center flex-1" hoverable>
                                <div style={{ marginBottom: 'var(--spacing-md)', display: 'flex', justifyContent: 'center' }}>{step.icon}</div>
                                <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{step.title}</h3>
                                <p style={{ color: 'var(--color-text-sub)' }}>{step.text}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's included */}
            <section className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)' }}>
                <div className="flex flex-col md:flex-row items-center gap-3xl">
                    <div style={{ flex: 1 }}>
                        {/* Placeholder for Pack Image */}
                        <div style={{
                            width: '100%',
                            height: '400px',
                            backgroundColor: '#EEE',
                            borderRadius: '24px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'
                        }}>
                            Pack Image Placeholder
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Què inclou el pack mensual</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                            {[
                                '12 plantilles en paper gruixut a tot color',
                                'Plantilles extra en PDF per descarregar',
                                'Una nota manuscrita de la Laura',
                                'Idees de plans creatius per aquell mes'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-sm">
                                    <Star size={16} color="var(--color-tertiary)" fill="var(--color-tertiary)" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>Des de 15 €/mes</p>
                        <Button>Veure detalls de la subscripció</Button>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>Galeria d'inspiració</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--spacing-lg)'
                    }}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} style={{
                                aspectRatio: '1',
                                backgroundColor: '#EEE',
                                borderRadius: 'var(--radius-md)',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                                className="group"
                            >
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(0,0,0,0.2)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                                >
                                    <Eye color="white" size={32} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Snippet */}
            <section className="container text-center" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)' }}>
                <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: '#EEE',
                    margin: '0 auto var(--spacing-lg)',
                    overflow: 'hidden'
                }}>
                    {/* Laura's Photo Placeholder */}
                </div>
                <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Hola, sóc la Laura</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)', color: 'var(--color-text-sub)' }}>
                    Creo aquestes plantilles perquè trobis un moment de calma en el teu dia a dia.
                    M'encanta veure com doneu vida als meus dibuixos amb els vostres colors.
                </p>
                <Link to="/about" style={{ color: 'var(--color-primary)', fontWeight: 500, borderBottom: '1px solid var(--color-primary)' }}>Coneix-me millor</Link>
            </section>

            {/* Newsletter */}
            <section className="container" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                <div style={{
                    backgroundColor: 'var(--color-tertiary)',
                    borderRadius: '24px',
                    padding: 'var(--spacing-2xl)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>Uneix-te al racó creatiu de bylau</h2>
                        <p style={{ marginBottom: 'var(--spacing-lg)' }}>Rep un mini pack de plantilles gratis i idees per pintar cada mes.</p>
                        <div className="flex flex-col md:flex-row gap-md justify-center items-center">
                            <input
                                type="email"
                                placeholder="El teu email"
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '999px',
                                    border: 'none',
                                    width: '100%',
                                    maxWidth: '300px',
                                    outline: 'none'
                                }}
                            />
                            <Button>Apunta-m'hi</Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

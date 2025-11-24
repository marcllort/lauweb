import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Check, HelpCircle, Heart, Sun, Coffee } from 'lucide-react';

export const Subscription: React.FC = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="container text-center" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)' }}>
                <h1 style={{ marginBottom: 'var(--spacing-md)' }}>El pack mensual bylau</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-sub)', fontSize: '1.2rem' }}>
                    Rep cada mes una dosi de creativitat i calma directament a casa teva.
                </p>
            </section>

            {/* Why Subscribe */}
            <section style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-xl justify-center text-center">
                        {[
                            { icon: <Sun size={32} color="var(--color-tertiary)" />, title: 'Temps per a tu', text: 'Un moment de desconnexió mensual garantit.' },
                            { icon: <Heart size={32} color="var(--color-primary)" />, title: 'Sense pressa', text: 'Pinta al teu ritme, sense normes ni judicis.' },
                            { icon: <Coffee size={32} color="var(--color-secondary)" />, title: 'Material inclòs', text: 'No et preocupis per res, només gaudeix.' },
                        ].map((item, index) => (
                            <div key={index} style={{ flex: 1, padding: 'var(--spacing-lg)' }}>
                                <div style={{ marginBottom: 'var(--spacing-md)', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.25rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-sub)' }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)' }}>
                <h2 className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>Tria la teva experiència</h2>
                <div className="flex flex-col md:flex-row gap-lg justify-center items-start">
                    {/* Digital Plan */}
                    <Card className="flex-1" style={{ maxWidth: '400px', padding: 'var(--spacing-xl)' }}>
                        <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Pack Digital</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                            8€<span style={{ fontSize: '1rem', color: 'var(--color-text-sub)', fontWeight: 400 }}>/mes</span>
                        </div>
                        <p style={{ color: 'var(--color-text-sub)', marginBottom: 'var(--spacing-lg)' }}>
                            Ideal si tens impressora o t'agrada pintar en digital (iPad/Tablet).
                        </p>
                        <ul style={{ marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            {['Accés a totes les plantilles en PDF', 'Guia de colors i tècniques', 'Accés a la comunitat privada'].map((item, i) => (
                                <li key={i} className="flex items-center gap-sm">
                                    <Check size={18} color="var(--color-secondary)" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button fullWidth variant="secondary">Triar Digital</Button>
                    </Card>

                    {/* Physical Plan */}
                    <Card className="flex-1" style={{ maxWidth: '400px', padding: 'var(--spacing-xl)', border: '2px solid var(--color-primary)', position: 'relative', overflow: 'visible' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '999px',
                            fontSize: '12px',
                            fontWeight: 600,
                            whiteSpace: 'nowrap'
                        }}>
                            MÉS POPULAR
                        </div>
                        <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Pack Físic (Paper)</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                            15€<span style={{ fontSize: '1rem', color: 'var(--color-text-sub)', fontWeight: 400 }}>/mes</span>
                        </div>
                        <p style={{ color: 'var(--color-text-sub)', marginBottom: 'var(--spacing-lg)' }}>
                            L'experiència completa. Rep el sobre amb tot el material a casa.
                        </p>
                        <ul style={{ marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                            {['12 làmines impreses en paper d\'alta qualitat', 'Nota manuscrita personalitzada', 'Detall sorpresa mensual', 'Enviament inclòs (Península)', 'Accés a tot el contingut digital'].map((item, i) => (
                                <li key={i} className="flex items-center gap-sm">
                                    <Check size={18} color="var(--color-primary)" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button fullWidth>Triar Físic</Button>
                    </Card>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ backgroundColor: 'var(--color-tertiary)', padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>El que diuen les subscriptores</h2>
                    <div className="flex flex-col md:flex-row gap-lg">
                        {[
                            { text: "És el meu moment preferit del mes. Quan arriba el sobre, sé que tindré una estona de pau.", author: "Marta R." },
                            { text: "Les làmines són precioses i el paper aguanta molt bé l'aquarel·la. M'encanta!", author: "Carla S." },
                            { text: "Ho faig servir per desconnectar de la feina. És màgic com et relaxa.", author: "Anna M." }
                        ].map((quote, i) => (
                            <Card key={i} className="flex-1" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>"{quote.text}"</p>
                                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>— {quote.author}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)', maxWidth: '800px' }}>
                <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>Preguntes Freqüents</h2>
                <div className="flex flex-col gap-md">
                    {[
                        { q: 'Quan s\'envia el pack?', a: 'Els packs s\'envien el dia 5 de cada mes. Si t\'apuntes més tard, rebràs el del mes següent.' },
                        { q: 'Es pot pausar la subscripció?', a: 'Sí, pots saltar un mes o cancel·lar quan vulguis des del teu perfil.' },
                        { q: 'Feu enviaments internacionals?', a: 'De moment només enviem a Espanya (Península i Balears). Per a altres països, recomanem el pack digital.' }
                    ].map((faq, i) => (
                        <div key={i} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-md)' }}>
                            <h4 style={{ marginBottom: 'var(--spacing-xs)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <HelpCircle size={18} color="var(--color-text-sub)" />
                                {faq.q}
                            </h4>
                            <p style={{ color: 'var(--color-text-sub)', paddingLeft: '26px' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

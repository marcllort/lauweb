import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Mail, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <Layout>
            <div className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)' }}>
                <h1 className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>Parlem?</h1>

                <div className="flex flex-col md:flex-row gap-3xl justify-center">
                    {/* Contact Info */}
                    <div style={{ flex: 1, maxWidth: '400px' }}>
                        <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Tens algun dubte?</h3>
                        <p style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-sub)' }}>
                            Si tens preguntes sobre la subscripció, les comandes o simplement vols dir hola, m'encantarà llegir-te.
                        </p>

                        <div className="flex flex-col gap-md">
                            <div className="flex items-center gap-md">
                                <div style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--color-bg-white)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: 'var(--shadow-sm)'
                                }}>
                                    <Mail size={20} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-sub)' }}>Email</div>
                                    <a href="mailto:hola@bylau.com" style={{ fontWeight: 500 }}>hola@bylau.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-md">
                                <div style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--color-bg-white)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: 'var(--shadow-sm)'
                                }}>
                                    <Instagram size={20} color="var(--color-primary)" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-sub)' }}>Instagram</div>
                                    <a href="#" style={{ fontWeight: 500 }}>@bylau_creative</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <Card style={{ flex: 1, maxWidth: '500px', padding: 'var(--spacing-xl)' }}>
                        <form className="flex flex-col gap-lg">
                            <div className="flex flex-col gap-xs">
                                <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    style={{
                                        padding: '12px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid var(--color-border)',
                                        fontFamily: 'inherit'
                                    }}
                                    placeholder="El teu nom"
                                />
                            </div>

                            <div className="flex flex-col gap-xs">
                                <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    style={{
                                        padding: '12px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid var(--color-border)',
                                        fontFamily: 'inherit'
                                    }}
                                    placeholder="tucorreu@exemple.com"
                                />
                            </div>

                            <div className="flex flex-col gap-xs">
                                <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Missatge</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    style={{
                                        padding: '12px',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid var(--color-border)',
                                        fontFamily: 'inherit',
                                        resize: 'vertical'
                                    }}
                                    placeholder="Com et puc ajudar?"
                                />
                            </div>

                            <Button type="submit" fullWidth>Enviar missatge</Button>
                        </form>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

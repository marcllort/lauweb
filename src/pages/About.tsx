import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';

export const About: React.FC = () => {
    return (
        <Layout>
            <div className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)' }}>
                <div className="flex flex-col md:flex-row gap-3xl items-center">
                    <div style={{ flex: 1 }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '3/4',
                            backgroundColor: '#EEE',
                            borderRadius: '24px',
                            position: 'relative'
                        }}>
                            {/* Laura's Photo */}
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>Sobre mi</h1>
                        <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-body)', fontWeight: 400, color: 'var(--color-text-sub)', marginBottom: 'var(--spacing-xl)' }}>
                            Hola! Sóc la Laura, l'ànima darrere de <span className="script-text">bylau</span>.
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                            <p>
                                Sempre m'ha apassionat dibuixar, però no va ser fins fa uns anys que vaig descobrir el poder terapèutic de l'art.
                                En un món que va massa ràpid, asseure's a pintar és la meva manera de parar el temps.
                            </p>
                            <p>
                                Vaig crear <strong>bylau</strong> amb una missió senzilla: ajudar-te a trobar aquests moments de calma per a tu.
                                No cal ser una artista experta, només tenir ganes de desconnectar i jugar amb els colors.
                            </p>
                            <p>
                                Visc a prop de Barcelona, i el mar i la llum del Mediterrani són la meva major font d'inspiració.
                                Espero que les meves plantilles et transmetin aquesta mateixa pau.
                            </p>
                        </div>

                        <div style={{ borderLeft: '4px solid var(--color-tertiary)', paddingLeft: 'var(--spacing-lg)', margin: 'var(--spacing-xl) 0' }}>
                            <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                                "Pintar no és només omplir espais de color, és donar espai a la teva ment per respirar."
                            </p>
                        </div>

                        <Button>Uneix-te al club</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

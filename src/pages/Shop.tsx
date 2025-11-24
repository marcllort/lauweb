import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Shop: React.FC = () => {
    const products = [
        { id: 1, name: 'Pack Iniciació Aquarel·la', price: '25.00€', type: 'Material', image: '#EEE' },
        { id: 2, name: 'Col·lecció "Primavera"', price: '12.00€', type: 'Digital', image: '#EEE' },
        { id: 3, name: 'Pinzells Premium bylau', price: '18.50€', type: 'Material', image: '#EEE' },
        { id: 4, name: 'Pack "Moments Zen"', price: '15.00€', type: 'Físic', image: '#EEE' },
        { id: 5, name: 'Làmina "Barcelona"', price: '8.00€', type: 'Digital', image: '#EEE' },
        { id: 6, name: 'Kit Retoladors Pastel', price: '22.00€', type: 'Material', image: '#EEE' },
    ];

    return (
        <Layout>
            {/* Banner */}
            <div style={{ backgroundColor: 'var(--color-tertiary)', padding: 'var(--spacing-sm)', textAlign: 'center', fontSize: '0.9rem' }}>
                Subscriu-te i aconsegueix un <strong>10% de descompte</strong> en tots els productes!
            </div>

            <div className="container" style={{ padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
                <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>Botiga</h1>

                {/* Filters (Simple) */}
                <div className="flex gap-md" style={{ marginBottom: 'var(--spacing-xl)', overflowX: 'auto', paddingBottom: 'var(--spacing-sm)' }}>
                    <Button size="sm" variant="primary">Tots</Button>
                    <Button size="sm" variant="secondary">Plantilles Digitals</Button>
                    <Button size="sm" variant="secondary">Packs Físics</Button>
                    <Button size="sm" variant="secondary">Material</Button>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {products.map((product) => (
                        <Card key={product.id} hoverable className="flex flex-col">
                            <div style={{
                                aspectRatio: '1',
                                backgroundColor: product.image,
                                borderRadius: 'var(--radius-sm)',
                                marginBottom: 'var(--spacing-md)',
                                position: 'relative'
                            }}>
                                {/* Badge example */}
                                {product.type === 'Digital' && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        backgroundColor: 'var(--color-secondary)',
                                        color: 'white',
                                        fontSize: '10px',
                                        padding: '4px 8px',
                                        borderRadius: '999px',
                                        textTransform: 'uppercase',
                                        fontWeight: 600
                                    }}>
                                        Digital
                                    </span>
                                )}
                            </div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xs)' }}>{product.name}</h3>
                            <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }}>{product.type}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{product.price}</span>
                                <Button size="sm" variant="secondary">Veure</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

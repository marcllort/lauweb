import React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';

export const Blog: React.FC = () => {
    const posts = [
        { id: 1, title: '5 Tècniques d\'aquarel·la per a principiants', date: '20 Nov 2024', category: 'Tutorials', image: '#EEE' },
        { id: 2, title: 'Com crear el teu racó de calma a casa', date: '15 Nov 2024', category: 'Lifestyle', image: '#EEE' },
        { id: 3, title: 'Els beneficis de pintar per a l\'ansietat', date: '01 Nov 2024', category: 'Benestar', image: '#EEE' },
        { id: 4, title: 'Idees per pintar amb nens aquest Nadal', date: '25 Oct 2024', category: 'Família', image: '#EEE' },
    ];

    return (
        <Layout>
            <div className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-lg)' }}>
                <h1 className="text-center" style={{ marginBottom: 'var(--spacing-sm)' }}>Inspira't</h1>
                <p className="text-center" style={{ color: 'var(--color-text-sub)', marginBottom: 'var(--spacing-3xl)' }}>
                    Idees, tutorials i reflexions sobre creativitat i vida slow.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 'var(--spacing-xl)'
                }}>
                    {posts.map((post) => (
                        <Card key={post.id} hoverable className="flex flex-col" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{
                                height: '200px',
                                backgroundColor: post.image,
                                width: '100%'
                            }}></div>
                            <div style={{ padding: 'var(--spacing-lg)' }}>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--color-primary)',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    marginBottom: 'var(--spacing-xs)'
                                }}>
                                    {post.category}
                                </div>
                                <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.25rem' }}>{post.title}</h3>
                                <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }}>
                                    {post.date}
                                </p>
                                <a href="#" style={{ fontWeight: 500, borderBottom: '1px solid var(--color-text-main)' }}>Llegir més</a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

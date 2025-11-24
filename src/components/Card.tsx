import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false, style, ...props }) => {
    return (
        <div
            className={`card ${className}`}
            style={{
                backgroundColor: 'var(--color-bg-white)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                padding: 'var(--spacing-lg)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                transform: hoverable ? 'translateY(0)' : 'none',
                cursor: hoverable ? 'pointer' : 'default',
                ...style
            }}
            onMouseEnter={(e) => {
                if (hoverable) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }
                props.onMouseEnter?.(e);
            }}
            onMouseLeave={(e) => {
                if (hoverable) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }
                props.onMouseLeave?.(e);
            }}
            {...props}
        >
            {children}
        </div>
    );
};

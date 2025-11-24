import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';

    // Since we are using vanilla CSS variables but might want to use inline styles or a CSS module later,
    // for now I will use inline styles for dynamic parts that are not easily covered by the global CSS utility classes I added.
    // However, to keep it clean and consistent with the "Vanilla CSS" request, I'll rely on the global classes and style prop.

    // Actually, to make it easier, let's just use a style object for the specific variant colors if needed, 
    // but better yet, let's map the props to the CSS classes we defined or will define.
    // Wait, I defined utility classes in index.css but not for everything.
    // Let's use a combination of standard HTML/CSS.

    let variantClass = '';
    if (variant === 'primary') variantClass = 'btn-primary';
    else if (variant === 'secondary') variantClass = 'btn-secondary';
    else variantClass = 'btn-ghost';

    return (
        <button
            className={`${baseStyles} ${variantClass} ${className}`}
            style={{
                width: fullWidth ? '100%' : 'auto',
                padding: size === 'sm' ? '8px 16px' : size === 'md' ? '12px 24px' : '16px 32px',
                fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
                borderRadius: '999px',
                border: variant === 'secondary' ? '1px solid var(--color-primary)' : 'none',
                backgroundColor: variant === 'primary' ? 'var(--color-primary)' : 'transparent',
                color: variant === 'primary' ? 'white' : variant === 'secondary' ? 'var(--color-primary)' : 'inherit',
                cursor: 'pointer',
                transition: 'all 0.2s ease-out',
                ...props.style
            }}
            {...props}
        >
            {children}
        </button>
    );
};

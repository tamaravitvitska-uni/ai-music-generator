import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

// Local replacement for the design system's Button. Same prop surface the funnel
// relies on (variant / color / size / leftIcon), styled with the brand tokens.

type Variant = 'filled' | 'outlined' | 'text' | 'filled-tonal';
type Color = 'primary' | 'action';
type Size = 'sm' | 'ms' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  leftIcon?: ReactNode;
}

// Padding / type-scale / radius per size step.
const SIZE_STYLE: Record<Size, { padding: string; fontSize: number; radius: string }> = {
  sm: { padding: '8px 14px', fontSize: 14, radius: 'var(--radius-4)' },
  ms: { padding: '9px 16px', fontSize: 14, radius: 'var(--radius-4)' },
  md: { padding: '11px 18px', fontSize: 15, radius: 'var(--radius-5)' },
  lg: { padding: '14px 22px', fontSize: 16, radius: 'var(--radius-5)' },
};

// Resolve the fill / text / border for a variant + color combination.
function paletteFor(variant: Variant, color: Color) {
  const accent = color === 'action' ? 'var(--color-bg-dark)' : 'var(--color-primary)';
  const onAccent = 'var(--color-primary-contrast-text)';
  const tint = color === 'action' ? 'rgba(57, 57, 57, 0.10)' : 'var(--color-primary-opacity-12)';
  const outlineBorder = color === 'action' ? 'var(--color-primary-opacity-16)' : 'var(--color-primary)';

  if (variant === 'filled') {
    return { background: accent, color: onAccent, border: '1px solid transparent' };
  }
  if (variant === 'outlined') {
    return { background: 'transparent', color: accent, border: `1px solid ${outlineBorder}` };
  }
  if (variant === 'filled-tonal') {
    return { background: tint, color: accent, border: '1px solid transparent' };
  }
  // text
  return { background: 'transparent', color: accent, border: '1px solid transparent' };
}

export const Button: FC<ButtonProps> = ({
  variant = 'filled',
  color = 'primary',
  size = 'md',
  leftIcon,
  children,
  style,
  disabled,
  ...rest
}) => {
  const sizeStyle = SIZE_STYLE[size];
  const palette = paletteFor(variant, color);

  const composedStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-primary)',
    fontWeight: 700,
    lineHeight: 1.2,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    padding: sizeStyle.padding,
    fontSize: sizeStyle.fontSize,
    borderRadius: sizeStyle.radius,
    transition: 'filter 150ms ease, background 150ms ease',
    ...palette,
    ...style,
  } as const;

  return (
    <button type="button" disabled={disabled} style={composedStyle} {...rest}>
      {leftIcon && <span style={{ display: 'inline-flex' }}>{leftIcon}</span>}
      {children}
    </button>
  );
};

export default Button;

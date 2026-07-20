import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

// Local replacement for the design system's IconButton: a square, icon-only
// button. Same prop surface (variant / color / size) as the funnel expects.

type Variant = 'filled' | 'outlined' | 'text' | 'filled-tonal';
type Color = 'primary' | 'action';
type Size = 'xs' | 'sm' | 'md' | 'lg';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  children?: ReactNode;
}

// Square edge length per size step.
const SIZE_PX: Record<Size, number> = { xs: 28, sm: 34, md: 40, lg: 48 };

function paletteFor(variant: Variant, color: Color) {
  const accent = color === 'action' ? 'var(--color-text-secondary)' : 'var(--color-primary)';
  const onAccent = 'var(--color-primary-contrast-text)';
  const tint = 'var(--color-primary-opacity-12)';
  const outlineBorder = color === 'action' ? 'var(--color-primary-opacity-16)' : 'var(--color-primary)';

  if (variant === 'filled') {
    return { background: 'var(--color-primary)', color: onAccent, border: '1px solid transparent' };
  }
  if (variant === 'outlined') {
    return { background: 'transparent', color: accent, border: `1px solid ${outlineBorder}` };
  }
  if (variant === 'filled-tonal') {
    return { background: tint, color: accent, border: '1px solid transparent' };
  }
  return { background: 'transparent', color: accent, border: '1px solid transparent' };
}

export const IconButton: FC<IconButtonProps> = ({
  variant = 'text',
  color = 'primary',
  size = 'md',
  children,
  style,
  disabled,
  ...rest
}) => {
  const edge = SIZE_PX[size];
  const palette = paletteFor(variant, color);

  const composedStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: edge,
    height: edge,
    borderRadius: 'var(--radius-4)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background 150ms ease',
    ...palette,
    ...style,
  } as const;

  return (
    <button type="button" disabled={disabled} style={composedStyle} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;

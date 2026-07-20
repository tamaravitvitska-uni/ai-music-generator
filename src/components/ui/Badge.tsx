import type { FC, ReactNode } from 'react';

// Local replacement for the design system's Badge / chip. Same prop surface the
// funnel uses: type, style, color, size.

type BadgeType = 'badge' | 'icon' | 'dot';
type BadgeStyle = 'filled' | 'filled-tonal' | 'outlined';
type Color = 'primary' | 'grey';
type Size = 'default' | 'dense';

interface BadgeProps {
  type?: BadgeType;
  style?: BadgeStyle;
  color?: Color;
  size?: Size;
  children?: ReactNode;
}

// Resolve background / text / border for a style + color combination.
function paletteFor(badgeStyle: BadgeStyle, color: Color) {
  const accent = color === 'primary' ? 'var(--color-primary)' : 'var(--color-text-secondary)';
  const tint = color === 'primary' ? 'var(--color-primary-opacity-12)' : 'var(--color-bg-light-grey)';

  if (badgeStyle === 'filled') {
    return { background: 'var(--color-primary)', color: 'var(--color-primary-contrast-text)', border: '1px solid transparent' };
  }
  if (badgeStyle === 'outlined') {
    return { background: 'transparent', color: accent, border: '1px solid var(--color-primary-opacity-16)' };
  }
  // filled-tonal
  return { background: tint, color: accent, border: '1px solid transparent' };
}

export const Badge: FC<BadgeProps> = ({
  type = 'badge',
  style = 'filled-tonal',
  color = 'primary',
  size = 'default',
  children,
}) => {
  const palette = paletteFor(style, color);
  const padding = size === 'dense' ? '2px 8px' : '4px 10px';
  const fontSize = size === 'dense' ? 11 : 12;
  const radius = type === 'dot' || type === 'icon' ? '999px' : 'var(--radius-3)';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding,
        fontSize,
        fontWeight: 700,
        fontFamily: 'var(--font-primary)',
        borderRadius: radius,
        whiteSpace: 'nowrap',
        ...palette,
      }}
    >
      {children}
    </span>
  );
};

export default Badge;

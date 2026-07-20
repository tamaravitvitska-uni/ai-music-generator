import type { FC, InputHTMLAttributes, ReactNode } from 'react';

// Local replacement for the design system's Input. Supports the props the funnel
// uses: size, bg, label, leftIcon, rightIcon. Renders an optional label above a
// bordered field. Controlled via value / onChange.

type Size = 'lg' | 'dense';
type Bg = 'default' | 'filled';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size;
  bg?: Bg;
  label?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

// Field height / radius per size step.
const SIZE_STYLE: Record<Size, { minHeight: number; radius: string }> = {
  lg: { minHeight: 52, radius: 'var(--radius-4)' },
  dense: { minHeight: 44, radius: 'var(--radius-3)' },
};

export const Input: FC<InputProps> = ({
  size = 'lg',
  bg = 'default',
  label,
  leftIcon,
  rightIcon,
  style,
  ...rest
}) => {
  const sizeStyle = SIZE_STYLE[size];
  const background = bg === 'filled' ? 'var(--color-bg-light-grey)' : 'var(--color-bg-white-bg)';

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
      {label && (
        <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--color-text-secondary)' }}>{label}</span>
      )}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          minHeight: sizeStyle.minHeight,
          padding: '0 14px',
          background,
          border: '1px solid var(--color-primary-opacity-16)',
          borderRadius: sizeStyle.radius,
        }}
      >
        {leftIcon && <span style={{ display: 'inline-flex', color: 'var(--color-text-disabled)' }}>{leftIcon}</span>}
        <input
          style={{
            flex: 1,
            minWidth: 0,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-primary)',
            fontSize: 15,
            color: 'var(--color-text-primary)',
            ...style,
          }}
          {...rest}
        />
        {rightIcon && <span style={{ display: 'inline-flex', color: 'var(--color-text-disabled)' }}>{rightIcon}</span>}
      </span>
    </label>
  );
};

export default Input;

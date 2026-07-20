import type { FC } from 'react';

// Local replacement for the design system's Switch (toggle). Controlled via
// checked / onCheckedChange, matching how the funnel uses it.

type Color = 'primary' | 'action';
type Size = 'sm' | 'md';

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  color?: Color;
  size?: Size;
  disabled?: boolean;
  'aria-label'?: string;
}

// Track / thumb dimensions per size step.
const SIZE_STYLE: Record<Size, { width: number; height: number; thumb: number }> = {
  sm: { width: 40, height: 24, thumb: 18 },
  md: { width: 48, height: 28, thumb: 22 },
};

export const Switch: FC<SwitchProps> = ({
  checked,
  onCheckedChange,
  color = 'primary',
  size = 'sm',
  disabled,
  ...rest
}) => {
  const dims = SIZE_STYLE[size];
  const gap = 3;
  const onColor = color === 'action' ? 'var(--color-bg-dark)' : 'var(--color-primary)';
  const travel = dims.width - dims.thumb - gap * 2;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      style={{
        width: dims.width,
        height: dims.height,
        padding: gap,
        border: 'none',
        borderRadius: dims.height,
        cursor: disabled ? 'not-allowed' : 'pointer',
        background: checked ? onColor : 'var(--color-primary-opacity-16)',
        transition: 'background 150ms ease',
        display: 'inline-flex',
        alignItems: 'center',
      }}
      {...rest}
    >
      <span
        style={{
          width: dims.thumb,
          height: dims.thumb,
          borderRadius: '50%',
          background: '#ffffff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
          transform: `translateX(${checked ? travel : 0}px)`,
          transition: 'transform 150ms ease',
        }}
      />
    </button>
  );
};

export default Switch;

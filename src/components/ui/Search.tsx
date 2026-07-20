import type { FC, InputHTMLAttributes, ReactNode } from 'react';

// Local replacement for the design system's Search field. The funnel uses it as a
// simple search box (leftIcon + input, no submit button), so that is what we
// render. `showSubmitButton` is accepted for API compatibility but unused here.

type Size = 'lg' | 'dense';
type Bg = 'default' | 'filled';

interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size;
  bg?: Bg;
  leftIcon?: ReactNode;
  showSubmitButton?: boolean;
}

const SIZE_STYLE: Record<Size, { minHeight: number; radius: string }> = {
  lg: { minHeight: 52, radius: 'var(--radius-4)' },
  dense: { minHeight: 44, radius: 'var(--radius-3)' },
};

export const Search: FC<SearchProps> = ({
  size = 'dense',
  bg = 'filled',
  leftIcon,
  showSubmitButton: _showSubmitButton,
  style,
  ...rest
}) => {
  const sizeStyle = SIZE_STYLE[size];
  const background = bg === 'filled' ? 'var(--color-bg-light-grey)' : 'var(--color-bg-white-bg)';

  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        minHeight: sizeStyle.minHeight,
        padding: '0 14px',
        background,
        border: '1px solid var(--color-primary-opacity-12)',
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
    </span>
  );
};

export default Search;

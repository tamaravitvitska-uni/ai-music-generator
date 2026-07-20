import { createContext, useContext, useState, type FC, type ReactNode } from 'react';

// Local replacement for the design system's segmented Tabs. Supports both
// controlled (value + onValueChange) and uncontrolled (defaultValue) use, which
// is how the funnel drives them. Renders a segmented pill control.

type Size = 'sm' | 'md';

interface TabsContextValue {
  value: string | undefined;
  setValue: (next: string) => void;
  size: Size;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs components must be used inside <TabsRoot>');
  return ctx;
}

interface TabsRootProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  color?: 'primary' | 'grey';
  size?: Size;
  transparent?: boolean;
  children: ReactNode;
}

export const TabsRoot: FC<TabsRootProps> = ({
  value,
  defaultValue,
  onValueChange,
  size = 'md',
  children,
}) => {
  // Track the active tab internally when the parent doesn't control `value`.
  const [internalValue, setInternalValue] = useState<string | undefined>(value ?? defaultValue);
  const activeValue = value ?? internalValue;

  const setValue = (next: string) => {
    setInternalValue(next);
    onValueChange?.(next);
  };

  return (
    <TabsContext.Provider value={{ value: activeValue, setValue, size }}>
      {children}
    </TabsContext.Provider>
  );
};

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export const TabsList: FC<TabsListProps> = ({ children, className }) => (
  <div
    className={className}
    style={{
      display: 'flex',
      gap: 4,
      padding: 4,
      background: 'var(--color-bg-light-grey)',
      borderRadius: 'var(--radius-4)',
    }}
  >
    {children}
  </div>
);

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export const TabsTrigger: FC<TabsTriggerProps> = ({ value, children, className }) => {
  const tabs = useTabs();
  const isActive = tabs.value === value;
  const paddingY = tabs.size === 'sm' ? 6 : 8;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-value={value}
      className={className}
      onClick={() => tabs.setValue(value)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${paddingY}px 14px`,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-3)',
        fontFamily: 'var(--font-primary)',
        fontSize: 14,
        fontWeight: isActive ? 600 : 500,
        color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
        background: isActive ? 'var(--color-bg-white-bg)' : 'transparent',
        boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
        transition: 'background 150ms ease, color 150ms ease',
      }}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export const TabsContent: FC<TabsContentProps> = ({ value, children, className }) => {
  const tabs = useTabs();
  if (tabs.value !== value) return null;
  return <div className={className}>{children}</div>;
};

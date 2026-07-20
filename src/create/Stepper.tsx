import type { FC } from 'react';
import { CheckIcon } from '../icons';

const STEPS = ['Create', 'Set length', 'Generate'];

export const Stepper: FC<{ active: number }> = ({ active }) => (
  <div className="mx-auto flex max-w-xl items-center justify-center gap-2 px-4">
    {STEPS.map((label, i) => {
      const done = i < active;
      const current = i === active;
      return (
        <div key={label} className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center"
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              fontSize: 13,
              fontWeight: 700,
              background: done || current ? 'var(--color-primary)' : 'var(--color-primary-opacity-12)',
              color: done || current ? 'var(--color-primary-contrast-text)' : 'var(--color-text-secondary)',
            }}
          >
            {done ? <CheckIcon width={15} height={15} /> : i + 1}
          </span>
          <span
            className="hidden sm:inline"
            style={{
              fontSize: 14,
              fontWeight: current ? 700 : 500,
              color: current ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            }}
          >
            {label}
          </span>
          {i < STEPS.length - 1 && (
            <span
              style={{
                width: 28,
                height: 2,
                borderRadius: 2,
                margin: '0 4px',
                background: done ? 'var(--color-primary)' : 'var(--color-primary-opacity-12)',
              }}
            />
          )}
        </div>
      );
    })}
  </div>
);

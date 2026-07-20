import { useEffect, useState, type FC } from 'react';
import { CheckIcon } from '../icons';
import { GENERATING } from '../model/content';

interface Props {
  prompt: string;
  lengthLabel: string;
}

export const GeneratingStep: FC<Props> = ({ prompt, lengthLabel }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => Math.min(a + 1, GENERATING.steps.length - 1)), 650);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto max-w-md px-4">
      <div
        className="flex flex-col items-center text-center"
        style={{
          background: 'var(--color-bg-white-bg)',
          border: '1px solid var(--color-primary-opacity-12)',
          borderRadius: 'var(--radius-6)',
          padding: 32,
        }}
      >
        <span
          aria-hidden
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: '4px solid var(--color-primary-opacity-16)',
            borderTopColor: 'var(--color-primary)',
            animation: 'amg-spin 0.9s linear infinite',
          }}
        />
        <h2 className="mt-5" style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text-primary)' }}>
          {GENERATING.heading}
        </h2>
        {prompt && (
          <p className="mt-1" style={{ fontSize: 13, color: 'var(--color-text-secondary)', maxWidth: 340 }}>
            “{prompt}” · {lengthLabel}
          </p>
        )}

        <ul className="mt-6 flex w-full max-w-xs flex-col gap-3">
          {GENERATING.steps.map((s, i) => {
            const done = i < active;
            const cur = i === active;
            return (
              <li key={s} className="flex items-center gap-3" style={{ opacity: i <= active ? 1 : 0.4 }}>
                <span
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: done ? 'var(--color-secondary)' : cur ? 'var(--color-primary-opacity-16)' : 'var(--color-primary-opacity-8)',
                    color: done ? '#fff' : 'var(--color-primary)',
                  }}
                >
                  {done ? <CheckIcon width={13} height={13} /> : <span style={{ fontSize: 11, fontWeight: 700 }}>{i + 1}</span>}
                </span>
                <span style={{ fontSize: 14, fontWeight: cur ? 700 : 500, color: 'var(--color-text-primary)' }}>{s}</span>
              </li>
            );
          })}
        </ul>
        <style>{'@keyframes amg-spin{to{transform:rotate(360deg)}}'}</style>
      </div>
    </div>
  );
};

import { useState, type FC } from 'react';
import { ChevronDownIcon } from '../icons';
import { FAQ } from '../model/content';

export const FaqSection: FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-20" style={{ background: 'var(--color-bg-light-grey)' }}>
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2
          className="text-center text-[26px] md:text-[36px]"
          style={{ fontWeight: 800, color: 'var(--color-text-primary)' }}
        >
          {FAQ.heading}
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          {FAQ.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                style={{
                  background: 'var(--color-bg-white-bg)',
                  borderRadius: 'var(--radius-5)',
                  border: '1px solid var(--color-primary-opacity-8)',
                  overflow: 'hidden',
                }}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  style={{ padding: '18px 20px', background: 'transparent', cursor: 'pointer', border: 'none' }}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)' }}>{item.q}</span>
                  <span
                    style={{
                      color: 'var(--color-primary)',
                      transition: 'transform 200ms ease',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDownIcon width={20} height={20} />
                  </span>
                </button>
                {isOpen && (
                  <p style={{ padding: '0 20px 18px', fontSize: 15, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

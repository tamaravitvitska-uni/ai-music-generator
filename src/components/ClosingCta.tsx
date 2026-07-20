import type { FC } from 'react';
import { Button } from '@/components/ui';
import { CLOSING } from '../model/content';

interface Props {
  onStart: () => void;
}

export const ClosingCta: FC<Props> = ({ onStart }) => (
  <section className="px-4 py-12 md:py-20">
    <div
      className="mx-auto max-w-5xl overflow-hidden text-center"
      style={{
        borderRadius: 'var(--radius-7)',
        padding: '48px 24px',
        background:
          'linear-gradient(135deg, var(--color-primary-filled-600), var(--color-primary-filled-900))',
        boxShadow: '0 30px 70px -30px var(--color-primary-opacity-50)',
      }}
    >
      <h2
        className="mx-auto max-w-2xl text-[26px] md:text-[36px]"
        style={{ fontWeight: 800, color: '#fff', lineHeight: 1.15 }}
      >
        {CLOSING.heading}
      </h2>
      <div className="mt-7 flex justify-center">
        <Button variant="filled" color="action" size="lg" onClick={onStart}>
          {CLOSING.cta}
        </Button>
      </div>
    </div>
  </section>
);

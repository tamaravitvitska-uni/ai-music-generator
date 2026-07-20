import type { FC } from 'react';
import { FeatureIcon } from '../icons';
import { FEATURES } from '../model/content';

export const FeaturesSection: FC = () => (
  <section className="py-12 md:py-20" style={{ background: 'var(--color-bg-light-grey)' }}>
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[26px] md:text-[36px]" style={{ fontWeight: 800, color: 'var(--color-text-primary)' }}>
          {FEATURES.heading}
        </h2>
        <p className="mt-3" style={{ color: 'var(--color-text-secondary)', fontSize: 16 }}>
          {FEATURES.subheading}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.items.map((f) => (
          <div
            key={f.title}
            style={{
              background: 'var(--color-bg-white-bg)',
              borderRadius: 'var(--radius-6)',
              border: '1px solid var(--color-primary-opacity-8)',
              padding: 24,
            }}
          >
            <span
              className="inline-flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-4)',
                background: 'var(--color-primary-opacity-12)',
                color: 'var(--color-primary)',
              }}
            >
              <FeatureIcon name={f.icon} />
            </span>
            <h3 className="mt-4" style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {f.title}
            </h3>
            <p className="mt-2" style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

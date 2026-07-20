import type { FC } from 'react';
import { Button } from '@/components/ui';
import { Footer } from '../components/Footer';
import { Logo, CheckIcon } from '../icons';
import { THANK_YOU } from '../model/content';

// Post-payment confirmation. In production this maps to the REUSED PDFLeader
// payment-success screen; here it is a decoupled presentation driven by props.
interface Props {
  /** Continue to the dashboard. */
  onContinue: () => void;
}

export const ThankYouScreen: FC<Props> = ({ onContinue }) => (
  <div className="flex min-h-screen flex-col" style={{ background: 'var(--color-bg-light-grey)' }}>
    <header
      className="flex items-center px-4 md:px-8"
      style={{ height: 68, background: 'var(--color-bg-white-bg)', borderBottom: '1px solid var(--color-primary-opacity-8)' }}
    >
      <Logo />
    </header>

    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div
        className="w-full max-w-md text-center"
        style={{
          background: 'var(--color-bg-white-bg)',
          border: '1px solid var(--color-primary-opacity-12)',
          borderRadius: 'var(--radius-6)',
          padding: 32,
          boxShadow: '0 24px 60px -30px rgba(0,0,0,0.25)',
        }}
      >
        <span
          className="mx-auto inline-flex items-center justify-center"
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'var(--color-success-main)',
            color: '#fff',
            boxShadow: '0 10px 30px -8px color-mix(in srgb, var(--color-success-main) 60%, transparent)',
          }}
        >
          <CheckIcon width={36} height={36} />
        </span>

        <h1 className="mt-6 text-[28px] md:text-[32px]" style={{ fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
          {THANK_YOU.heading}
        </h1>
        <p className="mx-auto mt-3 max-w-sm" style={{ fontSize: 16, color: 'var(--color-text-secondary)' }}>
          {THANK_YOU.subheading}
        </p>

        <ul className="mx-auto mt-6 flex max-w-xs flex-col gap-2.5 text-left">
          {THANK_YOU.points.map((point) => (
            <li key={point} className="flex items-center gap-2.5" style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>
              <span
                className="inline-flex shrink-0 items-center justify-center"
                style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-primary-opacity-12)', color: 'var(--color-primary)' }}
              >
                <CheckIcon width={13} height={13} />
              </span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button variant="filled" color="primary" size="lg" onClick={onContinue} style={{ width: '100%' }}>
            {THANK_YOU.cta}
          </Button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default ThankYouScreen;

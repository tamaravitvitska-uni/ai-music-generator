import type { FC } from 'react';
import { Button } from '@/components/ui';
import { Logo, PlayIcon } from '../icons';
import { CoverArt } from './CommunitySection';
import { Footer } from './Footer';
import { GATED } from '../model/content';

interface Props {
  loading: boolean;
  prompt: string;
  onLogin: () => void;
  onUnlock: () => void; // play tap or Join CTA — opens registration
  onBack: () => void;
}

const BlurredCover: FC<{ hue: number; label: string; onClick: () => void }> = ({ hue, label, onClick }) => (
  <button
    onClick={onClick}
    className="relative shrink-0"
    style={{ width: '100%', maxWidth: 260, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
    aria-label={`Unlock ${label}`}
  >
    <div style={{ filter: 'blur(10px)', borderRadius: 'var(--radius-6)', overflow: 'hidden' }}>
      <CoverArt hue={hue} radius="var(--radius-6)" />
    </div>
    <span
      className="absolute inset-0 m-auto inline-flex items-center justify-center"
      style={{
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.92)',
        color: 'var(--color-primary)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
      }}
    >
      <PlayIcon width={26} height={26} />
    </span>
    <span
      className="absolute left-3 top-3"
      style={{ fontSize: 12, fontWeight: 700, color: '#fff', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}
    >
      {label}
    </span>
  </button>
);

export const GatedResult: FC<Props> = ({ loading, prompt, onLogin, onUnlock, onBack }) => (
  <div className="flex min-h-screen flex-col" style={{ background: 'var(--color-bg-light-grey)' }}>
    {/* minimal chrome */}
    <header className="flex items-center justify-between px-4 py-4 md:px-8">
      <button onClick={onBack} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }} aria-label="PDFLeader home">
        <Logo />
      </button>
      <Button variant="outlined" color="primary" size="ms" onClick={onLogin}>
        Log in
      </Button>
    </header>

    <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
      {loading ? (
        <div className="flex flex-col items-center">
          <span
            aria-hidden
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              border: '4px solid var(--color-primary-opacity-16)',
              borderTopColor: 'var(--color-primary)',
              animation: 'spin 0.9s linear infinite',
            }}
          />
          <p className="mt-5" style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            Composing your song…
          </p>
          {prompt && (
            <p className="mt-2" style={{ fontSize: 14, color: 'var(--color-text-secondary)', maxWidth: 420 }}>
              “{prompt}”
            </p>
          )}
          <style>{'@keyframes spin{to{transform:rotate(360deg)}}'}</style>
        </div>
      ) : (
        <>
          <h1
            className="mx-auto max-w-2xl text-[26px] md:text-[40px]"
            style={{ fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.1 }}
          >
            {GATED.heading}
          </h1>

          <div className="mt-10 flex w-full max-w-xl items-center justify-center gap-4 md:gap-6">
            <BlurredCover hue={248} label="Version A" onClick={onUnlock} />
            <BlurredCover hue={168} label="Version B" onClick={onUnlock} />
          </div>

          <div className="mt-10">
            <Button variant="filled" color="primary" size="lg" onClick={onUnlock}>
              {GATED.cta}
            </Button>
          </div>
        </>
      )}
    </main>

    <Footer />
  </div>
);

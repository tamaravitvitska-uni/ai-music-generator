import type { FC } from 'react';
import { Button, IconButton } from '@/components/ui';
import { PlusIcon, DiceIcon } from '../icons';
import { HERO } from '../model/content';

interface Props {
  prompt: string;
  setPrompt: (v: string) => void;
  onAdvanced: () => void;
  onDice: () => void;
  onAttach: () => void;
  onCreate: () => void;
}

export const Hero: FC<Props> = ({ prompt, setPrompt, onAdvanced, onDice, onAttach, onCreate }) => (
  <section className="relative px-4 pb-10 pt-12 md:pb-16 md:pt-20">
    {/* soft brand glow behind the hero */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 mx-auto"
      style={{
        height: 360,
        maxWidth: 900,
        background:
          'radial-gradient(60% 80% at 50% 0%, var(--color-primary-opacity-12), transparent 70%)',
      }}
    />
    <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
      <h1
        style={{
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: 'var(--color-text-primary)',
        }}
        className="text-[34px] md:text-[52px]"
      >
        {HERO.h1}
      </h1>
      <p
        className="mt-4 text-[16px] md:text-[18px]"
        style={{ color: 'var(--color-text-secondary)', maxWidth: 540 }}
      >
        {HERO.subheading}
      </p>

      {/* Prompt block */}
      <div
        className="mt-8 w-full text-left"
        style={{
          background: 'var(--color-bg-white-bg)',
          border: '1px solid var(--color-primary-opacity-16)',
          borderRadius: 'var(--radius-6)',
          boxShadow: '0 18px 50px -22px var(--color-primary-opacity-40)',
          padding: 8,
        }}
      >
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={HERO.placeholder}
          rows={2}
          className="w-full resize-none bg-transparent outline-none"
          style={{
            padding: '12px 12px 4px',
            fontSize: 16,
            lineHeight: 1.4,
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-primary)',
            minHeight: 64,
          }}
        />

        {/* Inline action bar */}
        <div className="flex items-center justify-between gap-2 px-1 pb-1 pt-1">
          <div className="flex items-center gap-2">
            <IconButton variant="text" color="action" size="sm" onClick={onAttach} aria-label="Hum or upload a reference">
              <PlusIcon />
            </IconButton>
            <Button variant="filled-tonal" color="primary" size="sm" onClick={onAdvanced}>
              Advanced
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <IconButton variant="text" color="action" size="sm" onClick={onDice} aria-label="Randomize prompt">
              <DiceIcon />
            </IconButton>
            <Button variant="filled" color="primary" size="md" onClick={onCreate} disabled={!prompt.trim()}>
              {HERO.cta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

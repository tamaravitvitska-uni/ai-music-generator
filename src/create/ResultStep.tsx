import type { FC } from 'react';
import { Button } from '@/components/ui';
import { PlayIcon, DownloadIcon } from '../icons';
import { CoverArt } from '../components/CommunitySection';
import { RESULT } from '../model/content';

// Deterministic waveform heights (no Math.random) seeded by variant + index.
const bars = (seed: number, n = 40) =>
  Array.from({ length: n }, (_, i) => {
    const v = Math.sin(i * 0.6 + seed) * 0.5 + Math.sin(i * 0.23 + seed * 2) * 0.5;
    return 24 + Math.abs(v) * 60;
  });

const Waveform: FC<{ seed: number }> = ({ seed }) => (
  <div className="flex h-12 flex-1 items-center gap-[3px]" aria-hidden>
    {bars(seed).map((h, i) => (
      <span
        key={i}
        style={{
          flex: 1,
          height: `${h}%`,
          minWidth: 2,
          borderRadius: 2,
          background: i < 12 ? 'var(--color-primary)' : 'var(--color-primary-opacity-32)',
        }}
      />
    ))}
  </div>
);

const TrackCard: FC<{ name: string; hue: number; seed: number; lengthLabel: string; onUnlock: () => void }> = ({
  name,
  hue,
  seed,
  lengthLabel,
  onUnlock,
}) => (
  <div
    className="flex items-center gap-4"
    style={{
      background: 'var(--color-bg-white-bg)',
      border: '1px solid var(--color-primary-opacity-12)',
      borderRadius: 'var(--radius-5)',
      padding: 14,
    }}
  >
    <button
      onClick={onUnlock}
      className="relative shrink-0"
      style={{ width: 64, height: 64, borderRadius: 'var(--radius-4)', overflow: 'hidden', border: 'none', padding: 0, cursor: 'pointer' }}
      aria-label={`Play ${name}`}
    >
      <CoverArt hue={hue} size={64} radius="var(--radius-4)" />
      <span
        className="absolute inset-0 m-auto inline-flex items-center justify-center"
        style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', color: 'var(--color-primary)' }}
      >
        <PlayIcon width={15} height={15} />
      </span>
    </button>

    <div className="min-w-0 flex-1">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate" style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>
          {name}
        </span>
        <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>{lengthLabel}</span>
      </div>
      <div className="mt-1.5" style={{ filter: 'blur(2px)', opacity: 0.85 }}>
        <Waveform seed={seed} />
      </div>
    </div>

    <button
      onClick={onUnlock}
      className="shrink-0"
      style={{ background: 'transparent', border: 'none', color: 'var(--color-text-disabled)', cursor: 'pointer' }}
      aria-label={`Download ${name} (sign up required)`}
    >
      <DownloadIcon />
    </button>
  </div>
);

interface Props {
  lengthLabel: string;
  onUnlock: () => void;
}

export const ResultStep: FC<Props> = ({ lengthLabel, onUnlock }) => (
  <div className="mx-auto max-w-xl px-4">
    <div className="text-center">
      <h2 className="text-[24px] md:text-[30px]" style={{ fontWeight: 800, color: 'var(--color-text-primary)' }}>
        {RESULT.heading}
      </h2>
      <p className="mt-2" style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>
        {RESULT.subheading}
      </p>
    </div>

    <div className="mt-6 flex flex-col gap-3">
      {RESULT.variants.map((v, i) => (
        <TrackCard key={v.id} name={v.name} hue={v.hue} seed={i * 3 + 1} lengthLabel={lengthLabel} onUnlock={onUnlock} />
      ))}
    </div>

    <div className="mt-7 flex justify-center">
      <Button variant="filled" color="primary" size="lg" onClick={onUnlock}>
        {RESULT.gateCta}
      </Button>
    </div>
  </div>
);

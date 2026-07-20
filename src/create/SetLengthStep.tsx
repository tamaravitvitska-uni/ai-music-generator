import { type FC } from 'react';
import { Button, IconButton, Badge } from '@/components/ui';
import { PlusIcon, MinusIcon, VideoIcon, BackArrowIcon } from '../icons';
import { LENGTH, LENGTH_PRESETS } from '../model/content';

interface Props {
  lengthSec: number;
  setLengthSec: (s: number) => void;
  onBack: () => void;
  onGenerate: () => void;
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

const parseVideoLen = (v: string): number | null => {
  const m = v.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Math.min(600, Math.max(5, +m[1] * 60 + +m[2]));
};

export const SetLengthStep: FC<Props> = ({ lengthSec, setLengthSec, onBack, onGenerate }) => {
  const clamp = (s: number) => Math.min(600, Math.max(5, s));
  return (
    <div className="mx-auto max-w-xl px-4">
      <div
        style={{
          background: 'var(--color-bg-white-bg)',
          border: '1px solid var(--color-primary-opacity-16)',
          borderRadius: 'var(--radius-6)',
          boxShadow: '0 18px 50px -24px var(--color-primary-opacity-40)',
          padding: 28,
        }}
      >
        <h2 className="text-center text-[24px] md:text-[28px]" style={{ fontWeight: 800, color: 'var(--color-text-primary)' }}>
          {LENGTH.heading}
        </h2>
        <p className="mt-2 text-center" style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>
          {LENGTH.subheading}
        </p>

        {/* big duration display + steppers */}
        <div className="mt-7 flex items-center justify-center gap-5">
          <IconButton variant="outlined" color="primary" size="md" onClick={() => setLengthSec(clamp(lengthSec - 5))} aria-label="Decrease length">
            <MinusIcon />
          </IconButton>
          <div className="text-center" style={{ minWidth: 120 }}>
            <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, color: 'var(--color-text-primary)' }}>{fmt(lengthSec)}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>minutes : seconds</div>
          </div>
          <IconButton variant="outlined" color="primary" size="md" onClick={() => setLengthSec(clamp(lengthSec + 5))} aria-label="Increase length">
            <PlusIcon />
          </IconButton>
        </div>

        {/* presets */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {LENGTH_PRESETS.map((p) => {
            const selected = lengthSec === p.sec;
            return (
              <button key={p.sec} onClick={() => setLengthSec(p.sec)} style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
                <Badge type="badge" style={selected ? 'filled' : 'outlined'} color={selected ? 'primary' : 'grey'} size="default">
                  {p.label}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* match to video */}
        <div
          className="mt-7 flex items-center gap-3"
          style={{ padding: '12px 14px', borderRadius: 'var(--radius-4)', background: 'var(--color-bg-light-grey)' }}
        >
          <span style={{ color: 'var(--color-primary)' }}>
            <VideoIcon />
          </span>
          <label style={{ flex: 1, fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>{LENGTH.matchLabel}</label>
          <input
            placeholder={LENGTH.videoPlaceholder}
            onChange={(e) => {
              const sec = parseVideoLen(e.target.value);
              if (sec) setLengthSec(sec);
            }}
            style={{
              width: 84,
              padding: '8px 10px',
              fontSize: 14,
              textAlign: 'center',
              fontFamily: 'var(--font-primary)',
              border: '1px solid var(--color-primary-opacity-16)',
              borderRadius: 'var(--radius-3)',
              outline: 'none',
              background: 'var(--color-bg-white-bg)',
            }}
          />
        </div>

        <div className="mt-7 flex gap-3">
          <Button variant="outlined" color="primary" size="lg" onClick={onBack} leftIcon={<BackArrowIcon width={18} height={18} />}>
            {LENGTH.back}
          </Button>
          <Button variant="filled" color="primary" size="lg" onClick={onGenerate} style={{ flex: 1 }}>
            {LENGTH.generateCta}
          </Button>
        </div>
      </div>
    </div>
  );
};

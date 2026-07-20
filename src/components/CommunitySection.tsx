import type { FC } from 'react';
import { Badge } from '@/components/ui';
import { PlayIcon, HeartIcon } from '../icons';
import { COMMUNITY } from '../model/content';

// Cover art is a tokenized gradient placeholder (no external images in preview).
export const CoverArt: FC<{ hue: number; size?: number | string; radius?: string }> = ({
  hue,
  size = '100%',
  radius = 'var(--radius-5)',
}) => (
  <div
    style={{
      width: size,
      aspectRatio: '1 / 1',
      borderRadius: radius,
      background: `linear-gradient(140deg, hsl(${hue} 85% 62%), hsl(${(hue + 40) % 360} 80% 48%))`,
    }}
  />
);

const Count: FC<{ icon: React.ReactNode; value: string }> = ({ icon, value }) => (
  <span
    className="inline-flex items-center gap-1"
    style={{
      background: 'rgba(0,0,0,0.45)',
      color: '#fff',
      borderRadius: 'var(--radius-7)',
      padding: '3px 8px',
      fontSize: 12,
      fontWeight: 600,
      backdropFilter: 'blur(4px)',
    }}
  >
    <span style={{ width: 13, height: 13, display: 'inline-flex' }}>{icon}</span>
    {value}
  </span>
);

const SongCard: FC<{ song: (typeof COMMUNITY.songs)[number] }> = ({ song }) => (
  <article className="shrink-0" style={{ width: 224 }}>
    <div className="relative">
      <CoverArt hue={song.hue} />
      {/* play triangle top-left */}
      <span
        className="absolute left-2 top-2 inline-flex items-center justify-center"
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.92)',
          color: 'var(--color-primary)',
          boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
        }}
      >
        <PlayIcon width={16} height={16} />
      </span>
      {/* badges bottom */}
      <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
        <Count icon={<PlayIcon width={11} height={11} />} value={song.plays} />
        <Count icon={<HeartIcon width={11} height={11} />} value={song.likes} />
      </div>
    </div>
    <h3 className="mt-3 truncate" style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>
      {song.title}
    </h3>
    <div className="mt-1.5 flex items-center gap-2">
      <span
        className="inline-flex items-center justify-center"
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: `hsl(${song.hue} 60% 88%)`,
          color: `hsl(${song.hue} 55% 38%)`,
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        {song.user[0].toUpperCase()}
      </span>
      <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>@{song.user}</span>
    </div>
  </article>
);

export const CommunitySection: FC = () => (
  <section className="py-12 md:py-16">
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-[26px] md:text-[34px]" style={{ fontWeight: 800, color: 'var(--color-text-primary)' }}>
            {COMMUNITY.heading}
          </h2>
          <p className="mt-2" style={{ color: 'var(--color-text-secondary)', fontSize: 16 }}>
            {COMMUNITY.subheading}
          </p>
        </div>
        <Badge type="badge" style="filled-tonal" color="primary" size="default">
          Community
        </Badge>
      </div>
    </div>
    {/* horizontal scroll row */}
    <div
      className="flex gap-4 overflow-x-auto px-4 pb-3 md:px-8"
      style={{ scrollSnapType: 'x proximity' }}
    >
      {COMMUNITY.songs.map((song) => (
        <div key={song.id} style={{ scrollSnapAlign: 'start' }}>
          <SongCard song={song} />
        </div>
      ))}
    </div>
  </section>
);

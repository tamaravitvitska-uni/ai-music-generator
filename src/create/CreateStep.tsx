import { useState, type FC } from 'react';
import { Button, IconButton, Badge, TabsRoot, TabsList, TabsTrigger } from '@/components/ui';
import { PlusIcon, DiceIcon, UploadIcon } from '../icons';
import { CoverArt } from '../components/CommunitySection';
import { CREATE, TRACK_TYPES, PRESETS, WORKSPACE_PLAYLISTS } from '../model/content';

interface Props {
  prompt: string;
  setPrompt: (v: string) => void;
  type: string;
  setType: (v: string) => void;
  onDice: () => void;
  onAttach: () => void;
  onContinue: () => void;
}

type PresetKey = keyof typeof PRESETS;

export const CreateStep: FC<Props> = ({ prompt, setPrompt, type, setType, onDice, onAttach, onContinue }) => {
  const [mode, setMode] = useState<'track' | 'ref'>('track');
  const [presetTab, setPresetTab] = useState<PresetKey>('Genres');

  const addPreset = (p: string) => setPrompt(prompt ? `${prompt}, ${p.toLowerCase()}` : p);

  return (
    <div className="mx-auto max-w-3xl px-4">
      <div
        style={{
          background: 'var(--color-bg-white-bg)',
          border: '1px solid var(--color-primary-opacity-16)',
          borderRadius: 'var(--radius-6)',
          boxShadow: '0 18px 50px -24px var(--color-primary-opacity-40)',
          padding: 20,
        }}
      >
        {/* mode tabs */}
        <TabsRoot value={mode} onValueChange={(v) => setMode(v as 'track' | 'ref')} size="sm">
          <TabsList>
            <TabsTrigger value="track">{CREATE.tabTrack}</TabsTrigger>
            <TabsTrigger value="ref">{CREATE.tabRef}</TabsTrigger>
          </TabsList>
        </TabsRoot>

        {mode === 'track' ? (
          <>
            {/* Step 1 — prompt */}
            <label className="mt-5 mb-2 block" style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-secondary)' }}>
              1 · {CREATE.promptStep}
            </label>
            <div
              style={{
                background: 'var(--color-bg-light-grey)',
                border: '1px solid var(--color-primary-opacity-12)',
                borderRadius: 'var(--radius-4)',
                padding: 8,
              }}
            >
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={2}
                placeholder="Describe the song you want to create…"
                className="w-full resize-none bg-transparent outline-none"
                style={{ padding: '8px 8px 4px', fontSize: 15, color: 'var(--color-text-primary)', fontFamily: 'var(--font-primary)' }}
              />
              <div className="flex items-center justify-between px-1">
                <IconButton variant="text" color="action" size="sm" onClick={onAttach} aria-label="Hum or upload a reference">
                  <PlusIcon />
                </IconButton>
                <IconButton variant="text" color="action" size="sm" onClick={onDice} aria-label="Randomize prompt">
                  <DiceIcon />
                </IconButton>
              </div>
            </div>

            {/* Step 2 — type */}
            <label className="mt-5 mb-2 block" style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-secondary)' }}>
              2 · {CREATE.typeStep}
            </label>
            <div className="flex flex-wrap gap-2">
              {TRACK_TYPES.map((t) => {
                const selected = type === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    style={{
                      textAlign: 'left',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-4)',
                      cursor: 'pointer',
                      background: selected ? 'var(--color-primary-opacity-12)' : 'var(--color-bg-white-bg)',
                      border: selected ? '1.5px solid var(--color-primary)' : '1px solid var(--color-primary-opacity-12)',
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 700, color: selected ? 'var(--color-primary)' : 'var(--color-text-primary)' }}>
                      {t.label}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{t.hint}</div>
                  </button>
                );
              })}
            </div>

            {/* Step 3 — presets */}
            <label className="mt-5 mb-2 block" style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-secondary)' }}>
              {CREATE.presetsStep}
            </label>
            <TabsRoot value={presetTab} onValueChange={(v) => setPresetTab(v as PresetKey)} size="sm">
              <TabsList>
                {(Object.keys(PRESETS) as PresetKey[]).map((k) => (
                  <TabsTrigger key={k} value={k}>
                    {k}
                  </TabsTrigger>
                ))}
              </TabsList>
            </TabsRoot>
            <div className="mt-3 flex flex-wrap gap-2">
              {PRESETS[presetTab].map((chip) => (
                <button key={chip} onClick={() => addPreset(chip)} style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
                  <Badge type="badge" style="outlined" color="grey" size="default">
                    {chip}
                  </Badge>
                </button>
              ))}
            </div>

            <div className="mt-6">
              <Button variant="filled" color="primary" size="lg" onClick={onContinue} disabled={!prompt.trim()} style={{ width: '100%' }}>
                {CREATE.continueCta}
              </Button>
            </div>
          </>
        ) : (
          <div className="mt-6 flex flex-col items-center gap-4 py-6 text-center">
            <span
              className="inline-flex items-center justify-center"
              style={{ width: 56, height: 56, borderRadius: 'var(--radius-5)', background: 'var(--color-primary-opacity-12)', color: 'var(--color-primary)' }}
            >
              <UploadIcon />
            </span>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', maxWidth: 360 }}>{CREATE.refNote}</p>
            <Button variant="outlined" color="primary" size="md" onClick={onAttach}>
              Upload a reference
            </Button>
          </div>
        )}
      </div>

      {/* Preset playlists */}
      <div className="mt-12">
        <h2 className="text-[22px] md:text-[28px]" style={{ fontWeight: 800, color: 'var(--color-text-primary)' }}>
          {WORKSPACE_PLAYLISTS.heading}
        </h2>
        <p className="mt-1" style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>
          {WORKSPACE_PLAYLISTS.subheading}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {WORKSPACE_PLAYLISTS.items.map((p) => (
            <button
              key={p.id}
              onClick={() => addPreset(p.title)}
              className="text-left"
              style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <CoverArt hue={p.hue} />
              <div className="mt-2" style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {p.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

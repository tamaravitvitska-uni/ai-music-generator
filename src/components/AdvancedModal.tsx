import { useState, type FC } from 'react';
import {
  Button,
  IconButton,
  Switch,
  Badge,
  TabsRoot,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import { Modal } from './Modal';
import { RefreshIcon, MicIcon, UploadIcon, ChevronDownIcon } from '../icons';
import { ADVANCED, STYLE_POOL } from '../model/content';

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
  onRequireAuth: () => void;
}

const Accordion: FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      style={{
        border: '1px solid var(--color-primary-opacity-12)',
        borderRadius: 'var(--radius-5)',
        overflow: 'hidden',
      }}
    >
      <button
        className="flex w-full items-center justify-between"
        style={{ padding: '14px 16px', background: 'transparent', border: 'none', cursor: 'pointer' }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>{title}</span>
        <span
          style={{
            color: 'var(--color-primary)',
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 200ms ease',
          }}
        >
          <ChevronDownIcon width={20} height={20} />
        </span>
      </button>
      {open && <div style={{ padding: '0 16px 16px' }}>{children}</div>}
    </div>
  );
};

const lyricsTextareaStyle: React.CSSProperties = {
  width: '100%',
  minHeight: 96,
  resize: 'vertical',
  padding: 12,
  fontSize: 15,
  lineHeight: 1.45,
  fontFamily: 'var(--font-primary)',
  color: 'var(--color-text-primary)',
  background: 'var(--color-bg-light-grey)',
  border: '1px solid var(--color-primary-opacity-12)',
  borderRadius: 'var(--radius-4)',
  outline: 'none',
};

export const AdvancedModal: FC<Props> = ({ open, onClose, onCreate, onRequireAuth }) => {
  const [lyricsMode, setLyricsMode] = useState<'auto' | 'write'>('auto');
  const [instrumental, setInstrumental] = useState(false);
  const [styleSetIndex, setStyleSetIndex] = useState(0);
  const [lyrics, setLyrics] = useState('');
  const [styles, setStyles] = useState('');

  const styleChips = STYLE_POOL[styleSetIndex];

  const addStyle = (s: string) => setStyles((cur) => (cur ? `${cur}, ${s}` : s));

  return (
    <Modal open={open} onClose={onClose} maxWidth={580}>
      <div style={{ marginTop: -8 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--color-text-primary)' }}>{ADVANCED.heading}</h2>
        <p style={{ marginTop: 6, fontSize: 15, color: 'var(--color-text-secondary)' }}>{ADVANCED.description}</p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* Block A — Lyrics */}
        <div>
          {!instrumental && (
            <>
              <div className="mb-3">
                <TabsRoot value={lyricsMode} onValueChange={(v) => setLyricsMode(v as 'auto' | 'write')} size="sm">
                  <TabsList>
                    <TabsTrigger value="auto">Auto</TabsTrigger>
                    <TabsTrigger value="write">Write lyrics</TabsTrigger>
                  </TabsList>
                </TabsRoot>
              </div>

              {lyricsMode === 'auto' && (
                <div className="mb-3">
                  <Button variant="filled-tonal" color="primary" size="sm" onClick={() => undefined}>
                    {ADVANCED.generateLyrics}
                  </Button>
                </div>
              )}

              <textarea
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
                placeholder={lyricsMode === 'auto' ? 'AI-generated lyrics will appear here…' : ADVANCED.lyricsPlaceholder}
                style={lyricsTextareaStyle}
              />
            </>
          )}

          {/* Instrumental toggle */}
          <div
            className="mt-3 flex items-center justify-between"
            style={{
              padding: '10px 14px',
              borderRadius: 'var(--radius-4)',
              background: 'var(--color-bg-light-grey)',
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>
              {ADVANCED.instrumentalLabel}
            </span>
            <Switch
              color="primary"
              size="sm"
              checked={instrumental}
              onCheckedChange={(v: boolean) => setInstrumental(v)}
            />
          </div>
        </div>

        {/* Block B — Styles */}
        <Accordion title="Styles">
          <textarea
            value={styles}
            onChange={(e) => setStyles(e.target.value)}
            placeholder={ADVANCED.stylesPlaceholder}
            style={{ ...lyricsTextareaStyle, minHeight: 72 }}
          />
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <IconButton
              variant="outlined"
              color="primary"
              size="xs"
              onClick={() => setStyleSetIndex((i) => (i + 1) % STYLE_POOL.length)}
              aria-label="Regenerate styles"
            >
              <RefreshIcon width={16} height={16} />
            </IconButton>
            {styleChips.map((chip) => (
              <button key={chip} onClick={() => addStyle(chip)} style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
                <Badge type="badge" style="outlined" color="grey" size="default">
                  {chip}
                </Badge>
              </button>
            ))}
          </div>
        </Accordion>

        {/* Block C — Audio (gated, not built) */}
        <Accordion title="Audio">
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 12 }}>
            Record or upload a reference melody, song or image. Sign up to use audio references.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outlined" color="primary" size="md" leftIcon={<MicIcon width={18} height={18} />} onClick={onRequireAuth} style={{ flex: 1 }}>
              Record
            </Button>
            <Button variant="outlined" color="primary" size="md" leftIcon={<UploadIcon width={18} height={18} />} onClick={onRequireAuth} style={{ flex: 1 }}>
              Upload
            </Button>
          </div>
        </Accordion>
      </div>

      {/* Footer — full-width Create */}
      <div className="mt-6">
        <Button variant="filled" color="primary" size="lg" onClick={onCreate} style={{ width: '100%' }}>
          {ADVANCED.cta}
        </Button>
      </div>
    </Modal>
  );
};

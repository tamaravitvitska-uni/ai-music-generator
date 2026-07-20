import { useMemo, useState, type FC } from 'react';
import {
  Button,
  IconButton,
  Switch,
  Badge,
  Search,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui';
import { CoverArt } from '../components/CommunitySection';
import {
  Logo,
  CoinsIcon,
  UserIcon,
  SearchIcon,
  FilterIcon,
  SortIcon,
  ListIcon,
  PlayIcon,
  PauseIcon,
  HeartIcon,
  ShareIcon,
  MoreIcon,
  RefreshIcon,
} from '../icons';
import { DASHBOARD, STYLE_POOL } from '../model/content';

type Song = (typeof DASHBOARD.songs)[number];

// Post-payment workspace. Light PDFLeader style; layout mirrors a studio
// dashboard (left generator column with Simple / Advanced tabs + right song
// library). All songs are unlocked because the user has an active plan.
interface Props {
  /** Optional: trigger a new generation (out of scope here — wired by the host). */
  onCreate?: (prompt: string) => void;
  /** Optional: leave the dashboard (e.g. back to landing). */
  onExit?: () => void;
}

const textareaStyle: React.CSSProperties = {
  width: '100%',
  minHeight: 120,
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

const fieldLabel: React.CSSProperties = { fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 8, display: 'block' };

// --- Header -----------------------------------------------------------------

const DashboardHeader: FC<{ onExit?: () => void }> = ({ onExit }) => (
  <header
    className="flex items-center justify-between gap-4 px-4 md:px-8"
    style={{ height: 68, background: 'var(--color-bg-white-bg)', borderBottom: '1px solid var(--color-primary-opacity-8)' }}
  >
    <button onClick={onExit} aria-label="PDFLeader home" style={{ background: 'transparent', border: 'none', padding: 0, cursor: onExit ? 'pointer' : 'default' }}>
      <Logo />
    </button>
    <nav className="hidden items-center gap-7 md:flex">
      {DASHBOARD.nav.map((item, i) => (
        <a
          key={item}
          href="#"
          style={{ fontSize: 15, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}
          aria-current={i === 0 ? 'page' : undefined}
        >
          {item}
        </a>
      ))}
    </nav>
    <div className="flex items-center gap-3">
      <span
        className="inline-flex items-center gap-1.5"
        style={{
          background: 'var(--color-primary-opacity-12)',
          color: 'var(--color-primary)',
          borderRadius: 'var(--radius-7)',
          padding: '6px 12px',
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        <CoinsIcon width={16} height={16} />
        {DASHBOARD.credits}
      </span>
      <span className="inline-flex items-center gap-2" style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>
        <span
          className="inline-flex items-center justify-center"
          style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-bg-light-grey)', color: 'var(--color-text-secondary)' }}
        >
          <UserIcon width={18} height={18} />
        </span>
        <span className="hidden sm:inline">{DASHBOARD.account}</span>
      </span>
    </div>
  </header>
);

// --- Left generator panel ---------------------------------------------------

const GeneratorPanel: FC<{ onCreate?: (prompt: string) => void }> = ({ onCreate }) => {
  const [tab, setTab] = useState<'simple' | 'advanced'>('simple');
  const [prompt, setPrompt] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [styles, setStyles] = useState('');
  const [instrumental, setInstrumental] = useState(false);
  const [styleSetIndex, setStyleSetIndex] = useState(0);

  const styleChips = STYLE_POOL[styleSetIndex];
  const addStyle = (s: string) => setStyles((cur) => (cur ? `${cur}, ${s}` : s));

  return (
    <aside
      className="shrink-0"
      style={{
        background: 'var(--color-bg-white-bg)',
        border: '1px solid var(--color-primary-opacity-12)',
        borderRadius: 'var(--radius-6)',
        padding: 16,
      }}
    >
      <TabsRoot value={tab} onValueChange={(v) => setTab(v as 'simple' | 'advanced')} color="primary" size="sm" transparent={false}>
        <TabsList>
          <TabsTrigger value="simple" className="flex-1">
            Simple
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex-1">
            Advanced
          </TabsTrigger>
        </TabsList>

        {/* Simple */}
        <TabsContent value="simple" className="mt-4">
          <label style={fieldLabel}>{DASHBOARD.simple.promptLabel}</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={DASHBOARD.simple.placeholder}
            style={textareaStyle}
          />
          <Button variant="filled" color="primary" size="lg" onClick={() => onCreate?.(prompt)} style={{ width: '100%', marginTop: 16 }}>
            {DASHBOARD.simple.createCta}
          </Button>
        </TabsContent>

        {/* Advanced */}
        <TabsContent value="advanced" className="mt-4">
          {!instrumental && (
            <div className="mb-4">
              <label style={fieldLabel}>{DASHBOARD.advanced.lyricsLabel}</label>
              <textarea
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
                placeholder={DASHBOARD.advanced.lyricsPlaceholder}
                style={{ ...textareaStyle, minHeight: 88 }}
              />
            </div>
          )}

          <div
            className="mb-4 flex items-center justify-between"
            style={{ padding: '10px 14px', borderRadius: 'var(--radius-4)', background: 'var(--color-bg-light-grey)' }}
          >
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Instrumental (no lyrics)</span>
            <Switch color="primary" size="sm" checked={instrumental} onCheckedChange={(v: boolean) => setInstrumental(v)} />
          </div>

          <label style={fieldLabel}>{DASHBOARD.advanced.stylesLabel}</label>
          <textarea
            value={styles}
            onChange={(e) => setStyles(e.target.value)}
            placeholder={DASHBOARD.advanced.stylesPlaceholder}
            style={{ ...textareaStyle, minHeight: 72 }}
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
            {styleChips.slice(0, 12).map((chip) => (
              <button key={chip} onClick={() => addStyle(chip)} style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
                <Badge type="badge" style="outlined" color="grey" size="default">
                  {chip}
                </Badge>
              </button>
            ))}
          </div>

          <Button variant="filled" color="primary" size="lg" onClick={() => onCreate?.(styles)} style={{ width: '100%', marginTop: 16 }}>
            {DASHBOARD.advanced.createCta}
          </Button>
        </TabsContent>
      </TabsRoot>
    </aside>
  );
};

// --- Song row ---------------------------------------------------------------

const RowAction: FC<{ label: string; active?: boolean; onClick?: () => void; children: React.ReactNode }> = ({
  label,
  active,
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="inline-flex items-center justify-center"
    style={{
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      color: active ? 'var(--color-primary)' : 'var(--color-text-disabled)',
    }}
  >
    {children}
  </button>
);

const SongRow: FC<{ song: Song; isPlaying: boolean; onPlay: () => void }> = ({ song, isPlaying, onPlay }) => {
  const [liked, setLiked] = useState(song.liked);
  return (
    <div
      className="flex items-center gap-3 md:gap-4"
      style={{
        padding: 12,
        borderRadius: 'var(--radius-5)',
        background: isPlaying ? 'var(--color-primary-opacity-8)' : 'transparent',
        transition: 'background 150ms ease',
      }}
    >
      <button
        onClick={onPlay}
        className="relative shrink-0"
        style={{ width: 56, height: 56, borderRadius: 'var(--radius-4)', overflow: 'hidden', border: 'none', padding: 0, cursor: 'pointer' }}
        aria-label={`${isPlaying ? 'Pause' : 'Play'} ${song.title}`}
      >
        <CoverArt hue={song.hue} size={56} radius="var(--radius-4)" />
        <span
          className="absolute inset-0 m-auto inline-flex items-center justify-center"
          style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', color: 'var(--color-primary)' }}
        >
          {isPlaying ? <PauseIcon width={14} height={14} /> : <PlayIcon width={14} height={14} />}
        </span>
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate" style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {song.title}
          </span>
          <Badge type="badge" style="filled-tonal" color="grey" size="dense">
            {song.version}
          </Badge>
        </div>
        <p
          className="mt-0.5 truncate"
          style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}
          title={song.description}
        >
          {song.description}
        </p>
      </div>

      <span className="hidden shrink-0 sm:inline" style={{ fontSize: 13, color: 'var(--color-text-secondary)', minWidth: 40, textAlign: 'right' }}>
        {song.duration}
      </span>

      <div className="flex shrink-0 items-center gap-0.5">
        <RowAction label="Like" active={liked} onClick={() => setLiked((v) => !v)}>
          <HeartIcon width={17} height={17} />
        </RowAction>
        <RowAction label="Share">
          <ShareIcon width={17} height={17} />
        </RowAction>
        <RowAction label="More">
          <MoreIcon width={18} height={18} />
        </RowAction>
      </div>
    </div>
  );
};

// --- Player bar -------------------------------------------------------------

const PlayerBar: FC<{ song: Song | null; playing: boolean; onToggle: () => void }> = ({ song, playing, onToggle }) => (
  <div
    className="sticky bottom-0 z-30 flex items-center gap-4 px-4 md:px-8"
    style={{
      height: 72,
      background: 'var(--color-bg-white-bg)',
      borderTop: '1px solid var(--color-primary-opacity-12)',
      boxShadow: '0 -6px 24px -18px rgba(0,0,0,0.3)',
    }}
  >
    <div className="flex min-w-0 flex-1 items-center gap-3">
      {song ? (
        <>
          <CoverArt hue={song.hue} size={44} radius="var(--radius-3)" />
          <div className="min-w-0">
            <div className="truncate" style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {song.title}
            </div>
            <div className="truncate" style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
              {song.version} · {song.duration}
            </div>
          </div>
        </>
      ) : (
        <span style={{ fontSize: 13, color: 'var(--color-text-disabled)' }}>Select a song to play</span>
      )}
    </div>

    <IconButton variant="filled" color="primary" size="md" onClick={onToggle} disabled={!song} aria-label={playing ? 'Pause' : 'Play'}>
      {playing ? <PauseIcon width={20} height={20} /> : <PlayIcon width={20} height={20} />}
    </IconButton>

    <div className="hidden flex-1 items-center md:flex">
      <div style={{ height: 4, flex: 1, borderRadius: 2, background: 'var(--color-primary-opacity-12)' }}>
        <div style={{ height: '100%', width: playing ? '38%' : '0%', borderRadius: 2, background: 'var(--color-primary)', transition: 'width 300ms ease' }} />
      </div>
    </div>
  </div>
);

// --- Dashboard --------------------------------------------------------------

export const Dashboard: FC<Props> = ({ onCreate, onExit }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(DASHBOARD.filters[0]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const songs = useMemo(() => {
    let list = DASHBOARD.songs;
    if (filter === 'Liked') list = list.filter((s) => s.liked);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
    }
    return list;
  }, [query, filter]);

  const activeSong = DASHBOARD.songs.find((s) => s.id === activeId) ?? null;

  const playSong = (id: number) => {
    if (id === activeId) {
      setPlaying((p) => !p);
    } else {
      setActiveId(id);
      setPlaying(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'var(--color-bg-light-grey)' }}>
      <DashboardHeader onExit={onExit} />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-6 md:flex-row md:px-8">
        {/* Left column */}
        <div className="md:w-[340px]">
          <GeneratorPanel onCreate={onCreate} />
        </div>

        {/* Right column — library */}
        <main className="min-w-0 flex-1">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-1.5" style={{ fontSize: 14 }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>{DASHBOARD.workspaceCrumb}</span>
            <span style={{ color: 'var(--color-text-disabled)' }}>/</span>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 700 }}>{DASHBOARD.workspaceName}</span>
          </div>

          {/* Toolbar */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="min-w-[200px] flex-1">
              <Search
                size="dense"
                bg="filled"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={DASHBOARD.searchPlaceholder}
                leftIcon={<SearchIcon />}
                showSubmitButton={false}
              />
            </div>
            <IconButton variant="outlined" color="action" size="sm" aria-label="Filters">
              <FilterIcon width={18} height={18} />
            </IconButton>
            <IconButton variant="outlined" color="action" size="sm" aria-label="Sort">
              <SortIcon width={18} height={18} />
            </IconButton>
            <IconButton variant="outlined" color="action" size="sm" aria-label="List view">
              <ListIcon width={18} height={18} />
            </IconButton>
          </div>

          {/* Filter chips */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {DASHBOARD.filters.map((f) => {
              const active = f === filter;
              return (
                <button key={f} onClick={() => setFilter(f)} style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
                  <Badge type="badge" style={active ? 'filled-tonal' : 'outlined'} color={active ? 'primary' : 'grey'} size="default">
                    {f}
                  </Badge>
                </button>
              );
            })}
          </div>

          {/* Song list */}
          <div
            style={{
              background: 'var(--color-bg-white-bg)',
              border: '1px solid var(--color-primary-opacity-12)',
              borderRadius: 'var(--radius-6)',
              padding: 8,
            }}
          >
            {songs.length > 0 ? (
              songs.map((song) => (
                <SongRow key={song.id} song={song} isPlaying={activeId === song.id && playing} onPlay={() => playSong(song.id)} />
              ))
            ) : (
              <div className="py-12 text-center" style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
                {DASHBOARD.emptyHint}
              </div>
            )}
          </div>

          <div className="mt-3 text-center" style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
            {songs.length} {songs.length === 1 ? 'song' : 'songs'}
          </div>
        </main>
      </div>

      <PlayerBar song={activeSong} playing={playing} onToggle={() => setPlaying((p) => !p)} />
    </div>
  );
};

export default Dashboard;

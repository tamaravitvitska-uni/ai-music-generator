// Content + demo data for the AI Music Generator funnel.
// Copy comes from references/spec.md (the source of WHAT we build). In production
// this is the place to swap to i18n keys; kept inline here for clarity + preview.

export const HERO = {
  h1: 'Turn any idea into a song',
  subheading: "Describe a vibe, a lyric, or a feeling — we'll compose the rest.",
  placeholder: 'Describe the song you want to create…',
  cta: 'Create',
};

// Dice / randomize — each tap replaces the prompt with a brand-new description.
export const RANDOM_PROMPTS: string[] = [
  'Dreamy lo-fi beat for late-night studying, soft piano and vinyl crackle',
  'Upbeat summer pop anthem about the sun, the sea and being free',
  'Cinematic orchestral build-up for an epic adventure trailer',
  'Warm acoustic folk song about coming home after a long journey',
  'Energetic synthwave track for a retro driving montage at night',
  'Calm ambient soundscape with gentle rain for deep focus',
  'Funky disco groove with brass stabs and a danceable bassline',
  'Emotional indie ballad with reverb-soaked guitars and soft vocals',
  'Bouncy ukulele tune for a cheerful product explainer video',
  'Dark trap beat with heavy 808s and an eerie melody',
];

export const COMMUNITY = {
  heading: 'Made with PDFLeader',
  subheading: 'Real songs created by our community.',
  songs: [
    { id: 1, title: 'Midnight Drive', user: 'lena.k', plays: '12.4k', likes: '1.2k', hue: 248 },
    { id: 2, title: 'Sunshine State', user: 'marco', plays: '8.9k', likes: '932', hue: 32 },
    { id: 3, title: 'Paper Planes', user: 'aria_w', plays: '21.1k', likes: '3.4k', hue: 168 },
    { id: 4, title: 'Neon Streets', user: 'dj_kai', plays: '5.6k', likes: '610', hue: 292 },
    { id: 5, title: 'Quiet Mornings', user: 'sofia', plays: '15.0k', likes: '2.0k', hue: 200 },
    { id: 6, title: 'Lift Off', user: 'theo', plays: '9.3k', likes: '1.1k', hue: 12 },
    { id: 7, title: 'Velvet Mood', user: 'nadia', plays: '6.7k', likes: '740', hue: 322 },
    { id: 8, title: 'Open Road', user: 'sam.r', plays: '18.2k', likes: '2.6k', hue: 140 },
  ],
};

export const FEATURES = {
  heading: 'Everything you need to score your story',
  subheading: 'Studio-grade, royalty-free music — generated in seconds.',
  items: [
    {
      icon: 'sparkles',
      title: 'Text to song',
      text: 'Describe a mood, a lyric or a scene and get a finished track instantly.',
    },
    {
      icon: 'shield',
      title: 'Royalty-free & safe',
      text: 'Stream-safe music you can use in videos, podcasts and apps worldwide.',
    },
    {
      icon: 'sliders',
      title: 'Fine-tune everything',
      text: 'Switch to Advanced for lyrics, styles, instrumental mode and references.',
    },
    {
      icon: 'clock',
      title: 'Match your length',
      text: 'Set the exact duration so the music fits your video perfectly.',
    },
    {
      icon: 'wave',
      title: 'Multiple versions',
      text: 'Every prompt gives you variations to pick the one that feels right.',
    },
    {
      icon: 'download',
      title: 'Export in a click',
      text: 'Download high-quality audio ready for your timeline.',
    },
  ],
};

export const FAQ = {
  heading: 'Frequently asked questions',
  items: [
    {
      q: 'Can I use the music commercially?',
      a: 'Yes. On Pro and Business plans your tracks are royalty-free and cleared for commercial use in videos, podcasts, ads and apps.',
    },
    {
      q: 'Who owns the songs I generate?',
      a: 'You hold a license to use the music you create according to your plan. The Free plan is for personal, non-commercial use with attribution.',
    },
    {
      q: 'How long does a track take to generate?',
      a: 'Most songs are ready in a few seconds. You always get multiple versions to choose from.',
    },
    {
      q: 'Can I write my own lyrics?',
      a: 'Yes — open Advanced and switch the lyrics mode to “Write lyrics”, or let the AI generate them for you.',
    },
    {
      q: 'Can I match the music to my video length?',
      a: 'Absolutely. You can set the exact duration so the track fits your timeline perfectly.',
    },
  ],
};

export const CLOSING = {
  heading: 'Join PDFLeader for free — start generating music.',
  cta: 'Get started free',
};

// Advanced modal -------------------------------------------------------------

export const ADVANCED = {
  heading: 'Turn any idea into a song',
  description: 'Add lyrics, pick a style, or drop in a reference — then create.',
  lyricsPlaceholder: 'Describe the words, melody or story of your song…',
  generateLyrics: 'Generate lyrics',
  instrumentalLabel: 'Instrumental (no lyrics)',
  stylesPlaceholder: 'Add styles, genres, or moods…',
  cta: 'Create',
};

// Top styles among users; the refresh button regenerates this set.
export const STYLE_POOL: string[][] = [
  ['Pop', 'Lo-fi', 'Cinematic', 'Hip-hop', 'Ambient', 'Rock', 'Jazz', 'EDM', 'Acoustic', 'Synthwave', 'Folk', 'R&B'],
  ['Trap', 'House', 'Orchestral', 'Indie', 'Funk', 'Chillhop', 'Reggae', 'Country', 'Soul', 'Techno', 'Disco', 'Classical'],
  ['Drill', 'Bossa nova', 'Dream pop', 'Phonk', 'Gospel', 'Metal', 'Blues', 'Afrobeat', 'Garage', 'Trance', 'Punk', 'Ballad'],
];

// Gated result --------------------------------------------------------------

export const GATED = {
  heading: 'Your song is ready — two versions to choose from',
  cta: 'Join PDFLeader for free to listen',
};

export const NAV_ITEMS = ['Generator', 'Pricing', 'Community', 'Blog'];

// Generator workspace (Create → Set length → Generate → Result) ---------------

export const TRACK_TYPES = [
  { id: 'track', label: 'Track', hint: 'A full, evolving song' },
  { id: 'loop', label: 'Loop', hint: 'A seamless repeating section' },
  { id: 'jingle', label: 'Jingle', hint: 'A short, catchy hook' },
] as const;

export const PRESETS: Record<'Genres' | 'Moods' | 'Activities', string[]> = {
  Genres: ['Pop', 'Hip-hop', 'Lo-fi', 'Cinematic', 'Rock', 'EDM', 'Jazz', 'Ambient', 'Folk', 'R&B', 'Synthwave'],
  Moods: ['Happy', 'Calm', 'Energetic', 'Dreamy', 'Dark', 'Uplifting', 'Romantic', 'Epic', 'Playful'],
  Activities: ['Vlog', 'Podcast', 'Workout', 'Study', 'Gaming', 'Travel', 'Cooking', 'Meditation', 'Advertising'],
};

export const LENGTH_PRESETS = [
  { label: '0:15', sec: 15 },
  { label: '0:30', sec: 30 },
  { label: '1:00', sec: 60 },
  { label: '2:00', sec: 120 },
  { label: '3:00', sec: 180 },
] as const;

export const CREATE = {
  tabTrack: 'Generate track',
  tabRef: 'Search by reference',
  promptStep: 'Describe your track',
  typeStep: 'Choose a type',
  presetsStep: 'Or pick a starting point',
  continueCta: 'Continue',
  generateCta: 'Generate track',
  refNote: 'Upload a song or melody and we’ll generate something in the same vibe.',
};

export const LENGTH = {
  heading: 'Set the length',
  subheading: 'Match your music to your video so it fits perfectly.',
  matchLabel: 'Match to my video length',
  videoPlaceholder: 'e.g. 1:45',
  back: 'Back',
  generateCta: 'Generate track',
};

export const GENERATING = {
  heading: 'Composing your track…',
  steps: ['Reading your prompt', 'Arranging instruments', 'Mixing & mastering', 'Rendering versions'],
};

export const RESULT = {
  heading: 'Your track is ready — two versions',
  subheading: 'Pick the one that fits. Sign up free to listen and download.',
  variants: [
    { id: 'a', name: 'Version A', hue: 248 },
    { id: 'b', name: 'Version B', hue: 168 },
  ],
  gateCta: 'Join PDFLeader for free to listen',
};

// Payment screen -------------------------------------------------------------
// In production this maps to the REUSED PDFLeader pricing + checkout. The data
// below powers the self-contained presentation used by the funnel + preview.

export const PLANS = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$12',
    period: '/month',
    note: 'Billed monthly. Cancel anytime.',
    perks: ['Unlimited song generations', 'Commercial license', 'High-quality downloads'],
    highlight: false,
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '$7',
    period: '/month',
    note: 'Billed $84 yearly. Save 40%.',
    perks: ['Everything in Monthly', 'Priority generation', 'Stems & multiple versions'],
    highlight: true,
    badge: 'Best value',
  },
] as const;

export const PAYMENT = {
  heading: 'Choose your plan',
  subheading: 'Unlock listening, downloads and commercial rights for your songs.',
  planLabel: 'Select a plan',
  summaryTitle: 'Order summary',
  billedToday: 'Billed today',
  cardTitle: 'Payment details',
  cardNumberLabel: 'Card number',
  cardNumberPlaceholder: '1234 1234 1234 1234',
  expiryLabel: 'Expiry',
  expiryPlaceholder: 'MM / YY',
  cvcLabel: 'CVC',
  cvcPlaceholder: '123',
  nameLabel: 'Name on card',
  namePlaceholder: 'Jane Appleseed',
  payCta: 'Pay & start creating',
  secureNote: 'Secured with 256-bit encryption. Cancel anytime.',
  guaranteeNote: '30-day money-back guarantee',
};

// Thank-you page -------------------------------------------------------------
// In production this maps to the REUSED PDFLeader payment-success screen.

export const THANK_YOU = {
  heading: "You're all set!",
  subheading: 'Your plan is active. Your songs are unlocked and ready in your dashboard.',
  points: ['Listen & download in full quality', 'Commercial license included', 'Create unlimited new songs'],
  cta: 'Go to my dashboard',
};

// Dashboard ------------------------------------------------------------------
// Post-payment workspace: left generator column (Simple / Advanced tabs) +
// right library of the user's songs.

export const DASHBOARD = {
  credits: 658,
  account: 'My account',
  nav: ['Generator', 'AI Music', 'Pricing'],
  workspaceCrumb: 'Workspaces',
  workspaceName: 'My Workspace',
  searchPlaceholder: 'Search your songs…',
  filters: ['All', 'Liked', 'Public', 'Uploads'],
  simple: {
    promptLabel: 'Song description',
    placeholder: 'Describe the song you want to create…',
    createCta: 'Create',
  },
  advanced: {
    lyricsLabel: 'Lyrics',
    lyricsPlaceholder: 'Describe the words, melody or story of your song…',
    stylesLabel: 'Styles',
    stylesPlaceholder: 'Add styles, genres, or moods…',
    createCta: 'Create',
  },
  emptyHint: 'Your generated songs will appear here.',
  // The signed-in user's songs (unlocked after payment).
  songs: [
    {
      id: 1,
      title: 'Midnight Drive',
      version: 'v5',
      duration: '2:48',
      description: 'Dreamy synthwave with warm analog pads, a steady 110 BPM pulse and neon-lit lead melodies.',
      hue: 248,
      liked: true,
    },
    {
      id: 2,
      title: 'Sunshine State',
      version: 'v5',
      duration: '3:15',
      description: 'Upbeat summer pop anthem, bright acoustic guitars, hand claps and a sing-along chorus.',
      hue: 32,
      liked: false,
    },
    {
      id: 3,
      title: 'Paper Planes',
      version: 'v4.5',
      duration: '2:31',
      description: 'Indie folk with reverb-soaked guitars, soft vocals and a gentle building crescendo.',
      hue: 168,
      liked: true,
    },
    {
      id: 4,
      title: 'Neon Streets',
      version: 'v5',
      duration: '3:02',
      description: 'Dark trap beat with heavy 808s, crisp hi-hats and an eerie minor-key melody.',
      hue: 292,
      liked: false,
    },
    {
      id: 5,
      title: 'Quiet Mornings',
      version: 'v4.5',
      duration: '1:58',
      description: 'Calm lo-fi study beat, vinyl crackle, mellow piano chords and a brushed drum kit.',
      hue: 200,
      liked: false,
    },
    {
      id: 6,
      title: 'Lift Off',
      version: 'v5',
      duration: '2:44',
      description: 'Cinematic orchestral build-up with soaring strings, taiko drums and an epic brass finale.',
      hue: 12,
      liked: true,
    },
  ],
};

export const WORKSPACE_PLAYLISTS = {
  heading: 'Royalty-free music for anything',
  subheading: 'Start from a popular preset, then make it yours.',
  items: [
    { id: 1, title: 'Cinematic Trailers', hue: 248 },
    { id: 2, title: 'Chill Lo-fi', hue: 200 },
    { id: 3, title: 'Upbeat Vlogs', hue: 32 },
    { id: 4, title: 'Focus & Study', hue: 168 },
    { id: 5, title: 'Workout Energy', hue: 12 },
    { id: 6, title: 'Ambient Calm', hue: 280 },
  ],
};

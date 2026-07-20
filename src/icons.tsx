import type { FC, SVGProps } from 'react';

// Icons used by the funnel that are not provided by @universe-forma/ui-pes.
// All use currentColor so they inherit text/button color and DS tokens.

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  ...props,
});

export const PlusIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const DiceIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="8" cy="8" r="1.4" fill="currentColor" />
    <circle cx="16" cy="8" r="1.4" fill="currentColor" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    <circle cx="8" cy="16" r="1.4" fill="currentColor" />
    <circle cx="16" cy="16" r="1.4" fill="currentColor" />
  </svg>
);

export const PlayIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
  </svg>
);

export const RefreshIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path
      d="M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MicIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const UploadIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path
      d="M12 16V4m0 0L7 9m5-5 5 5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeartIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path
      d="M12 20s-7-4.5-9.2-8.4C1.3 9 2.4 6 5.3 6c1.9 0 3 1.1 3.7 2.1C9.7 7.1 10.8 6 12.7 6c2.9 0 4 3 2.5 5.6C13 15.5 12 20 12 20Z"
      fill="currentColor"
    />
  </svg>
);

export const GoogleIcon: FC<IconProps> = (p) => (
  <svg {...base({ ...p, viewBox: '0 0 24 24' })}>
    <path
      d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3Z"
      fill="#4285F4"
    />
    <path
      d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z"
      fill="#34A853"
    />
    <path d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2L6.4 14Z" fill="#FBBC05" />
    <path
      d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.4 3-4.1 5.6-4.1Z"
      fill="#EA4335"
    />
  </svg>
);

export const ChevronDownIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CloseIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CheckIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MinusIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const PauseIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="6" y="5" width="4" height="14" rx="1.2" fill="currentColor" />
    <rect x="14" y="5" width="4" height="14" rx="1.2" fill="currentColor" />
  </svg>
);

export const DownloadIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path
      d="M12 4v9m0 0 3.5-3.5M12 13 8.5 9.5M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BackArrowIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SearchIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CoinsIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="7" rx="7" ry="3.2" stroke="currentColor" strokeWidth="2" />
    <path d="M5 7v5c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2V7" stroke="currentColor" strokeWidth="2" />
    <path d="M5 12v5c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2v-5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const UserIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ShareIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const FilterIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SortIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M7 4v16m0 0-3-3m3 3 3-3M17 20V4m0 0-3 3m3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ListIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M8 6h12M8 12h12M8 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="4" cy="6" r="1.2" fill="currentColor" />
    <circle cx="4" cy="12" r="1.2" fill="currentColor" />
    <circle cx="4" cy="18" r="1.2" fill="currentColor" />
  </svg>
);

export const MoreIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <circle cx="5" cy="12" r="1.6" fill="currentColor" />
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    <circle cx="19" cy="12" r="1.6" fill="currentColor" />
  </svg>
);

export const LockIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="5" y="10" width="14" height="10" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="15" r="1.4" fill="currentColor" />
  </svg>
);

export const VideoIcon: FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="3" y="6" width="13" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="M16 10l5-3v10l-5-3v-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const ResizeHandleIcon: FC<IconProps> = (p) => (
  <svg {...base({ ...p, width: 14, height: 14, viewBox: '0 0 14 14' })}>
    <path d="M13 5 5 13M13 9l-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

// Official PDFLeader logo lockup (mark + wordmark). Brand colors are intrinsic
// to the artwork (#393939 + PDFLeader blue #4988FC). `height` scales it; width
// follows the 215:48 aspect ratio. `showText` is kept for API compatibility.
const LOGO_ASPECT = 215 / 48;

export const Logo: FC<IconProps & { showText?: boolean; height?: number }> = ({
  showText: _showText,
  height = 28,
  ...p
}) => (
  <svg
    height={height}
    width={height * LOGO_ASPECT}
    viewBox="0 0 215 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="PDFLeader"
    {...p}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.9255 18.5561C20.9255 20.4855 19.3849 22.0496 17.4844 22.0496H5.35464V32.5813C5.35464 34.0284 6.51013 35.2015 7.93551 35.2015H11.5321C12.9574 35.2015 14.1129 34.0284 14.1129 32.5813V28.7927H17.8607C20.261 28.7927 22.3512 28.3952 24.1323 27.6003C25.9142 26.8054 27.2869 25.6625 28.2522 24.1716C29.2167 22.6807 29.6989 20.9425 29.6989 18.9552C29.6989 17.9812 29.583 17.0669 29.3519 16.2123C29.1108 15.3235 28.7445 14.4979 28.2522 13.7371C27.2869 12.2479 25.9142 11.105 24.1323 10.3101C23.1569 9.87341 22.0874 9.55784 20.9255 9.36167V18.5561Z"
      fill="#393939"
    />
    <path
      d="M31.4582 11.737C31.4582 10.29 32.6137 9.11689 34.039 9.11689H44.2613C47.1559 9.11689 49.7042 9.65101 51.9061 10.7193C54.1327 11.7627 55.8522 13.2656 57.0645 15.2282C58.3015 17.1908 58.92 19.5012 58.92 22.1594C58.92 24.8176 58.3015 27.128 57.0645 29.0905C55.8522 31.0531 54.1327 32.5685 51.9061 33.6368C49.7042 34.6802 47.1559 35.2019 44.2613 35.2019H34.039C32.6137 35.2019 31.4582 34.0288 31.4582 32.5817V11.737ZM43.8902 28.3453C45.7705 28.3453 47.2673 27.8111 48.3806 26.7429C49.5186 25.6498 50.0877 24.122 50.0877 22.1594C50.0877 20.1968 49.5186 18.6814 48.3806 17.6131C47.2673 16.5201 45.7705 15.9735 43.8902 15.9735H40.2163V28.3453H43.8902Z"
      fill="#393939"
    />
    <path
      d="M74.7726 15.6381C71.2842 15.6381 69.54 17.1287 69.54 20.1098V20.2216H76.1625C77.5879 20.2216 78.7434 21.3947 78.7434 22.8418V24.2345C78.7434 25.6816 77.5879 26.8547 76.1625 26.8547H69.54V32.5817C69.54 34.0288 68.3845 35.2019 66.9591 35.2019H63.3628C61.9374 35.2019 60.7819 34.0288 60.7819 32.5817V20.2962C60.7819 16.5201 61.9323 13.6134 64.2332 11.5763C66.534 9.53922 69.7998 8.52066 74.0304 8.52066C75.5395 8.52066 76.9621 8.66972 78.2981 8.96783C78.7439 9.05903 79.1691 9.16268 79.5737 9.27878C80.8485 9.64466 81.3861 11.0778 80.9088 12.3324L80.0819 14.5059C79.6265 15.703 78.2347 16.2076 76.9992 15.9363C76.2323 15.7375 75.49 15.6381 74.7726 15.6381Z"
      fill="#393939"
    />
    <path
      d="M88.188 11.737C88.188 10.29 89.3434 9.11689 90.7688 9.11689H91.619C93.0444 9.11689 94.1999 10.29 94.1999 11.737V30.283H104.803C106.141 30.283 107.226 31.3841 107.226 32.7424C107.226 34.1008 106.141 35.2019 104.803 35.2019H90.7688C89.3435 35.2019 88.188 34.0288 88.188 32.5817V11.737Z"
      fill="#4988FC"
    />
    <path
      d="M118.975 30.842C120.014 30.842 120.93 30.6929 121.721 30.3948C121.825 30.3537 121.928 30.3098 122.03 30.263C123.224 29.7153 124.715 29.6989 125.609 30.6719C126.435 31.5717 126.47 32.9965 125.47 33.6921C123.739 34.8974 121.524 35.5 118.827 35.5C116.575 35.5 114.584 35.0652 112.852 34.1957C111.12 33.3014 109.784 32.0717 108.844 30.5066C107.904 28.9415 107.434 27.1652 107.434 25.1778C107.434 23.2152 107.892 21.4514 108.807 19.8863C109.747 18.2963 111.021 17.0666 112.629 16.1971C114.262 15.3028 116.093 14.8556 118.122 14.8556C120.027 14.8556 121.759 15.2655 123.317 16.0853C124.876 16.8803 126.113 18.0479 127.028 19.5882C127.628 20.5546 128.036 21.6373 128.253 22.8362C128.477 24.0726 127.559 25.1623 126.343 25.3986L113.668 27.8608C114.089 28.8545 114.745 29.5998 115.635 30.0967C116.551 30.5935 117.664 30.842 118.975 30.842ZM118.122 19.2528C116.662 19.2528 115.474 19.7248 114.559 20.6688C113.644 21.6128 113.161 22.9171 113.112 24.5816L122.835 22.6811C122.563 21.6377 122.006 20.8055 121.165 20.1844C120.324 19.5633 119.309 19.2528 118.122 19.2528Z"
      fill="#4988FC"
    />
    <path
      d="M148.898 15.1537C150.323 15.1537 151.479 16.3268 151.479 17.7738V32.5817C151.479 34.0288 150.323 35.2019 148.898 35.2019H148.225C146.968 35.2019 145.949 34.1675 145.949 32.8915C144.514 34.6305 142.436 35.5 139.715 35.5C137.835 35.5 136.127 35.0777 134.594 34.233C133.084 33.3884 131.897 32.1835 131.031 30.6184C130.165 29.0533 129.732 27.2397 129.732 25.1778C129.732 23.1158 130.165 21.3023 131.031 19.7372C131.897 18.1721 133.084 16.9672 134.594 16.1226C136.127 15.2779 137.835 14.8556 139.715 14.8556C142.263 14.8556 144.255 15.663 145.69 17.2778C145.69 16.1047 146.626 15.1537 147.782 15.1537H148.898ZM140.717 30.7302C142.176 30.7302 143.389 30.2333 144.354 29.2396C145.319 28.221 145.801 26.8671 145.801 25.1778C145.801 23.4885 145.319 22.147 144.354 21.1533C143.389 20.1347 142.176 19.6254 140.717 19.6254C139.232 19.6254 138.008 20.1347 137.043 21.1533C136.078 22.147 135.596 23.4885 135.596 25.1778C135.596 26.8671 136.078 28.221 137.043 29.2396C138.008 30.2333 139.232 30.7302 140.717 30.7302Z"
      fill="#4988FC"
    />
    <path
      d="M173.481 7.55179C174.907 7.55179 176.062 8.72487 176.062 10.1719V32.5817C176.062 34.0288 174.907 35.2019 173.481 35.2019H172.808C171.551 35.2019 170.533 34.1675 170.533 32.8915C169.098 34.6305 167.019 35.5 164.298 35.5C162.418 35.5 160.711 35.0777 159.177 34.233C157.668 33.3884 156.48 32.1835 155.614 30.6184C154.748 29.0533 154.315 27.2397 154.315 25.1778C154.315 23.1158 154.748 21.3023 155.614 19.7372C156.48 18.1721 157.668 16.9672 159.177 16.1226C160.711 15.2779 162.418 14.8556 164.298 14.8556C166.846 14.8556 168.838 15.663 170.273 17.2778V10.1719C170.273 8.72487 171.428 7.55179 172.854 7.55179H173.481ZM165.3 30.7302C166.76 30.7302 167.972 30.2333 168.937 29.2396C169.902 28.221 170.384 26.8671 170.384 25.1778C170.384 23.4885 169.902 22.147 168.937 21.1533C167.972 20.1347 166.76 19.6254 165.3 19.6254C163.816 19.6254 162.591 20.1347 161.626 21.1533C160.661 22.147 160.179 23.4885 160.179 25.1778C160.179 26.8671 160.661 28.221 161.626 29.2396C162.591 30.2333 163.816 30.7302 165.3 30.7302Z"
      fill="#4988FC"
    />
    <path
      d="M190.364 30.842C191.403 30.842 192.318 30.6929 193.11 30.3948C193.214 30.3537 193.317 30.3098 193.419 30.263C194.613 29.7153 196.104 29.6989 196.997 30.6719C197.824 31.5717 197.858 32.9965 196.859 33.6921C195.127 34.8974 192.913 35.5 190.215 35.5C187.964 35.5 185.972 35.0652 184.241 34.1957C182.509 33.3014 181.173 32.0717 180.233 30.5066C179.292 28.9415 178.822 27.1652 178.822 25.1778C178.822 23.2152 179.28 21.4514 180.195 19.8863C181.136 18.2963 182.41 17.0666 184.018 16.1971C185.651 15.3028 187.482 14.8556 189.51 14.8556C191.415 14.8556 193.147 15.2655 194.706 16.0853C196.264 16.8803 197.501 18.0479 198.417 19.5882C199.016 20.5546 199.425 21.6373 199.642 22.8362C199.866 24.0726 198.947 25.1623 197.731 25.3986L185.057 27.8608C185.478 28.8545 186.133 29.5998 187.024 30.0967C187.939 30.5935 189.053 30.842 190.364 30.842ZM189.51 19.2528C188.051 19.2528 186.863 19.7248 185.948 20.6688C185.032 21.6128 184.55 22.9171 184.5 24.5816L194.223 22.6811C193.951 21.6377 193.394 20.8055 192.553 20.1844C191.712 19.5633 190.698 19.2528 189.51 19.2528Z"
      fill="#4988FC"
    />
    <path
      d="M208.135 17.7995C208.827 16.8306 209.755 16.0977 210.918 15.6009C211.407 15.396 211.927 15.2334 212.475 15.113C213.847 14.8118 215 16.0112 215 17.4367V18.9007C215 19.6134 214.403 20.1471 213.701 20.1471C212.044 20.1471 210.745 20.6191 209.805 21.5632C208.864 22.4823 208.394 23.8735 208.394 25.7368V32.5817C208.394 34.0288 207.239 35.2019 205.813 35.2019H205.186C203.761 35.2019 202.605 34.0288 202.605 32.5817V17.7738C202.605 16.3268 203.761 15.1537 205.186 15.1537H205.554C206.979 15.1537 208.135 16.3524 208.135 17.7995Z"
      fill="#4988FC"
    />
    <path
      d="M0.676258 14.5228L12.9081 0.862919C14.4949 -0.909161 17.3987 0.230516 17.3987 2.62541V16.2853C17.3987 17.7323 16.2432 18.9054 14.8178 18.9054H2.58594C0.345388 18.9054 -0.830903 16.2059 0.676258 14.5228Z"
      fill="#4988FC"
    />
  </svg>
);

// Feature glyphs ------------------------------------------------------------
const featurePaths: Record<string, JSX.Element> = {
  sparkles: (
    <path
      d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3ZM19 14l.9 2.1 2.1.9-2.1.9L19 20l-.9-2.1-2.1-.9 2.1-.9L19 14Z"
      fill="currentColor"
    />
  ),
  shield: (
    <path
      d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Zm-1.2 11.5 5-5-1.4-1.4-3.6 3.6-1.6-1.6L8 11.5l2.8 3Z"
      fill="currentColor"
    />
  ),
  sliders: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
      <circle cx="16" cy="7" r="2.2" fill="var(--color-bg-white-bg)" />
      <circle cx="8" cy="17" r="2.2" fill="var(--color-bg-white-bg)" />
    </g>
  ),
  clock: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </g>
  ),
  wave: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 12v0M8 8v8M12 5v14M16 8v8M20 11v2" />
    </g>
  ),
  download: (
    <path
      d="M12 4v9m0 0 3.5-3.5M12 13 8.5 9.5M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export const FeatureIcon: FC<IconProps & { name: string }> = ({ name, ...p }) => (
  <svg {...base(p)}>{featurePaths[name] ?? featurePaths.sparkles}</svg>
);

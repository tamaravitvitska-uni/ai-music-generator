import type { FC } from 'react';
import { Button } from '@/components/ui';
import { Logo } from '../icons';
import { NAV_ITEMS } from '../model/content';

interface Props {
  onLogin: () => void;
}

export const Header: FC<Props> = ({ onLogin }) => (
  <header
    className="sticky top-0 z-40 flex items-center justify-between gap-4 px-4 md:px-8"
    style={{
      height: 68,
      background: 'color-mix(in srgb, var(--color-bg-white-bg) 88%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--color-primary-opacity-8)',
    }}
  >
    <a href="#" aria-label="PDFLeader home" className="shrink-0">
      <Logo />
    </a>

    <nav className="hidden items-center gap-7 md:flex">
      {NAV_ITEMS.map((item) => {
        const active = item === 'Generator';
        return (
          <a
            key={item}
            href="#"
            style={{
              fontSize: 15,
              fontWeight: active ? 700 : 500,
              color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
            }}
            aria-current={active ? 'page' : undefined}
          >
            {item}
          </a>
        );
      })}
    </nav>

    <div className="shrink-0">
      <Button variant="outlined" color="primary" size="ms" onClick={onLogin}>
        Log in
      </Button>
    </div>
  </header>
);

import type { FC } from 'react';
import { Logo } from '../icons';

const COLUMNS: { title: string; links: string[] }[] = [
  { title: 'Product', links: ['Generator', 'Pricing', 'Community', "What's new"] },
  { title: 'Resources', links: ['Blog', 'Help center', 'Licensing', 'API'] },
  { title: 'Company', links: ['About', 'Careers', 'Contact', 'Affiliates'] },
  { title: 'Legal', links: ['Terms', 'Privacy', 'Cookies'] },
];

export const Footer: FC = () => (
  <footer style={{ background: 'var(--color-bg-white-bg)', borderTop: '1px solid var(--color-primary-opacity-8)' }}>
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-3" style={{ fontSize: 13, color: 'var(--color-text-secondary)', maxWidth: 220 }}>
            AI music generation for video, podcasts and apps.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 12 }}>
              {col.title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="mt-10 flex flex-col items-center justify-between gap-3 pt-6 md:flex-row"
        style={{ borderTop: '1px solid var(--color-primary-opacity-8)' }}
      >
        <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
          © 2026 PDFLeader. All rights reserved.
        </span>
        <span style={{ fontSize: 13, color: 'var(--color-text-disabled)' }}>
          Built on the PDFLeader design system
        </span>
      </div>
    </div>
  </footer>
);

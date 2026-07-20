import { useEffect, type FC, type ReactNode } from 'react';
import { IconButton } from '@/components/ui';
import { CloseIcon } from '../icons';

// Lightweight centered modal overlay.
// NOTE: @universe-forma/ui-pes exposes BaseDrawer (a Vaul drawer) but no centered
// Dialog/Modal. This is a layout-only composition using DS tokens + IconButton;
// swap to BaseDrawer if a drawer presentation is preferred.
interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: number;
}

export const Modal: FC<Props> = ({ open, onClose, children, maxWidth = 560 }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center md:items-center"
      style={{ background: 'rgba(20, 22, 30, 0.45)', backdropFilter: 'blur(2px)', padding: 0 }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="w-full"
        style={{
          maxWidth,
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'var(--color-bg-white-bg)',
          borderRadius: 'var(--radius-6)',
          boxShadow: '0 40px 90px -30px rgba(0,0,0,0.5)',
          padding: 24,
        }}
      >
        <div style={{ position: 'absolute', right: 0, top: 0 }} />
        <div className="mb-2 flex justify-end">
          <IconButton variant="text" color="action" size="sm" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  );
};

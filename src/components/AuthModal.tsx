import type { FC } from 'react';
import { Button } from '@/components/ui';
import { Modal } from './Modal';
import { GoogleIcon, Logo } from '../icons';

// Registration / sign-in modal. Opened from any gated call-to-action (Create,
// play/listen, Join). Offers Google + email, and shows a "Last used" hint above
// the method used previously in the session. Selecting either method resolves
// the gate via `onAuthenticated`.
interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onAuthenticated: () => void;
}

// Which method the user signed in with last (drives the "Last used" chip).
// Widened so both branches below type-check.
const LAST_USED = 'google' as 'google' | 'email';

const LastUsedChip: FC = () => (
  <div
    style={{
      alignSelf: 'flex-start',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--color-primary)',
      background: 'var(--color-primary-opacity-12)',
      borderRadius: 999,
      padding: '2px 10px',
      marginBottom: 6,
    }}
  >
    Last used
  </div>
);

export const AuthModal: FC<AuthModalProps> = ({ open, onClose, onAuthenticated }) => {
  return (
    <Modal open={open} onClose={onClose} maxWidth={420}>
      <div style={{ marginTop: -8, textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Logo showText={false} />
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 12, color: 'var(--color-text-primary)' }}>
          Create your free account
        </h2>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 6 }}>
          Sign up to listen, download and keep your songs.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
        {LAST_USED === 'google' && <LastUsedChip />}
        <Button
          variant="outlined"
          color="primary"
          size="lg"
          leftIcon={<GoogleIcon width={20} height={20} />}
          style={{ width: '100%' }}
          onClick={onAuthenticated}
        >
          Continue with Google
        </Button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0' }}>
          <span style={{ flex: 1, height: 1, background: 'var(--color-primary-opacity-12)' }} />
          <span style={{ fontSize: 12, color: 'var(--color-text-disabled)' }}>or</span>
          <span style={{ flex: 1, height: 1, background: 'var(--color-primary-opacity-12)' }} />
        </div>

        {LAST_USED === 'email' && <LastUsedChip />}
        <input
          placeholder="Enter your email"
          style={{
            width: '100%',
            padding: '12px 14px',
            fontSize: 15,
            fontFamily: 'var(--font-primary)',
            border: '1px solid var(--color-primary-opacity-16)',
            borderRadius: 'var(--radius-4)',
            outline: 'none',
          }}
        />
        <Button variant="filled" color="primary" size="lg" style={{ width: '100%' }} onClick={onAuthenticated}>
          Continue with email
        </Button>
      </div>
    </Modal>
  );
};

export default AuthModal;

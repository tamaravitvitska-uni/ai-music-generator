import { useState, type FC } from 'react';
import { AiMusicLanding } from './AiMusicLanding';
import { PaymentScreen } from './payment/PaymentScreen';
import { ThankYouScreen } from './payment/ThankYouScreen';
import { Dashboard } from './dashboard/Dashboard';
import { AuthModal } from './components/AuthModal';

// The whole funnel journey, wired together:
//   Landing / creation flow (AiMusicLanding)
//     → auth (AuthModal)
//     → Payment
//     → Thank-you
//     → Dashboard
// Each post-auth screen is a self-contained presentation driven by props.
type Stage = 'browse' | 'payment' | 'thankyou' | 'dashboard';

export const App: FC = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [stage, setStage] = useState<Stage>('browse');

  // Successful sign-in closes the modal and moves the funnel to Payment.
  const handleAuthenticated = () => {
    setAuthOpen(false);
    setStage('payment');
  };

  if (stage === 'payment') {
    return <PaymentScreen onPay={() => setStage('thankyou')} onBack={() => setStage('browse')} />;
  }

  if (stage === 'thankyou') {
    return <ThankYouScreen onContinue={() => setStage('dashboard')} />;
  }

  if (stage === 'dashboard') {
    return <Dashboard onExit={() => setStage('browse')} />;
  }

  return (
    <>
      <AiMusicLanding onRequireAuth={() => setAuthOpen(true)} onCheckout={() => setAuthOpen(true)} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onAuthenticated={handleAuthenticated} />
    </>
  );
};

export default App;

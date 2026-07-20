import { useCallback, useState, type FC } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CommunitySection } from './components/CommunitySection';
import { FeaturesSection } from './components/FeaturesSection';
import { FaqSection } from './components/FaqSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { AdvancedModal } from './components/AdvancedModal';
import { GeneratorFlow } from './create/GeneratorFlow';
import { RANDOM_PROMPTS } from './model/content';

export interface AiMusicLandingProps {
  /** Open the (reused) PDFLeader registration / sign-in modal. */
  onRequireAuth: (reason?: 'login' | 'signup' | 'unlock' | 'create' | 'plan') => void;
  /** Continue to the (reused) PDFLeader pricing / checkout (used by gated CTAs). */
  onCheckout?: (plan?: string) => void;
}

type Screen = 'landing' | 'workspace';

export const AiMusicLanding: FC<AiMusicLandingProps> = ({ onRequireAuth }) => {
  const [prompt, setPrompt] = useState('');
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [screen, setScreen] = useState<Screen>('landing');

  const rollDice = useCallback(() => {
    setPrompt((cur) => {
      let next = cur;
      while (next === cur) next = RANDOM_PROMPTS[Math.floor(Math.random() * RANDOM_PROMPTS.length)];
      return next;
    });
  }, []);

  const enterWorkspace = useCallback(() => {
    setAdvancedOpen(false);
    setScreen('workspace');
  }, []);

  if (screen === 'workspace') {
    return (
      <GeneratorFlow
        initialPrompt={prompt}
        onRequireAuth={() => onRequireAuth('unlock')}
        onExit={() => setScreen('landing')}
      />
    );
  }

  return (
    <div style={{ background: 'var(--color-bg-white-bg)' }}>
      <Header onLogin={() => onRequireAuth('login')} />
      <Hero
        prompt={prompt}
        setPrompt={setPrompt}
        onAdvanced={() => setAdvancedOpen(true)}
        onDice={rollDice}
        onAttach={() => onRequireAuth('unlock')}
        onCreate={enterWorkspace}
      />
      <CommunitySection />
      <FeaturesSection />
      <FaqSection />
      <ClosingCta onStart={() => onRequireAuth('signup')} />
      <Footer />

      <AdvancedModal
        open={advancedOpen}
        onClose={() => setAdvancedOpen(false)}
        onCreate={enterWorkspace}
        onRequireAuth={() => onRequireAuth('unlock')}
      />
    </div>
  );
};

export default AiMusicLanding;

import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import { Button, IconButton } from '@/components/ui';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Stepper } from './Stepper';
import { CreateStep } from './CreateStep';
import { SetLengthStep } from './SetLengthStep';
import { GeneratingStep } from './GeneratingStep';
import { ResultStep } from './ResultStep';
import { BackArrowIcon } from '../icons';
import { RANDOM_PROMPTS } from '../model/content';

type Step = 'create' | 'length' | 'generating' | 'result';
const STEP_INDEX: Record<Step, number> = { create: 0, length: 1, generating: 2, result: 2 };
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

interface Props {
  initialPrompt: string;
  onRequireAuth: () => void;
  onExit: () => void;
}

export const GeneratorFlow: FC<Props> = ({ initialPrompt, onRequireAuth, onExit }) => {
  const [step, setStep] = useState<Step>('create');
  const [prompt, setPrompt] = useState(initialPrompt);
  const [type, setType] = useState('track');
  const [lengthSec, setLengthSec] = useState(60);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => void (timer.current && clearTimeout(timer.current)), []);

  const rollDice = useCallback(() => {
    setPrompt((cur) => {
      let next = cur;
      while (next === cur) next = RANDOM_PROMPTS[Math.floor(Math.random() * RANDOM_PROMPTS.length)];
      return next;
    });
  }, []);

  const generate = useCallback(() => {
    setStep('generating');
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStep('result'), 2800);
  }, []);

  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'var(--color-bg-white-bg)' }}>
      <Header onLogin={onRequireAuth} />

      <div className="px-4 pt-6">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Button variant="text" color="primary" size="sm" onClick={onExit} leftIcon={<BackArrowIcon width={18} height={18} />}>
            Home
          </Button>
        </div>
        <div className="mt-4">
          <Stepper active={STEP_INDEX[step]} />
        </div>
      </div>

      <main className="flex-1 py-8 md:py-10">
        {step === 'create' && (
          <CreateStep
            prompt={prompt}
            setPrompt={setPrompt}
            type={type}
            setType={setType}
            onDice={rollDice}
            onAttach={onRequireAuth}
            onContinue={() => setStep('length')}
          />
        )}
        {step === 'length' && (
          <SetLengthStep lengthSec={lengthSec} setLengthSec={setLengthSec} onBack={() => setStep('create')} onGenerate={generate} />
        )}
        {step === 'generating' && <GeneratingStep prompt={prompt} lengthLabel={fmt(lengthSec)} />}
        {step === 'result' && <ResultStep lengthLabel={fmt(lengthSec)} onUnlock={onRequireAuth} />}
      </main>

      {step === 'create' && <Footer />}
    </div>
  );
};

export default GeneratorFlow;

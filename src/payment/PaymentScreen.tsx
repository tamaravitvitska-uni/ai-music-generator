import { useState, type FC } from 'react';
import { Button, Input, Badge } from '@/components/ui';
import { Footer } from '../components/Footer';
import { Logo, LockIcon, CheckIcon, BackArrowIcon } from '../icons';
import { PLANS, PAYMENT } from '../model/content';

// Self-contained Payment presentation for the AI Music funnel.
// In production this maps to the REUSED PDFLeader pricing + checkout; here it is
// a decoupled screen driven purely by props so the full flow is demonstrable.
interface Props {
  /** Complete the purchase — advances the flow to the Thank-you screen. */
  onPay: () => void;
  /** Optional: return to the previous step. */
  onBack?: () => void;
}

const Perk: FC<{ children: string }> = ({ children }) => (
  <li className="flex items-center gap-2" style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--color-primary-opacity-12)', color: 'var(--color-primary)' }}
    >
      <CheckIcon width={12} height={12} />
    </span>
    {children}
  </li>
);

export const PaymentScreen: FC<Props> = ({ onPay, onBack }) => {
  const [planId, setPlanId] = useState<string>(PLANS.find((p) => p.highlight)?.id ?? PLANS[0].id);
  const [card, setCard] = useState({ number: '', expiry: '', cvc: '', name: '' });
  const selected = PLANS.find((p) => p.id === planId) ?? PLANS[0];
  const setField = (key: keyof typeof card) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setCard((c) => ({ ...c, [key]: e.target.value }));

  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'var(--color-bg-light-grey)' }}>
      {/* Minimal checkout chrome */}
      <header
        className="flex items-center justify-between px-4 md:px-8"
        style={{ height: 68, background: 'var(--color-bg-white-bg)', borderBottom: '1px solid var(--color-primary-opacity-8)' }}
      >
        <Logo />
        <span className="inline-flex items-center gap-1.5" style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
          <LockIcon width={16} height={16} />
          Secure checkout
        </span>
      </header>

      <main className="flex-1 py-8 md:py-12">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
          {onBack && (
            <Button variant="text" color="primary" size="sm" onClick={onBack} leftIcon={<BackArrowIcon width={18} height={18} />}>
              Back
            </Button>
          )}

          <div className="mt-4 text-center">
            <h1 className="text-[28px] md:text-[40px]" style={{ fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>
              {PAYMENT.heading}
            </h1>
            <p className="mx-auto mt-3 max-w-xl" style={{ fontSize: 16, color: 'var(--color-text-secondary)' }}>
              {PAYMENT.subheading}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-[1fr_360px]">
            {/* Left: plan selection + card details */}
            <div className="flex flex-col gap-6">
              {/* Plan selection */}
              <section>
                <h2 className="mb-3" style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {PAYMENT.planLabel}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {PLANS.map((plan) => {
                    const active = plan.id === planId;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setPlanId(plan.id)}
                        className="relative text-left"
                        style={{
                          background: 'var(--color-bg-white-bg)',
                          border: `2px solid ${active ? 'var(--color-primary)' : 'var(--color-primary-opacity-12)'}`,
                          borderRadius: 'var(--radius-5)',
                          padding: 18,
                          cursor: 'pointer',
                          boxShadow: active ? '0 8px 24px -12px var(--color-primary-opacity-40)' : 'none',
                          transition: 'border-color 150ms ease, box-shadow 150ms ease',
                        }}
                        aria-pressed={active}
                      >
                        {'badge' in plan && plan.badge && (
                          <span className="absolute right-3 top-3">
                            <Badge type="badge" style="filled-tonal" color="primary" size="dense">
                              {plan.badge}
                            </Badge>
                          </span>
                        )}
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>{plan.name}</div>
                        <div className="mt-1 flex items-baseline gap-1">
                          <span style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-text-primary)' }}>{plan.price}</span>
                          <span style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>{plan.period}</span>
                        </div>
                        <div className="mt-1" style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{plan.note}</div>
                        <ul className="mt-3 flex flex-col gap-1.5">
                          {plan.perks.map((perk) => (
                            <Perk key={perk}>{perk}</Perk>
                          ))}
                        </ul>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Card details */}
              <section
                style={{
                  background: 'var(--color-bg-white-bg)',
                  border: '1px solid var(--color-primary-opacity-12)',
                  borderRadius: 'var(--radius-6)',
                  padding: 20,
                }}
              >
                <h2 className="mb-4" style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {PAYMENT.cardTitle}
                </h2>
                <div className="flex flex-col gap-3">
                  <Input
                    size="lg"
                    bg="default"
                    label={PAYMENT.cardNumberLabel}
                    placeholder={PAYMENT.cardNumberPlaceholder}
                    inputMode="numeric"
                    rightIcon={<LockIcon width={18} height={18} />}
                    value={card.number}
                    onChange={setField('number')}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      size="lg"
                      bg="default"
                      label={PAYMENT.expiryLabel}
                      placeholder={PAYMENT.expiryPlaceholder}
                      inputMode="numeric"
                      value={card.expiry}
                      onChange={setField('expiry')}
                    />
                    <Input
                      size="lg"
                      bg="default"
                      label={PAYMENT.cvcLabel}
                      placeholder={PAYMENT.cvcPlaceholder}
                      inputMode="numeric"
                      value={card.cvc}
                      onChange={setField('cvc')}
                    />
                  </div>
                  <Input
                    size="lg"
                    bg="default"
                    label={PAYMENT.nameLabel}
                    placeholder={PAYMENT.namePlaceholder}
                    value={card.name}
                    onChange={setField('name')}
                  />
                </div>
              </section>
            </div>

            {/* Right: order summary */}
            <aside>
              <div
                className="md:sticky md:top-24"
                style={{
                  background: 'var(--color-bg-white-bg)',
                  border: '1px solid var(--color-primary-opacity-12)',
                  borderRadius: 'var(--radius-6)',
                  padding: 20,
                }}
              >
                <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>{PAYMENT.summaryTitle}</h2>
                <div
                  className="mt-4 flex items-center justify-between"
                  style={{ paddingBottom: 14, borderBottom: '1px solid var(--color-primary-opacity-8)' }}
                >
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>{selected.name} plan</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{selected.note}</div>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {selected.price}
                    <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-text-secondary)' }}>{selected.period}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>{PAYMENT.billedToday}</span>
                  <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text-primary)' }}>{selected.price}</span>
                </div>

                <div className="mt-5">
                  <Button variant="filled" color="primary" size="lg" onClick={onPay} style={{ width: '100%' }}>
                    {PAYMENT.payCta}
                  </Button>
                </div>

                <p className="mt-3 flex items-center justify-center gap-1.5" style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
                  <LockIcon width={14} height={14} />
                  {PAYMENT.secureNote}
                </p>
                <p className="mt-2 text-center" style={{ fontSize: 12, color: 'var(--color-success-main)', fontWeight: 600 }}>
                  {PAYMENT.guaranteeNote}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentScreen;

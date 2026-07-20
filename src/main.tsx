import { Component, StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { App } from './App';

// Catch any render error so the page never goes fully blank; shows the stack
// instead, which is far easier to debug than a white screen.
class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, fontFamily: 'var(--font-primary)', color: 'var(--color-text-primary)' }}>
          <h1 style={{ fontSize: 22, fontWeight: 800 }}>Something failed to render</h1>
          <pre style={{ whiteSpace: 'pre-wrap', color: 'var(--color-error-main)', marginTop: 12 }}>
            {String(this.state.error?.stack || this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

import { ThemeProvider } from '@akad/design-system/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Router
import Router from './router/Router';

// Styles
import '@akad/design-system/css/default-theme.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider library="default" theme="light">
      <Router />
    </ThemeProvider>
  </StrictMode>,
)

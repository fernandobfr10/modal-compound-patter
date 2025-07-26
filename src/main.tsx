import { ThemeProvider } from '@akad/design-system/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import '@akad/design-system/css/default-theme.css';
import './index.css';
import { Playground } from './Playground.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider library="default" theme="light">
        <Playground />
    </ThemeProvider>
  </StrictMode>,
)

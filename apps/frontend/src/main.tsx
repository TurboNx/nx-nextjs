import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { createMockServer } from './helpers';

import App from './app/app';
import { store } from '@nx-nextjs/shared/store';

createMockServer();

initializeIcons(
  'https://static2.sharepointonline.com/files/fabric/assets/icons/'
);

const Providers: React.FC = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  );
};

ReactDOM.render(
  <StrictMode>
    <Providers></Providers>
  </StrictMode>,
  document.getElementById('root')
);

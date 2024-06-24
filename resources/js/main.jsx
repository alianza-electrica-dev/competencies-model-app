import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CompetenciesApp } from './CompetenciesApp';

//* UI
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-amber/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../css/app.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <PrimeReactProvider>
          <CompetenciesApp />
          <ReactQueryDevtools initialIsOpen={false} />
        </PrimeReactProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>,
);

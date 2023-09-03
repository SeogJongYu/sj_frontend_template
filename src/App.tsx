import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {ReactNode} from 'react';

import apiQuery from './api/apiQuery';
import './App.scss';
import HomeRoutes from './routes/HomeRoutes';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home/*" element={<HomeRoutes />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: apiQuery,
    },
  },
});

function Providers({children}: {children: ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default App;

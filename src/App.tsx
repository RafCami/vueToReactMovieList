import { Suspense } from 'react';
import "./App.css";
import Header from "./components/Header";
import MovieList from './components/MovieList';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          suspense: true,
          useErrorBoundary: false,
          refetchOnWindowFocus: import.meta.env.PROD,
      },
  },
})

function App() {
  return (
    <>
      <Header />
      <main>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div className="row">
        <div className="col">Loading...</div>
      </div>}>
            <MovieList />
          </Suspense>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default App;

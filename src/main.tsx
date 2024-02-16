import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';
import './index.css';
import { AntThemeProvider } from './layouts/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AntThemeProvider>
    <RouterProvider router={router} />
  </AntThemeProvider>
);

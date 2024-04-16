import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';
import { Provider } from 'react-redux';
import { AntThemeProvider } from './layouts/index.ts';
import { store } from './API/store.ts';
import './index.css';
import { WindowResizeProvider } from './contexts/WindowResizeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <WindowResizeProvider>
      <AntThemeProvider>
        <RouterProvider router={router} />
      </AntThemeProvider>
    </WindowResizeProvider>
  </Provider>
);

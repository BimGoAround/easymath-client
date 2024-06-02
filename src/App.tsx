import 'katex/dist/katex.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PATHS } from './configs';
import { DevContainer, FAQPage, Home } from './containers';

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Home />,
  },
  {
    path: PATHS.dev,
    element: <DevContainer />,
  },
  {
    path: PATHS.faq,
    element: <FAQPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

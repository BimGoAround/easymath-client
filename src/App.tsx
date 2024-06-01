import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PATHS } from './configs';
import { DevContainer, Home } from './containers';

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Home />,
  },
  {
    path: PATHS.dev,
    element: <DevContainer />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

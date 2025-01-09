import { createBrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import MainPage from '../pages/MainPage/MainPage';
import GradPage from 'pages/DetailPage/GradPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ScrollToTop />,
    children: [
      { path: '', element: <MainPage /> },
      { path: 'grad', element: <GradPage /> },
    ],
  },
]);

export default router;

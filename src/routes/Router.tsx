import { createBrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import MainPage from 'pages/MainPage/MainPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import ProjectPage from 'pages/ProjectPage/ProjectPage';
import EpiloguePage from 'pages/EpiloguePage/EpiloguePage';
import CreditsPage from 'pages/CreditsPage/CreditsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ScrollToTop />,
    children: [
      { path: '', element: <MainPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'graduation', element: <ProjectPage /> },
      { path: 'epilogue', element: <EpiloguePage /> },
      { path: 'credits', element: <CreditsPage /> },
    ],
  },
]);

export default router;

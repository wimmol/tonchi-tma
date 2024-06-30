import { createBrowserRouter } from 'react-router-dom';
import routes from '@core/navigation/routes.ts';
import OnboardingPage from '@core/pages/OnboardingPage.tsx';
import { RouterProvider } from 'react-router';
import HeaderTemplate from '@core/components/templates/HeaderTemplate.tsx';
import RootPage from '@core/pages/RootPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: routes.onboarding,
    element: <OnboardingPage />,
  },
  {
    path: routes.home,
    element: <HeaderTemplate />,
  },
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;

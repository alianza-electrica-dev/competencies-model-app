import { Route, Routes } from 'react-router-dom';
import { PrivateRouter, PublicRouter } from './';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { AdminRoutes } from '../admin/routes/AdminRoutes';
import { HomePage } from '../client/pages/HomePage';
import { AuthChecker } from '../auth/components';
import { useAuthUserStore } from '../store/authUser';

export const AppRouter = () => {
  const user = useAuthUserStore(state => state.user);

  return (
    <>
      <AuthChecker />
      <Routes>
        <Route
          path='*'
          element={
            <PublicRouter>
              <AuthRoutes />
            </PublicRouter>
          }
        />

        {user !== null && user.role_id === 1 ? (
          <Route
            path='/admin/*'
            element={
              <PrivateRouter>
                <AdminRoutes />
              </PrivateRouter>
            }
          />
        ) : (
          <Route
            path='/client/*'
            element={
              <PrivateRouter>
                <HomePage />
              </PrivateRouter>
            }
          />
        )}
      </Routes>
    </>
  );
};

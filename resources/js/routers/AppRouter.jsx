import { Route, Routes } from 'react-router-dom';
import { PrivateRouter, PublicRouter } from './';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { AdminRoutes } from '../admin/routes/AdminRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='*'
          element={
            <PublicRouter>
              <AuthRoutes />
            </PublicRouter>
          }
        />

        <Route
          path='/admin/*'
          element={
            <PrivateRouter>
              <AdminRoutes />
            </PrivateRouter>
          }
        />

        <Route
          path='/client/*'
          element={
            <PrivateRouter>
              <h1>Rutas privadas</h1>
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};

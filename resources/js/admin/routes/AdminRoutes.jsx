import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../../routers';
import { PrivateLayout } from '../../layouts';
import {
  EmployeesCompetenciesPage,
  EmployeesPage,
  ManagersPage,
  RiosPage,
} from '../pages';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route
          path='/managers'
          element={
            <ProtectedRoute requiredRole={1}>
              <ManagersPage />
            </ProtectedRoute>
          }
        />

        <Route path='/employees' element={<EmployeesPage />} />

        <Route
          path='/employees-competencies/:id'
          element={<EmployeesCompetenciesPage />}
        />

        <Route path='/rios' element={<RiosPage />} />

        <Route path='/*' element={<Navigate to='/admin/managers' />} />
      </Route>
    </Routes>
  );
};

import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateLayout } from '../../layouts';
import {
  EmployeesEvaluationsPage,
  EmployeesPage,
  ManagersPage,
} from '../pages';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path='/managers' element={<ManagersPage />} />
        <Route path='/employees' element={<EmployeesPage />} />
        <Route
          path='/employees-evaluations/:id'
          element={<EmployeesEvaluationsPage />}
        />
        <Route path='/*' element={<Navigate to='/admin/managers' />} />
      </Route>
    </Routes>
  );
};

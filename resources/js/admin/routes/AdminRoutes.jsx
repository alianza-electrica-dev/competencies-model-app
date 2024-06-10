import { Route, Routes } from 'react-router-dom';
import { PrivateLayout } from '../../layouts';
import { EmployeesPage, EvaluationsPage, ManagersPage } from '../pages';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path='/managers' element={<ManagersPage />} />
        <Route path='/employees' element={<EmployeesPage />} />
        <Route path='/evaluations' element={<EvaluationsPage />} />
      </Route>
    </Routes>
  );
};

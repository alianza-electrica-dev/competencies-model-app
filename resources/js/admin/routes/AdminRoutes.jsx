import { Route, Routes } from 'react-router-dom';
import { EmployeesPage, EvaluationsPage, ManagersPage } from '../pages';

export const AdminRoutes = () => {
  return (
    <>
      <div>
        <p>Aqui va mi sidebar</p>
      </div>

      <div>
        <div>
          <p>Aqui va mi header</p>
        </div>
      </div>

      <Routes>
        <Route path='/managers' element={<ManagersPage />} />
        <Route path='/employees' element={<EmployeesPage />} />
        <Route path='/evaluations' element={<EvaluationsPage />} />
      </Routes>
    </>
  );
};

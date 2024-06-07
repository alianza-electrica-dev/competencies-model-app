import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  EmployeEvaluationsPage,
  EmployeesPage,
  ManagersPage,
  TestsPage,
} from '../pages';

import { Sidebar } from '../components/ui';
import { TestPage } from '../client/pages/tests/TestPage';

export const AppRouter = () => {
  return (
    <div className='h-screen flex' style={{ background: '#FAFAFA' }}>
      <BrowserRouter>
        <div className='w-2'>
          <Sidebar />
        </div>
        <div className='flex-1 px-5 mt-2'>
          <Routes>
            <Route path='/' element={<Navigate to='/managers' />} />
            <Route path='/managers' element={<ManagersPage />} />
            <Route path='/employees' element={<EmployeesPage />} />
            <Route
              path='/employee/test/:id'
              element={<EmployeEvaluationsPage />}
            />
            <Route path='/tests' element={<TestsPage />} />
            <Route path='/employe-tests' element={<TestPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

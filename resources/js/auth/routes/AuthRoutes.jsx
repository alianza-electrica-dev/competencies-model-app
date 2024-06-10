import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicLayout } from '../../layouts/';
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/*' element={<Navigate to='/login' />} />
      </Route>
    </Routes>
  );
};

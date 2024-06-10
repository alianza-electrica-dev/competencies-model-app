import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
  return (
    <div className='h-screen flex justify-content-center align-items-center bg-white-alpha-90'>
      <Outlet />
    </div>
  );
};

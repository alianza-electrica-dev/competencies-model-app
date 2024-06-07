import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';

export const Sidebar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Gerentes',
      icon: 'pi pi-user',
      command: () => {
        navigate('/managers');
      },
    },
    {
      label: 'Empleados',
      icon: 'pi pi-users',
      command: () => {
        navigate('/employees');
      },
    },
    // {
    //   label: 'Evaluaciones',
    //   icon: 'pi pi-clipboard',
    //   command: () => {
    //     navigate('/tests');
    //   },
    // },
    {
      label: 'Evaluaciones por empleado',
      icon: 'pi pi-clipboard',
      command: () => {
        navigate('/employe-tests');
      },
    },
  ];

  return <Menu model={items} className='w-full h-full' />;
};

import { Menu } from 'primereact/menu';
export const Sidebar = () => {
  const items = [
    { label: 'Administradores', icon: 'pi pi-plus' },
    { label: 'Empleados', icon: 'pi pi-plus' },
  ];

  return (
    <div className='h-full'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMqyAyGCL_vQ2z5PK6aZFazqhpGYbbmiYRgX8RCFwbtk1uPSBM4OedwPmtWHKaOcHkpc&usqp=CAU' 
        height='100px'
        width='100%'
      />

      <Menu model={items} className='w-full border-transparent'/>
    
    </div>
  );
};

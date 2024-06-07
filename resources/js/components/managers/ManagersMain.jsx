import { useAppQuery } from '../../hooks/useAppQuery';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Loading } from '../ui';

export const ManagersMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'managers',
    'users.managers',
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const columns = [
    { field: 'full_name', header: 'Nombre' },
    { field: 'email', header: 'Correo electronico' },
    { field: 'area.name', header: 'Departamento' },
  ];

  return (
    <>
      <div className='card'>
        <Card title='Gerentes y Administradores'>
          <DataTable value={data.managers} tableStyle={{ minWidth: '50rem' }}>
            {columns.map(({ field, header }) => (
              <Column key={field} field={field} header={header} />
            ))}
          </DataTable>
        </Card>
      </div>
    </>
  );
};

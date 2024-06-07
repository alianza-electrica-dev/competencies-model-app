import { useAppQuery } from '../../hooks/useAppQuery';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Loading } from '../ui';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const EmployeesMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'employees',
    'users.employees',
  );

  const navigate = useNavigate();

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

  const actionBodyTemplate = rowData => {
    return (
      <Button
        icon='pi pi-check'
        rounded
        text
        aria-label='Filter'
        onClick={() => navigate(`/employee/test/${rowData.id}`)}
      />
    );
  };

  return (
    <>
      <div className='card'>
        <Card title='Empleados'>
          <DataTable value={data.employees} tableStyle={{ minWidth: '50rem' }}>
            {columns.map(({ field, header }) => (
              <Column key={field} field={field} header={header} />
            ))}
            <Column header='' body={actionBodyTemplate} />
          </DataTable>
        </Card>
      </div>
    </>
  );
};

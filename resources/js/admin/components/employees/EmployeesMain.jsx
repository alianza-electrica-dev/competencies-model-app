import { useAppQuery } from '../../../hooks';
import { AdminTable, LinkButton, ToggleButton } from '../table';
import { Error, Loading } from '../../../common';
import { AssignEvaluationForm, ShowEmployee } from './';
import { employeesColumns, employeesFilters } from '../../helpers';
import { Column } from 'primereact/column';

export const EmployeesMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'Employees',
    'admin.employees.index_content',
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error errorMessage={error.message} />;
  }

  const tableHeader = (
    <div className='flex justify-content-between align-items-center px-4 pt-4'>
      <span className='text-3xl text-900 font-bold text-secondary'>
        Colaboradores
      </span>
    </div>
  );

  return (
    <AdminTable
      tableData={data.employees}
      tableHeader={tableHeader}
      tableColumns={employeesColumns}
      filters={employeesFilters}
    >
      <Column
        header=''
        body={rowData => (
          <LinkButton
            icon='pi pi-file'
            tooltipText='Evaluaciones'
            linkTo={`/admin/employees-competencies/${rowData.id}`}
          />
        )}
      />

      <Column
        header=''
        body={rowData => (
          <AssignEvaluationForm
            userId={rowData.id}
            areaId={rowData.area_id}
            competencies={data.competencies}
          />
        )}
      />

      <Column
        header=''
        body={rowData => (
          <ShowEmployee rowData={rowData} tooltipText={'Más Información'} />
        )}
      />

      <Column
        header=''
        body={rowData => (
          <ToggleButton
            id={rowData.id}
            status={rowData.active}
            queryToInvalidate='Employees'
          />
        )}
      />
    </AdminTable>
  );
};

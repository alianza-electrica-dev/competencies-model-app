import { useAppQuery } from '../../../hooks';
import { AdminTable, LinkButton, ToggleButton, TableHeader } from '../table';
import { Error, Loading } from '../../../common';
import { AssignEvaluationForm, ShowEmployee } from './';
import { employeesColumns, employeesFilters } from '../../helpers';
import { Column } from 'primereact/column';
import { EmplooyessForm } from './EmplooyessForm'; // Corrected import path
import { useAuthUserStore } from '../../../store/authUser';

export const EmployeesMain = () => {
  const {user} = useAuthUserStore();
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

  return (
    <AdminTable
      tableData={data.employees}
      tableHeader={
        <TableHeader tableTitle='Colaboradoress'>
          <EmplooyessForm
            areas={data.areas}
            branches={data.branches}
            companies={data.companies}
            managers={data.employees}
            roles={data.roles}
          />
        </TableHeader>
      }
      tableColumns={employeesColumns}
      filters={employeesFilters}
    >
      {user.role_id === 1?<Column
        header=''
        body={rowData => (
          <EmplooyessForm
            isUpdate={true}
            rowData={rowData}
            areas={data.areas}
            branches={data.branches}
            companies={data.companies}
            managers={data.managers}
            roles={data.roles}
          />
        )}
      />: null}
      <Column
        header=''
        body={rowData => (
          <LinkButton
            icon='pi pi-file-excel'
            tooltipText='Ver RIO'
            linkTo={`/admin/employees-rio/${rowData.id}`} // ${rowData.id}
          />
        )}
      />
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

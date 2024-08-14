import { useAppQuery } from '../../../hooks';
import { AdminTable, TableHeader, ToggleButton } from '../table';
import { Error, Loading } from '../../../common';
import { ManagersForm } from './';
import { managersColumns, managersFilters } from '../../helpers';
import { Column } from 'primereact/column';

export const ManagersMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'managers',
    'admin.managers.get.managers',
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error errorMessage={error.message} />;
  }

  return (
    <AdminTable
      tableData={data.managers}
      tableHeader={
        <TableHeader tableTitle='Gerentes y Administradores'>
          <ManagersForm
            areas={data.areas}
            branches={data.branches}
            companies={data.companies}
            managers={data.managers}
            roles={data.roles}
          />
        </TableHeader>
      }
      tableColumns={managersColumns}
      filters={managersFilters}
    >
      <Column
        header=''
        body={rowData => (
          <ManagersForm
            isUpdate={true}
            rowData={rowData}
            areas={data.areas}
            branches={data.branches}
            companies={data.companies}
            managers={data.managers}
            roles={data.roles}
          />
        )}
      />

      <Column
        header=''
        body={rowData => (
          <ToggleButton
            id={rowData.id}
            status={rowData.active}
            queryToInvalidate='managers'
          />
        )}
      />
    </AdminTable>
  );
};

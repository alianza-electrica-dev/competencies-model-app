import { useAppQuery } from '../../../hooks';
import { AdminTable, ToggleButton } from '../table';
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

  const tableHeader = (
    <div className='flex justify-content-between align-items-center px-4 pt-4'>
      <span className='text-3xl text-900 font-bold text-secondary'>
        Lideres
      </span>
      <ManagersForm areas={data.areas} companies={data.companies} />
    </div>
  );

  return (
    <AdminTable
      tableData={data.managers}
      tableHeader={tableHeader}
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
            companies={data.companies}
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

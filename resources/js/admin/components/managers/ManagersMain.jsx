import { useAppQuery } from '../../../hooks';
import { AdminTable, ToggleButton } from '../table';
import { Error, Loading } from '../../../common';
import { ManagersForm } from './ManagersForm';
import { managersFilters } from '../../helpers/filters';
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
      <span className='text-3xl text-900 font-bold text-secondary'>Liderez</span>
      <ManagersForm areas={data.areas} />
    </div>
  );

  return (
    <AdminTable
      tableData={data.managers}
      tableHeader={tableHeader}
      filters={managersFilters}
    >
      <Column
        header=''
        body={rowData => (
          <ManagersForm isUpdate={true} rowData={rowData} areas={data.areas} />
        )}
      />

      <Column
        header=''
        body={rowData => (
          <ToggleButton id={rowData.id} status={rowData.active} />
        )}
      />
    </AdminTable>
  );
};

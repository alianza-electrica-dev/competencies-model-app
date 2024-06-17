import { useAppQuery } from '../../../hooks';
import { AdminTable } from '../table';
import { Loading } from '../../../common/ui/Loading';
import { ManagersForm } from './ManagersForm';
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
    return <span>Error: {error.message}</span>;
  }

  const tableHeader = (
    <div className='flex justify-content-between align-items-center px-4 pt-2'>
      <span className='text-xl text-900 font-bold'>Liderez</span>
      <ManagersForm />
    </div>
  );

  return (
    <AdminTable tableData={data.managers} tableHeader={tableHeader}>
      <Column
        header=''
        body={rowData => <ManagersForm isUpdate={true} rowData={rowData} />}
      />
    </AdminTable>
  );
};

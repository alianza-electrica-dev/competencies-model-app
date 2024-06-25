import { useParams, useNavigate } from 'react-router-dom';
import { useAppQuery } from '../../../../hooks';
import { Error, Loading } from '../../../../common';
import { AdminTable } from '../../table';
import { EmployeesCompetenciesForm } from './';
import {
  employeesCompetenciesColumns,
  employeesCompetenciesFilters,
} from '../../../helpers';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export const EmployeesCompetenciesMain = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isPending, isError, data, error } = useAppQuery(
    'EmployeesEvaluations',
    'admin.employees.user.test',
    { id },
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error errorMessage={error.message} />;
  }

  const onNavigateBack = () => {
    navigate(-1, { replace: true });
  };

  const tableHeader = (
    <div className='flex justify-content-between align-items-center px-4 pt-4'>
      <span className='text-3xl text-900 font-bold text-secondary'>
        Competencias
      </span>
      <Button
        onClick={onNavigateBack}
        className='text-secondary hover:bg-blue-50'
        icon='pi pi-arrow-left'
        rounded
        text
        tooltip='Regresar'
        tooltipOptions={{ position: 'top' }}
        type='button'
      />
    </div>
  );

  return (
    <AdminTable
      tableData={data.tests}
      tableHeader={tableHeader}
      tableColumns={employeesCompetenciesColumns}
      filters={employeesCompetenciesFilters}
    >
      <Column
        header=''
        body={rowData => (
          <EmployeesCompetenciesForm
            questions={rowData.questions}
            test={rowData}
          />
        )}
      />
    </AdminTable>
  );
};

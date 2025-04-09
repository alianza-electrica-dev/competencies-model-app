import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminTable } from '../../table';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { RiosCompetenciesForm } from './';
import {
  riosCompetenciesColumns,
  riosCompetenciesFilters,
} from '../../../helpers';
import { useAppQuery } from '../../../../hooks';
import { Error, Loading } from '../../../../common';

export const RiosCompetenciesMain = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isPending, isError, data, error } = useAppQuery(
    'RiosEvaluations',
    'admin.rios.rio.test',
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
        Competencias RIO
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
      tableData={data.test}
      tableHeader={tableHeader}
      tableColumns={riosCompetenciesColumns}
      filters={riosCompetenciesFilters}
    >
      <Column
        header=''
        body={rowData => (
          <RiosCompetenciesForm questions={rowData.questions} test={rowData} />
        )}
      />
    </AdminTable>
  );
};

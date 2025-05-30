import { useParams, useNavigate } from 'react-router-dom';
import { useAppQuery } from '../../../../hooks';
import { Error, Loading } from '../../../../common';
import { Riotable } from '../../table/Riotable';
import { employeesRioColumns, employeesRioEditColumns } from '../../../helpers';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';

export const EmployeesRioMain = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isPending, isError, data, error } = useAppQuery(
    'EmployeesEvaluations',
    'admin.rios.employee_rios',
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
        RIO - {data.rios[0]?data.rios[0].user.name+" "+ data?.rios[0].user.last_name+" "+ data?.rios[0].user.second_last_name:"No hay RIO para este usuario"} 
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

  // Transformar los datos para la tabla
  const tableData =
    data?.rios?.flatMap(rio =>
      rio.data_rios.map(dataRio => ({
        id: dataRio.id,
        responsibility: dataRio.responsibility,
        indicator: dataRio.indicator,
        weighing: dataRio.weighing,
        real: dataRio.real,
        compliance: dataRio.compliance,
        observations: dataRio.observations,
        period: rio.period?.name || 'Sin Datos',
      })),
    ) || [];

  return (
    <>
      <Riotable
        tableData={tableData}
        tableHeader={tableHeader}
        tableColumns={employeesRioColumns}
        tableEditColumns={employeesRioEditColumns}
        filters={{}}
      >
        <Column header='' />
      </Riotable>
    </>
  );
};

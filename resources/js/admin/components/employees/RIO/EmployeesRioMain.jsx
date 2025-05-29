import {  useParams, useNavigate } from 'react-router-dom'; import { useAppQuery } from '../../../../hooks';
import { Error, Loading } from '../../../../common';  
import { Riotable } from '../../table/Riotable';
import {
  employeesRioColumns,
} from '../../../helpers';
import { Button } from 'primereact/button';

/* import { DataRio } from '../../table/help/DataRio' */


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
        RIO - Nombre Apellido 
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
      <Riotable
      tableData={data}
      tableHeader={tableHeader}
      tableColumns={employeesRioColumns}
      >
    </Riotable>
  );
};

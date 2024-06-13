import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useAppMutation } from '../../../hooks';

export const EmployeesAssignation = ({ rowData }) => {
  const [visible, setVisible] = useState(false);
  const { mutate, isPending, isError } = useAppMutation(
    'admin.employees.add.evaluation',
  );

  const handelSubmit = () => {
    mutate({ params: { id: rowData.id } });
    setVisible(false);
  };

  return (
    <div className='card flex justify-content-center'>
      <Button
        icon='pi pi-file-plus'
        rounded
        text
        tooltip='Asiganr Evaluacion'
        tooltipOptions={{ position: 'top' }}
        type='button'
        onClick={() => setVisible(true)}
      />
      <Dialog
        header='Asignar Competencia'
        visible={visible}
        style={{ width: '30vw' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div>
          <h3>
            Desea asignarle el siguiente nivel de competencias a
            <span className='ml-1 font-bold text-black-alpha-90'>
              {rowData.full_name}
            </span>
          </h3>
          <div className='flex justify-content-around mt-5'>
            <Button
              label='Aceptar'
              rounded
              className='w-10rem'
              onClick={handelSubmit}
            />
            <Button
              label='Cancelar'
              rounded
              severity='warning'
              className='w-10rem'
              onClick={() => {
                if (!visible) return;
                setVisible(false);
              }}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

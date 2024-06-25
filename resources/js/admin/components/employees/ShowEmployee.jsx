import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const ShowEmployee = ({ rowData, tooltipText }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='card flex justify-content-center'>
      <Button
        onClick={() => setVisible(true)}
        className='text-primary'
        icon='pi pi-search'
        rounded
        text
        tooltip={tooltipText}
        tooltipOptions={{ position: 'top' }}
        type='button'
      />

      <Dialog
        header='Información del colaborador'
        visible={visible}
        style={{ width: '45vw' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className='m-0 grid'>
          <div className='col-12 my-0 grid'>
            <p className='col-6 py-0 text-lg font-semibold text-primary'>Nombre:</p>
            <p className='col-6 py-0 text-lg font-semibold text-secondary'>
              {rowData.full_name}
            </p>
          </div>

          <div className='col-12 my-0 grid'>
            <p className='col-6 py-0 text-lg font-semibold text-primary'>
              Correo electronico:
            </p>
            <p className='col-6 py-0 text-lg font-semibold text-secondary'>
              {rowData.email}
            </p>
          </div>

          <div className='col-12 my-0 grid'>
            <p className='col-6 py-0 text-lg font-semibold text-primary'>Area:</p>
            <p className='col-6 py-0 text-lg font-semibold text-secondary'>
              {rowData.area.name}
            </p>
          </div>

          <div className='col-12 my-0 grid'>
            <p className='col-6 py-0 text-lg font-semibold text-primary'>
              Puntos por evaluación:
            </p>
            <p className='col-6 py-0 text-lg font-semibold text-secondary'>
              {rowData.score}
            </p>
          </div>

          <div className='col-12 my-0 grid'>
            <p className='col-6 py-0 text-lg font-semibold text-primary'>
              Promedio genereal:
            </p>
            <p className='col-6 py-0 text-lg font-semibold text-secondary'>
              {rowData.average}%
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

ShowEmployee.propTypes = {
  rowData: PropTypes.object.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

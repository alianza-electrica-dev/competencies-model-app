import React from 'react';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';

export const RiosDelete = ({ rowData, formikDelete }) => {
  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de eliminar este RIO?')) {
      const updatedRios = formikDelete.values.rios.filter(
        rio => rio !== rowData,
      );
      formikDelete.setFieldValue('rios', updatedRios);
    }
  };

  return (
    <div className='card flex justify-content-center'>
      <Button
        className='text-primary'
        icon='pi pi-trash'
        text
        rounded
        tooltip='Eliminar'
        tooltipOptions={{ position: 'top' }}
        onClick={handleDelete}
        type='button'
      />
    </div>
  );
};

RiosDelete.propTypes = {
  rowData: PropTypes.object,
  formikDelete: PropTypes.object.isRequired,
};

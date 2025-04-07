import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Form } from 'formik';
import { CustomInputText } from '../../../formik';
import PropTypes from 'prop-types';

export const RiosUpdate = ({ rowData, formikUpdate }) => {
  const [visible, setVisible] = useState(false);
  const [editedValues, setEditedValues] = useState({ ...rowData });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEditedValues(prev => ({ ...prev, [name]: value }));
  };

  const testUpdate = () => {
    const riosInfo = [...formikUpdate.values.rios];
    const index = riosInfo.findIndex(rio => rio.id === rowData.id);
    if (index !== -1) {
      riosInfo[index] = { ...editedValues };
      formikUpdate.setFieldValue('rios', riosInfo);
      setVisible(false);
    }
  };

  return (
    <div className='card flex justify-content-center'>
      <Button
        onClick={() => setVisible(true)}
        className='text-primary'
        rounded
        text
        icon='pi pi-pencil'
        tooltip='Editar'
        tooltipOptions={{ position: 'top' }}
        type='button'
      />
      <Dialog
        header={'Actualizar'}
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <Form className='formgrid grid'>
          <CustomInputText
            label='Responsabilidad'
            name='responsability'
            value={editedValues.responsability}
            onChange={handleInputChange}
          />
          <CustomInputText
            label='Indicador'
            name='indicator'
            value={editedValues.indicator}
            onChange={handleInputChange}
          />

          <CustomInputText
            label='Ponderacion %'
            col='6'
            type='number'
            name='weighing'
            value={editedValues.weighing}
            onChange={handleInputChange}
          />

          <CustomInputText
            label='Objetivo %'
            col='6'
            type='number'
            name='purpose'
            value={editedValues.purpose}
            onChange={handleInputChange}
          />
          <div className='col-12 flex justify-content-center mt-5'>
            <Button
              label='Actualizar'
              className='btn-primary'
              rounded
              onClick={testUpdate}
              type='button'
            />
          </div>
        </Form>
      </Dialog>
    </div>
  );
};

RiosUpdate.propTypes = {
  rowData: PropTypes.object,
  formikUpdate: PropTypes.object.isRequired,
};

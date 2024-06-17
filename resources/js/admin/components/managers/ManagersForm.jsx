import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { CustomInputText } from '../../../formik';

export const ManagersForm = ({ isUpdate, rowData }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {}, [visible]);

  const initialValues = {
    name: '',
    last_name: '',
    second_last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    rol_id: '',
    area_id: '',
  };

  const updateValues = {
    name: rowData?.name,
    last_name: rowData?.last_name,
    second_last_name: rowData?.second_last_name,
    email: rowData?.email,
    password: '',
    password_confirmation: '',
    rol_id: rowData?.rol_id,
    area_id: rowData?.area_id,
  };

  return (
    <div className='card flex justify-content-center'>
      {!isUpdate ? (
        <Button
          onClick={() => setVisible(true)}
          icon='pi pi-plus'
          label='Añadir Administrador'
          rounded
          type='button'
        />
      ) : (
        <Button
          onClick={() => setVisible(true)}
          icon='pi pi-pencil'
          rounded
          text
          tooltip='Editar'
          tooltipOptions={{ position: 'top' }}
          type='button'
        />
      )}

      <Dialog
        header='Agregar Administrador'
        visible={visible}
        style={{ width: '30vw' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <Formik
          initialValues={!isUpdate ? initialValues : updateValues}
          onSubmit={values => console.log(values)}
        >
          {formik => (
            <Form className='formgrid grid'>
              <CustomInputText label='Nombre' name='name' />

              <CustomInputText label='Apellido paterno' name='last_name' />

              <CustomInputText
                label='Apellido materno'
                name='second_last_name'
              />

              <CustomInputText label='Correo electronico' name='email' />

              <CustomInputText label='Contraseña' name='password' />

              <CustomInputText
                label='Confirmar contraseña'
                name='password_confirmation'
              />

              <div className='col-12 flex justify-content-center mt-5'>
                <Button label='Agregar Administrador' rounded type='submit' />
              </div>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

ManagersForm.propTypes = {
  isUpdate: PropTypes.bool,
  rowData: PropTypes.object,
};

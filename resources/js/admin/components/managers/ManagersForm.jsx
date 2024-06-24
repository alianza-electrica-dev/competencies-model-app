import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useAppMutation } from '../../../hooks';
import { CustomInputSelect, CustomInputText } from '../../../formik';
import { adminValidations } from '../../validations/adminValidations';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const ManagersForm = ({ isUpdate, rowData, areas }) => {
  const [visible, setVisible] = useState(false);
  const { mutate, isPending } = useAppMutation(
    'admin.managers.upsert',
    'managers',
  );

  const initialValues = {
    name: '',
    last_name: '',
    second_last_name: '',
    email: '',
    password: '',
    rol_id: '',
    area_id: '',
  };

  const updateValues = {
    name: rowData?.name,
    last_name: rowData?.last_name,
    second_last_name: rowData?.second_last_name,
    email: rowData?.email,
    password: '',
    rol_id: rowData?.rol_id,
    area_id: rowData?.area_id,
  };

  const onSubmit = values => {
    mutate({
      request: values,
      params: { id: !isUpdate ? 'FAKE_ID' : rowData.id },
    });
    setVisible(false);
  };

  return (
    <div className='card flex justify-content-center'>
      {!isUpdate ? (
        <Button
          onClick={() => setVisible(true)}
          className='btn-primary'
          icon='pi pi-plus'
          label='Añadir Administrador'
          rounded
          type='button'
        />
      ) : (
        <Button
          onClick={() => setVisible(true)}
          className='text-primary'
          icon='pi pi-pencil'
          rounded
          text
          tooltip='Editar'
          tooltipOptions={{ position: 'top' }}
          type='button'
        />
      )}

      <Dialog
        header={`${!isUpdate ? 'Agregar' : 'Actualizar'} Administrador`}
        visible={visible}
        style={{ width: '30vw' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <Formik
          initialValues={!isUpdate ? initialValues : updateValues}
          onSubmit={values => onSubmit(values)}
          validationSchema={adminValidations}
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

              <CustomInputText
                label='Contraseña'
                name='password'
                type='password'
              />

              <CustomInputSelect
                label='Area'
                name='area_id'
                options={areas}
                optionLabel='name'
                optionValue='id'
              />

              <div className='col-12 flex justify-content-center mt-5'>
                <Button
                  label={`${
                    !isUpdate ? 'Agregar' : 'Actualizar'
                  } administrador`}
                  rounded
                  type='submit'
                  loading={isPending}
                  className='btn-primary'
                />
              </div>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

ManagersForm.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.object).isRequired,
  isUpdate: PropTypes.bool,
  rowData: PropTypes.object,
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useAppMutation } from '../../../hooks';
import { CustomInputSelect, CustomInputText } from '../../../formik';
import { adminValidations } from '../../validations/adminValidations';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const ManagersForm = ({
  isUpdate,
  rowData,
  areas,
  branches,
  companies,
  managers,
  roles,
}) => {
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
    role_id: '',
    area_id: '',
    company_id: '',
    branch_id: '',
    reports_to: '',
  };

  const updateValues = {
    name: rowData?.name || '',
    last_name: rowData?.last_name || '',
    second_last_name: rowData?.second_last_name || '',
    email: rowData?.email || '',
    password: '',
    role_id: rowData?.role_id || '',
    area_id: rowData?.area_id || '',
    company_id: rowData?.company_id || '',
    branch_id: rowData?.branch_id || '',
    reports_to: rowData?.reports_to || '',
  };

  const validationSchema = adminValidations(isUpdate);

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
        style={{ width: '50vw' }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <Formik
          initialValues={!isUpdate ? initialValues : updateValues}
          onSubmit={values => onSubmit(values)}
          validationSchema={validationSchema}
        >
          {formik => (
            <Form className='formgrid grid'>
              <CustomInputText label='Nombre' name='name' />

              <CustomInputText
                label='Apellido paterno'
                name='last_name'
                col='6'
              />

              <CustomInputText
                label='Apellido materno'
                name='second_last_name'
                col='6'
              />

              <CustomInputText label='Correo electronico' name='email' />

              <CustomInputText
                label='Contraseña'
                name='password'
                type='password'
                placeholder={`${
                  isUpdate
                    ? 'Si desea conservar su contraseña deje este campo vacio'
                    : ''
                }`}
              />

              <CustomInputSelect
                label='Area'
                name='area_id'
                options={areas}
                optionLabel='name'
                optionValue='id'
              />

              <CustomInputSelect
                label='Empresa'
                name='company_id'
                options={companies}
                optionLabel='name'
                optionValue='id'
                col='6'
              />

              <CustomInputSelect
                label='Sucursal'
                name='branch_id'
                options={branches}
                optionLabel='name'
                optionValue='id'
                col='6'
              />

              <CustomInputSelect
                label='Rol'
                name='role_id'
                options={roles}
                optionLabel='name'
                optionValue='id'
              />

              <CustomInputSelect
                label='A quien reporta'
                name='reports_to'
                options={managers}
                optionLabel='full_name'
                optionValue='id'
                placeholder='Si usted sera administrador deje este campo vacio'
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
  branches: PropTypes.arrayOf(PropTypes.object).isRequired,
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isUpdate: PropTypes.bool,
  managers: PropTypes.arrayOf(PropTypes.object).isRequired,
  roles: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowData: PropTypes.object,
};

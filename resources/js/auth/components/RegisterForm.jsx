import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useAuthMutation } from '../../hooks';
import { CustomInputSelect, CustomInputText } from '../../formik';
import { registerValidations } from '../validations';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { ImageForm } from './ImageForm';

export const RegisterForm = ({ areas, branches, companies, managers }) => {
  const navigate = useNavigate();
  const { mutate, isPending, isError } = useAuthMutation('auth.register');

  const initialValues = {
    name: '',
    last_name: '',
    second_last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    role_id: 4,
    area_id: '',
    company_id: '',
    branch_id: '',
    reports_to: '',
  };

  return (
    <div className='card'>
      <Card className='md:w-30rem'>
        <ImageForm />
        <Formik
          initialValues={initialValues}
          onSubmit={values => mutate(values)}
          validationSchema={registerValidations}
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
              />

              <CustomInputText
                label='Confirmar contraseña'
                name='confirm_password'
                type='password'
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
              />

              <CustomInputSelect
                label='Sucursal'
                name='branch_id'
                options={branches}
                optionLabel='name'
                optionValue='id'
              />

              <CustomInputSelect
                label='A quien reporta'
                name='reports_to'
                options={managers}
                optionLabel='full_name'
                optionValue='id'
              />

              {isError && (
                <div className='field mb-4 col-12 flex justify-content-center'>
                  <p className='font-medium text-red-500'>
                    Ocurrio un error en el proceso de registro
                  </p>
                </div>
              )}

              <div className='field mb-4 col-12 flex justify-content-around'>
                <Button
                  className='w-10rem btn-primary'
                  label='Registrate'
                  rounded
                  type='submit'
                  loading={isPending}
                />
                <Button
                  className='w-10rem btn-terceary'
                  label='Volver'
                  rounded
                  severity='warning'
                  type='button'
                  onClick={() => navigate(-1)}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

RegisterForm.propTypes = {
  areas: PropTypes.arrayOf(PropTypes.object).isRequired,
  branches: PropTypes.arrayOf(PropTypes.object).isRequired,
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  managers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

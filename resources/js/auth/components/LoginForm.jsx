import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useAuthMutation } from '../../hooks';
import { CustomInputText } from '../../formik';
import { loginValidations } from '../validations';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { ImageForm } from './';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate, isPending, isError } = useAuthMutation('auth.login');

  return (
    <div className='card'>
      <Card className='w-25rem'>
        <ImageForm />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => mutate(values)}
          validationSchema={loginValidations}
        >
          {formik => (
            <Form className='formgrid grid'>
              <CustomInputText label='Correo electronico' name='email' />
              <CustomInputText
                label='Contraseña'
                name='password'
                type='password'
              />

              {isError && (
                <div className='field mb-4 col-12 flex justify-content-center'>
                  <p className='font-medium text-red-500'>
                    El correo o la contraseña no son validas
                  </p>
                </div>
              )}

              <div className='field mb-4 col-12 flex justify-content-around'>
                <Button
                  className='w-10rem'
                  label='Iniciar Sesión'
                  type='submit'
                  rounded
                  loading={isPending}
                />

                <Button
                  className='w-10rem'
                  label='Registrate'
                  rounded
                  severity='warning'
                  type='button'
                  onClick={() => navigate('/register')}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

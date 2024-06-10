import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useAppLoginMutation } from '../../hooks';
import { CustomInputText } from '../../formik';
import { loginValidations } from '../validations';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { ImageForm } from './';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate, isPending, isError } = useAppLoginMutation('login');

  return (
    <div className='card'>
      <Card className='md:w-35rem'>
        <ImageForm />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => mutate(values)}
          validationSchema={loginValidations}
        >
          {formik => (
            <Form>
              <CustomInputText label='Correo electronico' name='email' />
              <CustomInputText
                label='Contraseña'
                name='password'
                type='password'
              />

              {isError && (
                <p className='font-medium text-red-500'>
                  El correo o la contraseña no son validas
                </p>
              )}

              <div className='flex justify-content-end align-items-center'>
                <Button
                  label='Registrate'
                  text
                  onClick={() => navigate('/register')}
                />
              </div>
              <div className='flex justify-content-center mt-5'>
                <Button
                  label='Iniciar Sesión'
                  type='submit'
                  rounded
                  className='w-10'
                  loading={isPending}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

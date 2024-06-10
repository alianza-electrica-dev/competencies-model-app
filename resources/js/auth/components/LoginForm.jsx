/* eslint-disable no-undef */
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Formik, Form } from 'formik';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { CustomInputText } from '../../formik';
import { useAuthUserStore } from '../../store/authUser';
import { ImageForm } from './';

export const LoginForm = () => {
  const navigate = useNavigate();

  // TODO: Create a custom hook for mutations
  // TODO: Create validation shcema
  // TODO: Show error message

  const mutation = useMutation({
    mutationFn: values => {
      return axios.post(route('login'), values);
    },
    onSuccess: data => {
      const { data: response } = data;
      if (response.success) {
        const login = useAuthUserStore.getState().setAuthUser;
        login(response.user);
      }
    },
  });

  return (
    <div className='card'>
      <Card className='md:w-35rem'>
        <ImageForm />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => mutation.mutate(values)}
        >
          {formik => (
            <Form>
              <CustomInputText label='Correo electronico' name='email' />
              <CustomInputText
                label='Contraseña'
                name='password'
                type='password'
              />

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
                  loading={mutation.isPending}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

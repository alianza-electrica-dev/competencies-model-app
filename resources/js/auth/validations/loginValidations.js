import * as Yup from 'yup';

export const loginValidations = Yup.object({
  email: Yup.string()
    .email('El correo no tiene un formato valido')
    .required('Favor de ingresar su correo electronico'),

  password: Yup.string()
    .required('Favor de ingresar su contraseña')
});

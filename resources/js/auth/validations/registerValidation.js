import * as Yup from 'yup';

export const registerValidations = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
  last_name: Yup.string().required('El apellido paterno es requerido'),
  second_last_name: Yup.string().required('El apellido materno es requerido'),
  email: Yup.string()
    .email('El correo no tiene un formato valido')
    .required('Favor de ingresar su correo electronico'),

  password: Yup.string().required('Favor de ingresar su contraseña'),
  confirm_password: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Las contraseñas deben coincidir',
  ),
  area_id: Yup.number().required('Favor de ingresar el área al que pertenece'),
});

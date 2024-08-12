import * as Yup from 'yup';

export const registerValidations = Yup.object({
  name: Yup.string().required('El nombre es requerido.'),
  last_name: Yup.string().required('El apellido paterno es requerido.'),
  second_last_name: Yup.string().required('El apellido materno es requerido.'),
  email: Yup.string()
    .email('El correo no tiene un formato valido')
    .required('El correo electronico es requerido.'),

  password: Yup.string().required('La contraseña es requerida.'),
  confirm_password: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Las contraseñas deben coincidir.',
  ),
  area_id: Yup.number().required('El área es requerida.'),
  company_id: Yup.number().required('La compañia es requerida.'),
  branch_id: Yup.number().required('La sucursal es requerida.'),
  reports_to: Yup.number().required('Debe indicar a quien reporta.'),
});

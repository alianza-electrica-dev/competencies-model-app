import * as Yup from 'yup';

export const adminValidations = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
  last_name: Yup.string().required('El apellido paterno es requerido'),
  second_last_name: Yup.string().required('El apellido materno es requerido'),
  email: Yup.string()
    .email('El correo no tiene un formato valido')
    .required('Favor de ingresar su correo electronico'),

  password: Yup.string().required('Favor de ingresar su contraseña'),
  area_id: Yup.number().required('Favor de ingresar el área al que pertenece'),
});

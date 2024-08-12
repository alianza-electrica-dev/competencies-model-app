import * as Yup from 'yup';

export const adminValidations = isUpdate => {
  const baseSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido.'),
    last_name: Yup.string().required('El apellido paterno es requerido.'),
    second_last_name: Yup.string().required(
      'El apellido materno es requerido.',
    ),
    email: Yup.string()
      .email('El correo no tiene un formato valido.')
      .required('El correo es requerido.'),
    role_id: Yup.number().required('El rol es requerido.'),
    area_id: Yup.number().required('El área es requerida.'),
    company_id: Yup.number().required('La compañia es requerida.'),
    branch_id: Yup.number().required('La sucursal es requerida.'),
  });

  if (isUpdate) {
    return baseSchema.shape({
      password: Yup.string().notRequired(),
    });
  } else {
    return baseSchema.shape({
      password: Yup.string().required('La contraseña es requerida.'),
    });
  }
};

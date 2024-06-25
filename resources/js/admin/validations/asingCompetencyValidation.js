import * as Yup from 'yup';

export const asingCompetencyValidations = Yup.object({
  competency_id: Yup.number().required(
    'Favor de ingresar el tipo de competencia',
  ),
  test_id: Yup.number().required('Favor de ingresar una competencia'),
});

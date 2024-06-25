import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useAppMutation, useAppQuery } from '../../../hooks';
import { CustomInputSelect } from '../../../formik/CustomInputSelect';
import { asingCompetencyValidations } from '../../validations';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const AssignEvaluationForm = ({ userId, areaId, competencies }) => {
  const [visible, setVisible] = useState(false);
  const [competencyId, setCompetencyId] = useState(null);

  const { isPending, isError, data, error } = useAppQuery(
    `testsForCompetency.${competencyId}`,
    `admin.employees.get.competencies`,
    { competencyId, areaId },
    { enabled: !!competencyId },
  );

  const { mutate, isPending: pendingMutation } = useAppMutation(
    'admin.employees.assing.evaluation',
  );

  const onCompetencyChange = (event, formik) => {
    formik.handleChange(event);
    const selectedCompetencyId = event.target.value;
    setCompetencyId(selectedCompetencyId);
  };

  const onSubmit = async values => {
    mutate({ request: values, params: userId });
    setVisible(false);
  };

  return (
    <div className='card flex justify-content-center'>
      <Button
        className='text-primary'
        icon='pi pi-file-plus'
        rounded
        text
        tooltip='Asignar Competencias'
        tooltipOptions={{ position: 'top' }}
        type='button'
        onClick={() => setVisible(true)}
      />
      <Dialog
        header='Asignar Competencia'
        visible={visible}
        style={{ width: '30vw' }}
        onHide={() => setVisible(false)}
      >
        <Formik
          initialValues={{ competency_id: '', test_id: '' }}
          onSubmit={values => onSubmit(values)}
          validationSchema={asingCompetencyValidations}
        >
          {formik => (
            <Form className='formgrid grid'>
              <CustomInputSelect
                onChange={event => onCompetencyChange(event, formik)}
                label='Tipo Competencia'
                name='competency_id'
                options={competencies}
                optionLabel='name'
                optionValue='id'
              />

              {isPending && formik.values.competency_id !== '' ? (
                <div>Cargando evaluaciones...</div>
              ) : isError && formik.values.competency_id !== '' ? (
                <div>Error cargando evaluaciones: {error.message}</div>
              ) : (
                <CustomInputSelect
                  label='Evaluación'
                  name='test_id'
                  options={data?.tests}
                  optionLabel='name'
                  optionValue='id'
                  disabled={!competencyId}
                />
              )}

              <div className='col-12 flex justify-content-center mt-5'>
                <Button
                  className='btn-primary'
                  label='Agregar competencias'
                  rounded
                  type='submit'
                  loading={pendingMutation}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

AssignEvaluationForm.propTypes = {
  userId: PropTypes.number.isRequired,
  areaId: PropTypes.number.isRequired,
  competencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

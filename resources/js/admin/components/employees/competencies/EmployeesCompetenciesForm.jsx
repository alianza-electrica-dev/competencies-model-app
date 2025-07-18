import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAppMutation } from '../../../../hooks';
import { CustomRadioButton } from '../../../../formik';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const EmployeesCompetenciesForm = ({ questions, test }) => {
  const [visible, setVisible] = useState(false);
  const { mutate, isLoading, isSuccess, isError, error } = useAppMutation(
    'admin.employees.close.evaluation',
    'EmployeesEvaluations',
  );

  const initialValues = Object.fromEntries(
    questions.map(q => {
      const questionObj = test.questions.find(tq => tq.id === q.id);
      const userResponse = questionObj?.users?.find(
        u => u.pivot && u.pivot.test_user_id === test.pivot.id,
      );
      const response = userResponse?.pivot?.response_value;
      return [`question_${q.id}`, response !== undefined ? `${response}` : ''];
    }),
  );

  const validationSchema = Yup.object(
    Object.fromEntries(
      questions.map(q => [
        `question_${q.id}`,
        Yup.string().required('Este campo es requerido'),
      ]),
    ),
  );

  if (isSuccess && visible) {
    setVisible(false);
  }

  const onSubmit = values => {
    const responses = Object.entries(values).map(([key, value]) => ({
      question_id: parseInt(key.split('_')[1]),
      response_value: parseInt(value),
    }));
    mutate({
      request: { responses, test_user_id: test.pivot.id },
      params: { userId: test.pivot.user_id, testId: test.id },
      customUrl: `/admin/employees/employee/evaluation/close/${test.pivot.user_id}/${test.id}`,
    });
  };

  return (
    <div className='card flex justify-content-center'>
      <Button
        className='text-primary'
        onClick={() => setVisible(true)}
        disabled={test.pivot.status_id !== 2}
        icon='pi pi-list-check'
        rounded
        text
        tooltip='Revisar Evaluacion'
        tooltipOptions={{ position: 'top' }}
        type='button'
      />
      <Dialog
        onHide={() => setVisible(false)}
        header={test.description}
        maximizable
        style={{ width: '60vw' }}
        visible={visible}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ values, handleChange }) => (
            <Form>
              {questions.map(question => (
                <CustomRadioButton
                  key={question.id}
                  label={question.question_text}
                  name={`question_${question.id}`}
                  value={values[`question_${question.id}`]}
                  onChange={handleChange}
                  options={[
                    { value: '1', label: 'Por debajo de la expectativa' },
                    { value: '2', label: 'Cumple con la expectativa' },
                    { value: '3', label: 'Excede la expectativa' },
                  ]}
                />
              ))}
              {isError && (
                <div style={{ color: 'red', marginBottom: '1rem' }}>
                  {error?.response?.data?.textAlert ||
                    'Error al enviar la evaluación.'}
                </div>
              )}
              <Button
                icon='pi pi-send'
                label={isLoading ? 'Enviando...' : 'Enviar'}
                severity='warning'
                type='submit'
                disabled={isLoading}
              />
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

EmployeesCompetenciesForm.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  test: PropTypes.object.isRequired,
};

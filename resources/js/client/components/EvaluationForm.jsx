import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAppMutation } from '../../hooks';
import { CustomRadioButton } from '../../formik';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const EvaluationForm = ({ questions, test }) => {
  const [visible, setVisible] = useState(false);

  const { mutate, isPending } = useAppMutation(
    'client.evaluations.answer_test',
    'evaluations',
  );

  const initialValues = questions.reduce((values, question) => {
    values[`question_${question.id}`] = '';
    return values;
  }, {});

  const validationSchema = Yup.object(
    questions.reduce((schema, question) => {
      schema[`question_${question.id}`] = Yup.string().required(
        'Este campo es requerido',
      );
      return schema;
    }, {}),
  );

  const onSubmit = async values => {
    const responses = Object.keys(values).map(key => {
      const questionId = key.split('_')[1];
      return {
        question_id: questionId,
        response_value: values[key],
      };
    });

    mutate({ request: { responses }, params: test.id });
    setVisible(false);
  };

  return (
    <div className='card flex justify-content-center'>
      <Button
        onClick={() => setVisible(true)}
        disabled={test.pivot.status_id !== 1}
        icon='pi pi-file-edit'
        label='responder'
        severity='warning'
        text
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
          {({ values }) => (
            <Form>
              {questions.map(question => (
                <CustomRadioButton
                  key={question.id}
                  label={question.question_text}
                  name={`question_${question.id}`}
                  options={[
                    { value: '1', label: 'Por debajo de la expectativa' },
                    { value: '2', label: 'Cumple con la expectativa' },
                    { value: '3', label: 'Excede la expectativa' },
                  ]}
                />
              ))}
              <Button
                icon='pi pi-send'
                label='Enviar'
                loading={isPending}
                severity='warning'
                type='submit'
              />
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

EvaluationForm.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  test: PropTypes.object.isRequired,
};

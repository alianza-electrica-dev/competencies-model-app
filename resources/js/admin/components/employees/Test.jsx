/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { CustomRadioButton } from '../../../formik';
import { useAppMutation } from '../../../hooks/useAppMutation';

export const Test = ({ questions, test }) => {
  const [visible, setVisible] = useState(false);
  const { mutate } = useAppMutation('admin.prueba');

  const initialValues = questions.reduce((values, question) => {
    const response = test.questions.find(q => q.id === question.id)?.users[0]
      ?.pivot?.response_value;
    values[`question_${question.id}`] =
      response !== undefined ? `${response}` : '';
    return values;
  }, {});

  const validationSchema = Yup.object().shape(
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
        question_id: parseInt(questionId),
        response_value: parseInt(values[key]),
      };
    });

    mutate({ request: { responses }, params: {userId: test.pivot.user_id , testId: test.id }});

    setVisible(false);
  };

  return (
    <div className='card flex justify-content-center'>
      <Button
        onClick={() => setVisible(true)}
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
              <Button
                icon='pi pi-send'
                label='Enviar'
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

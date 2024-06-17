import { useState } from 'react';
import { Formik, Form } from 'formik';
import { CustomInputSelect } from '../../../formik/CustomInputSelect';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const EvaluationForm = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='card flex justify-content-center'>
      <Button
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
          initialValues={{ competencyLevel: '', competencies: [] }}
          onSubmit={values => console.log(values)}
        >
          {({ values, handleChange }) => (
            <Form className='formgrid grid'>
              <CustomInputSelect
                label='Tipo Competencia'
                name='competencyLevel'
                options={!isFetching ? data.competencies : []}
                onChange={e => onSearchTests(e.target.value)}
              />

              {/* <FieldArray name='competencies'>
                {({ push, remove }) => (
                  <>
                    {values.competencies.map((competency, index) => (
                      <div
                        className='col-12 flex align-items-center'
                        key={index}
                      >
                        <CustomInputSelect
                          label='Competencia'
                          name={`competencies[${index}]`}
                          col='10'
                          onChange={handleChange}
                        />
                        <Button
                          icon='pi pi-trash'
                          rounded
                          severity='danger'
                          type='button'
                          onClick={() => remove(index)}
                        />
                      </div>
                    ))}
                    <div className='col-2 flex justify-content-center align-items-center'>
                      <Button
                        icon='pi pi-plus-circle'
                        rounded
                        severity='warning'
                        type='button'
                        onClick={() => push('')}
                      />
                    </div>
                  </>
                )}
              </FieldArray> */}

              <div className='col-12 flex justify-content-center mt-5'>
                <Button label='Agregar competencias' rounded type='submit' />
              </div>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

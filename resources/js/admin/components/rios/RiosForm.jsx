import PropTypes from 'prop-types';
import { Formik, Form, FieldArray } from 'formik';
import {
  CustomEditor,
  CustomInputSelect,
  CustomInputText,
} from '../../../formik';
import { useRioStepper } from '../../hooks/rios/useRioStepper';
import { Button } from 'primereact/button';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { useAppMutation } from '../../../hooks';
import {} from 'module';
import { RiosInfo } from './';
import styles from '../../styles/RiosMain.module.css';
import { useState } from 'react';

export const RiosForm = ({ employees, periods }) => {
  const [respo, setRespo] = useState([]);
  const initialValues = {
    user_id: '',
    period_id: '',
    responsability: '',
    indicator: '',
    weighing: '',
    objective: '',
    rios: [],
  };

  const { isPending, mutate } = useAppMutation('admin.rios.create_rio');

  const { activeStep, onNextStep, onPrevStep, setActiveStep, stepperRef } =
    useRioStepper();

  const onSaveRioData = values => {
    mutate({ request: values });
  };

  const onPushRioData = (formik, push) => {
    const newRio = {
      responsability: formik.values.responsability,
      indicator: formik.values.indicator,
      weighing: formik.values.weighing,
      objective: formik.values.objective,
    };

    push(newRio);
    setRespo([...respo, newRio]);

    formik.setFieldValue('responsability', '');
    formik.setFieldValue('indicator', '');
    formik.setFieldValue('weighing', '');
    formik.setFieldValue('objective', '');

    setActiveStep(0);
    stepperRef.current.setActiveStep(0);
  };

  const onDisableButtons = inputValue => {
    if (inputValue === null || inputValue === '') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => onSaveRioData(values)}
      >
        {formik => (
          <Form>
            <div className='grid justify-content-center gap-4'>
              <div className={`${styles.card} my-2 w-7`}>
                <div className='flex'>
                  <div className='col'>
                    <div className='flex justify-content-center'>
                      <CustomInputSelect
                        label='Periodo de evaluación'
                        name='period_id'
                        col='4'
                        options={periods}
                        optionLabel='name'
                        optionValue='id'
                      />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='flex justify-content-center'>
                      <CustomInputSelect
                        label='¿A quién se le asigna?'
                        name='user_id'
                        col='4'
                        options={employees}
                        optionLabel='full_name'
                        optionValue='id'
                      />
                    </div>
                  </div>
                </div>

                <FieldArray name='rios'>
                  {({ push }) => (
                    <Stepper
                      ref={stepperRef}
                      activeStep={activeStep}
                      className='col-12'
                    >
                      <StepperPanel header='Responsabilidad'>
                        <div className='border-dashed border-round-md mb-4 border-400'>
                          <CustomEditor
                            name='responsability'
                            onTextChange={e =>
                              formik.setFieldValue(
                                'responsability',
                                e.textValue,
                              )
                            }
                          />
                        </div>

                        <div className='flex justify-content-end'>
                          <Button
                            className='btn-primary'
                            label='Siguiente'
                            icon='pi pi-arrow-right'
                            iconPos='right'
                            onClick={onNextStep}
                            disabled={onDisableButtons(
                              formik.values.responsability,
                            )}
                          />
                        </div>
                      </StepperPanel>

                      <StepperPanel header='Indicador'>
                        <div className='border-dashed border-round-md mb-4 border-400'>
                          <CustomEditor
                            name='indicator'
                            onTextChange={e =>
                              formik.setFieldValue('indicator', e.textValue)
                            }
                          />
                        </div>

                        <div className='flex justify-content-between'>
                          <Button
                            label='Atras'
                            icon='pi pi-arrow-left'
                            iconPos='right'
                            onClick={onPrevStep}
                            className='btn-secondary'
                          />
                          <Button
                            className='btn-primary'
                            label='Siguiente'
                            icon='pi pi-arrow-right'
                            iconPos='right'
                            onClick={onNextStep}
                            disabled={onDisableButtons(
                              formik.values.indicator,
                            )}
                            
                          />
                        </div>
                      </StepperPanel>

                      <StepperPanel header='Ponderación'>
                        <div className='border-dashed border-round-md mb-4 border-400 flex justify-content-center pt-3'>
                          <CustomInputText
                            label='Añade una ponderación'
                            name='weighing'
                            col='3'
                            type='number'
                          />
                        </div>

                        <div className='flex justify-content-around'>
                          <Button
                            label='Atras'
                            icon='pi pi-arrow-left'
                            iconPos='left'
                            onClick={onPrevStep}
                            className='btn-secondary'
                          />
                          <Button
                            className='btn-primary'
                            label='Siguiente'
                            icon='pi pi-arrow-right'
                            iconPos='right'
                            onClick={onNextStep}
                            disabled={onDisableButtons(
                              formik.values.weighing,
                            )}
                            // type='button'
                          />
                        </div>
                      </StepperPanel>

                      <StepperPanel header='Objetivo'>
                        <div className='border-dashed border-round-md mb-4 border-400 flex justify-content-center pt-3'>
                          <CustomInputText
                            label='Añade un objetivo'
                            name='objective'
                            col='4'
                            type='number'
                          />
                        </div>

                        <div className='flex justify-content-around'>
                          <Button
                            label='Atras'
                            icon='pi pi-arrow-left'
                            iconPos='left'
                            onClick={onPrevStep}
                            className='btn-secondary'
                          />
                          <Button
                            className='btn-primary'
                            label='Guardar'
                            onClick={e => {
                              onPushRioData(formik, push);
                            }}
                            disabled={onDisableButtons(
                              formik.values.objective,
                            )}
                            // type='button'
                          />
                        </div>
                      </StepperPanel>
                    </Stepper>
                  )}
                </FieldArray>
              </div>
              <div className={`${styles.cardRespo} my-2 w-4`}>
                <div className='align-content-end'>
                  <RiosInfo 
                  dataRespo={respo} 
                  pending={isPending}
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

RiosForm.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object).isRequired,
  periods: PropTypes.arrayOf(PropTypes.object).isRequired,
};


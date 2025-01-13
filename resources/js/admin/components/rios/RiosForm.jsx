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
import { RiosTable } from './RiosTable';

export const RiosForm = ({ employees, periods }) => {
  const initialValues = {
    user_id: '',
    period_id: '',
    responsability: '',
    indicator: '',
    weighing: '',
    rios: [],
  };

  const { activeStep, onNextStep, onPrevStep, setActiveStep, stepperRef } =
    useRioStepper();

  const onSaveRioData = values => {
    console.log('Valores guardados:', values);
  };

  const onPushRioData = (formik, push) => {
    const newRio = {
      responsability: formik.values.responsability,
      indicator: formik.values.indicator,
      weighing: formik.values.weighing,
    };

    push(newRio);

    formik.setFieldValue('responsability', '');
    formik.setFieldValue('indicator', '');
    formik.setFieldValue('weighing', '');

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
    <Formik
      initialValues={initialValues}
      onSubmit={values => onSaveRioData(values)}
    >
      {formik => (
        <Form className='grid'>
          <CustomInputSelect
            label='Periodo de evaluación'
            name='period_id'
            col='4'
            options={periods}
            optionLabel='name'
            optionValue='id'
          />

          <CustomInputSelect
            label='¿A quién se le asigna?'
            name='user_id'
            col='4'
            options={employees}
            optionLabel='full_name'
            optionValue='id'
          />

          <div className='col-4 flex justify-content-around align-items-center'>
            <Button
              label='Generar docuento'
              className='btn-primary'
              icon='pi pi-save'
            />
            <RiosTable rios={formik.values.rios} />
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
                        formik.setFieldValue('responsability', e.textValue)
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
                      disabled={onDisableButtons(formik.values.responsability)}
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
                      label='Guardar'
                      onClick={e => onPushRioData(formik, push)}
                      type='button'
                    />
                  </div>
                </StepperPanel>
              </Stepper>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

RiosForm.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object).isRequired,
  periods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

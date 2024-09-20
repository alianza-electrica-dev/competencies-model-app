import { useRef, useState } from 'react';

export const useRioStepper = () => {
  const stepperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const onNextStep = () => {
    setActiveStep(activeStep + 1);
    stepperRef.current.nextCallback();
  };

  const onPrevStep = () => {
    setActiveStep(activeStep - 1);
    stepperRef.current.prevCallback();
  };

  const onStepDescription = () => {
    switch (activeStep) {
      case 0:
        return 'Descripción para el paso 1: Responsabilidad';
      case 1:
        return 'Descripción para el paso 2: Indicador';
      case 2:
        return 'Descripción para el paso 3: Ponderación';
      default:
        return '';
    }
  };

  return {
    activeStep,
    onNextStep,
    onPrevStep,
    onStepDescription,
    setActiveStep,
    stepperRef,
  };
};

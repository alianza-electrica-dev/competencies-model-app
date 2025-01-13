import { useRioStepper } from '../../hooks/rios/useRioStepper';

export const RiosInfo = () => {
  const { onStepDescription } = useRioStepper();

  return (
    <>
      <h1>{onStepDescription().title}</h1>
      <p>información o descripción</p>
    </>
  );
};

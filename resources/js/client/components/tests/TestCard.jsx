import { Card } from 'primereact/card';
import { TestQuestions } from './TestQuestions';

export const TestCard = ({ test }) => {
  const header = (
    <img
      alt='fg-icon'
      src='https://grupofg.alianzaelectrica.com:8086/img/GrupoFG.png'
      height='150px'
    />
  );

  const footer = <TestQuestions questions={test.questions} testName={test.name} />;

  return (
    <div className='card flex justify-content-center align-items-center'>
      <Card
        title={test.name}
        subTitle={`Competencia: ${test.competency.name}`}
        footer={footer}
        header={header}
        className='md:w-20rem'
      >
        <p className='m-0'>{test.description}</p>
      </Card>
    </div>
  );
};

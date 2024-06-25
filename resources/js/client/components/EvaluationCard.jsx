import PropTypes from 'prop-types';
import { EvaluationForm, EvaluationStatus } from './';
import { Card } from 'primereact/card';

export const EvaluationCard = ({ evaluation }) => {
  const title = () => (
    <div className='flex justify-content-between align-items-center'>
      <p className='text-2xl text-black-alpha-90 my-0'>{evaluation.name}</p>
      <p className='text-sm text-black-alpha-90 my-0'>
        <EvaluationStatus
          name={evaluation.pivot.status.name}
          statusId={evaluation.pivot.status_id}
        />
      </p>
    </div>
  );

  const subTitle = () => (
    <div>
      <p className='text-base text-black-alpha-80 my-0'>
        Competencia: {evaluation.competency.name}
      </p>
    </div>
  );

  return (
    <div className='card'>
      <Card
        className={`w-screen lg:w-27rem ${
          evaluation.pivot.status_id === 1 && 'lg:hover:shadow-8'
        } h-12rem`}
        title={title}
        subTitle={subTitle}
      >
        <div className='flex justify-content-between align-items-center'>
          <EvaluationForm questions={evaluation.questions} test={evaluation} />
        </div>
      </Card>
    </div>
  );
};

EvaluationCard.propTypes = {
  evaluation: PropTypes.object.isRequired,
};

import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { EvaluationForm } from './';

export const EvaluationCard = ({ evaluation }) => {
  const StatusTemplate = ({ name, status_id }) => {
    return <Tag value={name} rounded style={getSeverity(status_id).styles} />;
  };

  const getSeverity = status => {
    switch (status) {
      case 1:
        return {
          styles: { backgroundColor: '#DCFCE7', color: '#557040' },
        };

      case 2:
        return {
          styles: { backgroundColor: '#FEF9C3', color: '#BB8E2C' },
        };

      case 3:
        return {
          styles: { backgroundColor: '#FEE2E2', color: '#A95B7A' },
        };
    }
  };

  const title = () => (
    <div className='flex justify-content-between align-items-center'>
      <p className='text-base text-black-alpha-90 my-0'>{evaluation.name}</p>
      <p className='text-sm text-black-alpha-90 my-0'>
        <StatusTemplate
          name={evaluation.pivot.status.name}
          status_id={evaluation.pivot.status_id}
        />
      </p>
    </div>
  );

  const subTitle = () => (
    <div>
      <p className='text-sm text-black-alpha-80 my-0'>
        Competencia: {evaluation.competency.name}
      </p>
    </div>
  );

  return (
    <div className='card'>
      <Card className='w-screen lg:w-20rem' title={title} subTitle={subTitle}>
        <div className='flex justify-content-between align-items-center'>
          <p>Puntuación: {evaluation.pivot.score}</p>
          <EvaluationForm questions={evaluation.questions} test={evaluation} />
        </div>
      </Card>
    </div>
  );
};

EvaluationCard.propTypes = {
  evaluation: PropTypes.object.isRequired,
};

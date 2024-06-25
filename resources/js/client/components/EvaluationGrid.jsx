import PropTypes from 'prop-types';
import { EvaluationCard } from './';

export const EvaluationGrid = ({ evaluations }) => {
  return (
    <div className='flex flex-wrap gap-3 justify-content-between'>
      {evaluations.map(test => (
        <EvaluationCard key={test.id} evaluation={test}/>
      ))}
    </div>
  );
};

EvaluationGrid.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

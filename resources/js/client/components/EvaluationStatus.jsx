import PropTypes from 'prop-types';
import { Tag } from 'primereact/tag';

export const EvaluationStatus = ({ name, statusId }) => {
  return <Tag value={name} rounded style={getSeverity(statusId).styles} />;
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

EvaluationStatus.propTypes = {
  name: PropTypes.string.isRequired,
  statusId: PropTypes.number.isRequired,
};

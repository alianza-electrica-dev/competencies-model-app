import PropTypes from 'prop-types';
import { Tag } from 'primereact/tag';

export const EvaluationStatus = ({ name, statusId }) => {
  return <Tag value={name} rounded style={getSeverity(statusId).styles} />;
};

const getSeverity = status => {
  switch (status) {
    case 1:
      return {
        styles: {
          backgroundColor: '#DCFCE7',
          backgroundImage:
            'linear-gradient(90deg, hsla(145, 84%, 73%, 1) 0%, hsla(150, 61%, 48%, 1) 100%)',
          color: '#FFF',
          width: '8rem',
          height: '2rem',
        },
      };

    case 2:
      return {
        styles: {
          backgroundColor: '#FEF9C3',
          backgroundImage:
            'linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(13, 72%, 89%, 1) 100%)',
          color: '#FFF',
          width: '8rem',
          height: '2rem',
        },
      };

    case 3:
      return {
        styles: {
          backgroundColor: '#FEE2E2',
          backgroundImage:
            'linear-gradient(90deg, hsla(318, 78%, 66%, 1) 0%, hsla(347, 87%, 55%, 1) 100%)',
          color: '#FFF',
          width: '8rem',
          height: '2rem',
        },
      };
  }
};

EvaluationStatus.propTypes = {
  name: PropTypes.string.isRequired,
  statusId: PropTypes.number.isRequired,
};

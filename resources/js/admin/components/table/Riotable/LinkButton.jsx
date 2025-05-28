import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export const LinkButton = ({ icon, tooltipText, linkTo }) => {
  return (
    <Link to={linkTo}>
      <Button
        className='text-primary'
        icon={icon}
        rounded
        text
        tooltip={tooltipText}
        tooltipOptions={{ position: 'top' }}
        type='button'
      />
    </Link>
  );
};

LinkButton.propTypes = {
  icon: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

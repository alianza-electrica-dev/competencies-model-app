import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export const LinkButton = ({ rowData, icon, tooltipText }) => {
  return (
    <Link to={`/admin/employees-evaluations/${rowData.id}`}>
      <Button
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
  rowData: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

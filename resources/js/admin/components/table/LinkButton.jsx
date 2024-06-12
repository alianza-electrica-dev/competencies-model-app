import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export const LinkButton = ({ rowData }) => {
  return (
    <Link to={`/admin/employees-evaluations/${rowData.id}`}>
      <Button
        icon='pi pi-clipboard'
        rounded
        text
        tooltip='Evaluaciones'
        tooltipOptions={{ position: 'top' }}
        type='button'
      />
    </Link>
  );
};

LinkButton.propTypes = {
  rowData: PropTypes.object.isRequired,
};

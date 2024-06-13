import PropTypes from 'prop-types';
import { Tag } from 'primereact/tag';

export const TableStatusTemplate = ({ rowData }) => {
  return (
    <Tag
      value={rowData.pivot.status.name}
      severity={getSeverity(rowData.pivot.status_id)}
    />
  );
};

const getSeverity = status => {
  switch (status) {
    case 1:
      return 'danger';

    case 2:
      return 'warning';

    case 3:
      return 'success';
  }
};

TableStatusTemplate.propTypes = {
  rowData: PropTypes.object.isRequired,
};

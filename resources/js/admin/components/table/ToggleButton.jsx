import PropTypes from 'prop-types';
import { useAppMutation } from '../../../hooks';
import { InputSwitch } from 'primereact/inputswitch';

export const ToggleButton = ({ id, status, queryToInvalidate }) => {
  const { mutate } = useAppMutation('admin.managers.status', queryToInvalidate);
  const onChange = () => mutate({ params: { id } });
  return <InputSwitch checked={status === 1} onChange={onChange} />;
};

ToggleButton.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  queryToInvalidate: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import { useAppMutation } from '../../../hooks';
import { InputSwitch } from 'primereact/inputswitch';

export const ToggleButton = ({ id, status }) => {
  const { mutate } = useAppMutation('admin.managers.status', 'managers');
  const onChange = () => mutate({ params: { id } });
  return <InputSwitch checked={status === 1} onChange={onChange} />;
};

ToggleButton.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
};

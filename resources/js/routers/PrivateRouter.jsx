import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUser';

export const PrivateRouter = ({ children }) => {
  const user = useAuthUserStore(state => state.user);
  return user ? children : <Navigate to='/login' />;
};

PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

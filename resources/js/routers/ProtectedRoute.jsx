import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUser';

export const ProtectedRoute = ({ children, requiredRole }) => {
  const user = useAuthUserStore(state => state.user);

  if (!user) {
    return <Navigate to='/login' />;
  }

  if (user.role_id !== requiredRole) {
    return <Navigate to='/admin/employees' />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requiredRole: PropTypes.number.isRequired,
};

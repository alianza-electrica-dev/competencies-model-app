import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUser';

const getRedirectPath = user => {
  if (!user) return null;

  if (user.role_id === 1) {
    return user.hasPermission ? '/client/competencies' : '/admin/managers';
  }

  if (user.role_id === 2 || user.role_id === 3) {
    return user.hasPermission ? '/client/competencies' : '/admin/employees';
  }

  return '/client/competencies';
};

export const PublicRouter = ({ children }) => {
  const user = useAuthUserStore(state => state.user);
  const redirectPath = getRedirectPath(user);

  if (redirectPath) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};

PublicRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

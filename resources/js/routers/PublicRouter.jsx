import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthUserStore } from '../store/authUser';

export const PublicRouter = ({ children }) => {
  const user = useAuthUserStore(state => state.user);

  return !user ? (
    children
  ) : user.role_id === 1 && !user.hasPermission ? (
    <Navigate to='/admin/managers' />
  ) : (
    <Navigate to='/client/competencies' />
  );
};

PublicRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

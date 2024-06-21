/* eslint-disable no-undef */
import { useEffect } from 'react';
import axios from 'axios';
import { useAuthUserStore } from '../../store/authUser';

export const AuthChecker = () => {
  const setAuthUser = useAuthUserStore(state => state.setAuthUser);
  const logout = useAuthUserStore(state => state.logout);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.get(
          route('auth_check', { params: { withCredentials: true } }),
        );

        !data.authenticated ? logout() : setAuthUser(data.user);
      } catch (error) {
        console.error('Error al verificar la sesión:', error);
        logout();
      }
    };

    const interval = setInterval(checkAuth, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [setAuthUser]);

  return null;
};

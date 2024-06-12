/* eslint-disable no-undef */
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useAuthUserStore } from '../store/authUser';
import { showRegisterAlert } from '../utils/alert';
import { useNavigate } from 'react-router-dom';

export const useAuthMutation = url => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: request => axios.post(route(url), request),

    onSuccess: data => {
      const { data: response } = data;
      if (response.success && response.isLogin) {
        const login = useAuthUserStore.getState().setAuthUser;
        login(response.user);
      } else if (response.success) {
        showRegisterAlert();
        navigate('/login');
      }
    },

    onError: error => {
      const { response } = error;
      const { data } = response;
      console.log(data.message);
    },
  });
};

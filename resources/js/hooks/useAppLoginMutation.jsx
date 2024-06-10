/* eslint-disable no-undef */
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useAuthUserStore } from '../store/authUser';

export const useAppLoginMutation = url => {
  return useMutation({
    mutationFn: request => axios.post(route(url), request),

    onSuccess: data => {
      const { data: response } = data;
      if (response.success) {
        const login = useAuthUserStore.getState().setAuthUser;
        login(response.user);
      }
    },

    onError: error => {
      const { response } = error;
      const { data } = response;
      console.log(data.message);
    },
  });
};

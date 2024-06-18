/* eslint-disable no-undef */
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showErrorAlert, showSuccessAlert } from '../utils/alert';

export const useAppMutation = (url, invalidQuery = '') => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ params = {}, request = '' }) => {
      return axios.post(route(url, params), request);
    },

    onSuccess: data => {
      const { data: response } = data;

      response.success
        ? showSuccessAlert(response.titleAlert, response.textAlert)
        : showErrorAlert(response.titleAlert, response.textAlert);

      if (response.success && invalidQuery !== '')
        queryClient.invalidateQueries({ queryKey: [invalidQuery] });
    },

    onError: error => {
      const { response } = error;
      const { data } = response;
      console.log(data.message);
    },
  });
};

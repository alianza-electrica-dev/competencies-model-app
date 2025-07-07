/* eslint-disable no-undef */
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showErrorAlert, showSuccessAlert } from '../utils/alert';
import { useNavigate } from "react-router-dom";

export const useAppMutation = (url, invalidQuery = '') => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ params = {}, request = '' }) => {
      return axios.post(route(url, params), request);
    },

    onSuccess: data => {
      const { data: response } = data;

      if(response.success){
        showSuccessAlert(response.titleAlert, response.textAlert)
        setTimeout(() => {navigate(1)},1700)
      }else{
        showErrorAlert(response.titleAlert, response.textAlert);
      }

      if (response.success && invalidQuery !== '')
        queryClient.invalidateQueries({ queryKey: [invalidQuery] });
    },

    onError: (error) => {
      showErrorAlert(
        error.response.data.titleAlert,
        error.response.data.textAlert,
      );
    },
  });
};

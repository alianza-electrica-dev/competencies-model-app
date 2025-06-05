/* eslint-disable no-undef */
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showToast } from '../admin/components/table/Riotable/services/toastService'

export const useRioMutation = (url, invalidQuery = '') => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ params = {}, request = '' }) => {
      console.log(route(url, params), request)
      return axios.put(route(url, params), request);
    },

    onSuccess: data => {
      const { data: response } = data;

       response.success
        ? showToast({severity:'success', summary: response.titleAlert , detail: response.textAlert, life: 3000})
        : showToast({severity:'error', summary: response.titleAlert , detail: response.textAlert , life: 3000})

      if (response.success && invalidQuery !== '')
        queryClient.invalidateQueries({ queryKey: [invalidQuery] });
    },
    onError: (error, variables, context) => {
      console.log({ error, variables, context });
      showToast(
        {severity:'error', summary: 'Ha ocurrido un error', detail:'Favor de contactar a oscar.lopez@alianzaelectrica.com', life: 3000}
      );
    },
  });
};

/* eslint-disable no-undef */
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useAppQuery = (queryKey, url, params = '') => {
  const onGetData = async () => {
    const { data } = await axios.get(route(url, { params }), request);
    return data;
  };

  return useQuery({ queryKey: [queryKey], queryFn: onGetData });
};

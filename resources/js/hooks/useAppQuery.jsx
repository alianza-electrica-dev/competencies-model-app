/* eslint-disable no-undef */
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useAppQuery = (queryKey, url) => {
  const onGetData = async () => {
    const { data } = await axios.get(route(url));
    return data;
  };

  return useQuery({ queryKey: [queryKey], queryFn: onGetData });
};

import useSWR from 'swr';
import { api } from '../requests/api/api';

export function useAxios< Data = any, Error = any >(url:string) {
  // eslint-disable-next-line no-shadow
  const {data, error} = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url);
    return response.data;
  });

  return {data, error};
}

import { useEffect, useState } from 'react';
import { getAxios } from '../utils/axiosInstance';

const useGetData = (url: string) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      getAxios(`${url}`).then(res => setData(res.data));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return [data, loading];
};

export default useGetData;

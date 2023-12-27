import { useEffect, useState } from 'react';
import { getAxios } from '../utils/axiosInstance';

const useGetData = (url: string) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    try {
      getAxios(`${url}`).then(res => {
        if (res.data) setData(res.data);
        setLoading(false);
      });
    } catch (e) {
      console.error(e);
    }
  }, [url, toggle]);

  return [data, setToggle, loading];
};

export default useGetData;

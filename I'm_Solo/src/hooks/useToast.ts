import { useRecoilState } from 'recoil';
import { toastList } from '../atoms/toast';

const useToast = () => {
  const [toastComments, setToastComments] = useRecoilState(toastList);

  const createToast = (text: string) => {
    setToastComments(prev => [
      ...prev,
      { id: toastComments.length, text: text },
    ]);
  };

  return createToast;
};

export default useToast;

import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAlertModalStore } from "@_lib/store";
import { postSignIn, postSignUp } from "@_service/user";
import { SigninUserInfo, SignupUserInfo } from "@_type/userInfo";

export const usePostSignIn = (handleModal: () => void) => {
  const { changeText } = useAlertModalStore();

  const { mutate: handleSignIn, isPending } = useMutation({
    mutationFn: (userData: SigninUserInfo) => postSignIn(userData),
    onSuccess: ({ data }) => {
      if (data.item) {
        changeText("어서오세요 사장님!", "");
        handleModal();
      }
    },
    onError: (e: AxiosError) => {
      if (e.response?.data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data }: any = e.response;
        alert(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { handleSignIn, isPending };
};

export const usePostSignUp = (handleModal: () => void) => {
  const { changeText } = useAlertModalStore();

  const { mutate: handleSignUp, isPending } = useMutation({
    mutationFn: (userData: SignupUserInfo) => postSignUp(userData),
    onSuccess: ({ data }) => {
      if (data.item) {
        changeText("회원가입 완료!", "");
        handleModal();
      }
    },
    onError: (e: AxiosError) => {
      if (e.response?.data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data }: any = e.response;
        alert(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { handleSignUp, isPending };
};

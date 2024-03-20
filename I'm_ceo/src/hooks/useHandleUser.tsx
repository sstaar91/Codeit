import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { postSignIn, postSignUp } from "@_service/user";
import { SigninUserInfo, SignupUserInfo } from "@_type/userInfo";

export const usePostSignIn = () => {
  const { mutate: handleSignIn, isPending } = useMutation({
    mutationFn: (userData: SigninUserInfo) => postSignIn(userData),
    onSuccess: ({ data }) => {
      if (data.item) {
        alert("환영합니다!");
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

export const usePostSignUp = () => {
  const { mutate: handleSignUp, isPending } = useMutation({
    mutationFn: (userData: SignupUserInfo) => postSignUp(userData),
    onSuccess: ({ data }) => {
      if (data.item) {
        alert("회원가입이 완료 되었습니다!");
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

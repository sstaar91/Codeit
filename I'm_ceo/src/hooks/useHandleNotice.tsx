import { useMutation, useQuery } from "@tanstack/react-query";
import { getNotice, postApplyNotice } from "@_service/notice";
import { NoticeInputType } from "@_type/notice";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const usePostApplyNotice = (handleModal: () => void) => {
  const { mutate: handleApplyNotice, isPending } = useMutation({
    mutationFn: (userData: NoticeInputType) => postApplyNotice(userData),
    onSuccess: ({ data }) => {
      if (data.item) {
        toast.success("등록이 완료되었습니다");
        handleModal();
      }
    },
    onError: (e: AxiosError) => {
      if (e.response?.data) {
        const { data }: any = e.response;
        toast.error(`${data.message || "다시 시도해주세요"}`);
      }
    },
  });

  return { handleApplyNotice, isPending };
};

export const useGetNotice = () => {
  const id = localStorage.getItem("shopId") || "";

  const { data, isError, isPending, refetch } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      const { data } = await getNotice(id);

      return data.items;
    },
  });

  if (isError) {
    toast.error("다시 시도해주세요!");
  }

  return { noticeData: data, noticeLoading: isPending, reNoticeFetch: refetch };
};

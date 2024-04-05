import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { userTypeStore } from "@_lib/store";
import { getNoticeDetail, getNotices, getShopNotice, getUserNotice, postApplyNotice } from "@_service/notice";
import { NoticeInputType } from "@_type/notice";

export const useGetNoticeList = () => {
  const [searchParams] = useSearchParams();

  const { data, isPending, isError } = useQuery({
    queryKey: ["notices"],
    retry: 2,
    queryFn: () => getNotices(searchParams.toString()),
  });

  if (isError) {
    toast.error("데이터를 불러올 수 없습니다!");
  }

  return {
    notice: data?.data.items,
    total: data?.data.count,
    isLoading: isPending,
  };
};

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
  const shopId = localStorage.getItem("shopId") as string;
  const userId = localStorage.getItem("userId") as string;
  const { isEmployer } = userTypeStore();

  const {
    data: shopNotice,
    isError: shopNoticeError,
    isPending: shopNoticeLoading,
    refetch: shopNoticeFetch,
  } = useQuery({
    queryKey: ["shopNotice", shopId],
    queryFn: () => getShopNotice(shopId),
    enabled: !!shopId,
  });

  const {
    data: userNotice,
    isError: userNoticeError,
    isPending: userNoticeLoading,
    refetch: userNoticeFetch,
  } = useQuery({
    queryKey: ["userNotice", userId],
    queryFn: () => getUserNotice(userId),
    enabled: shopId === null,
  });

  if (shopNoticeError && userNoticeError) {
    toast.error("다시 시도해주세요!");
  }

  const data = {
    noticeData: isEmployer ? shopNotice?.data : userNotice?.data,
    noticeLoading: isEmployer ? shopNoticeLoading : userNoticeLoading,
    reNoticeFetch: isEmployer ? shopNoticeFetch : userNoticeFetch,
  };

  return data;
};

export const useGetNoticeDetail = () => {
  const shopId = localStorage.getItem("shopId") as string;
  const noticeId = localStorage.getItem("noticeId") as string;

  const { data, isError, isPending } = useQuery({
    queryKey: ["noticeDetail", noticeId],
    queryFn: () => getNoticeDetail(shopId, noticeId),
  });

  if (isError) {
    toast.error("다시 시도해주세요!");
  }

  return { data: data?.data.item, isPending };
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "@_hook/useHandleUser";
import { useGetNotice } from "@_hook/useHandleNotice";
import { userTypeStore } from "@_lib/store";

import { EmptyBox, NoticeBox, ProfileBox } from "@_component/page/myPage";
import { ModalLayout } from "@_component/Modal";
import { Loading } from "@_component/UI";

const MyPage = () => {
  const navigate = useNavigate();
  const [curModal, setCurModal] = useState("");

  const { userInfo, userInfoLoading, refetch } = useGetUserInfo();
  const { noticeData, noticeLoading, reNoticeFetch } = useGetNotice();

  const { type, isEmployer } = userTypeStore();

  const isRegistUser = isEmployer ? userInfo?.shop : userInfo?.name;
  const isRegistNotice = noticeData?.count !== 0;
  const userDetail = isEmployer ? userInfo?.shop?.item : userInfo;
  const noticeList = noticeData?.items;

  const handleModal = (value: string) => {
    setCurModal(value);
  };

  const onClickConfirmBtn = () => {
    curModal === "user" ? refetch() : reNoticeFetch();
  };

  const onClickNoticeBtn = () => {
    isEmployer ? handleModal("notice") : navigate("/");
  };

  if (userInfoLoading && noticeLoading) return <Loading />;

  return (
    <main className="mt-20 flexCenterColumn px-6 py-4">
      {!isRegistUser && <EmptyBox status="userInfo" btnText="등록하기" clickConfirm={() => handleModal("user")} />}
      {isRegistUser && <ProfileBox userDetail={userDetail} openModal={() => handleModal("user")} />}
      {isRegistUser && !isRegistNotice && (
        <EmptyBox status="notice" btnText={isEmployer ? "등록하기" : "공고 보기"} clickConfirm={onClickNoticeBtn} />
      )}
      {isRegistNotice && <NoticeBox noticeList={noticeList} />}
      <ModalLayout category={curModal} type={type} status={curModal !== ""} closeModal={() => handleModal("")} handleConfirmBtn={onClickConfirmBtn} />
    </main>
  );
};

export default MyPage;

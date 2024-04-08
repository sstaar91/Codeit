import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "@_hook/useHandleUser";
import { useGetNotice } from "@_hook/useHandleNotice";
import { userTypeStore } from "@_lib/store";

import { PageLayout } from "@_component/Layout";
import { EmptyBox, NoticeBox } from "@_component/page/myPage";
import { ModalLayout } from "@_component/Modal";
import { InfoCard, Loading } from "@_component/UI";

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
    <PageLayout>
      {!isRegistUser && <EmptyBox status="userInfo" btnText="등록하기" clickConfirm={() => handleModal("user")} />}
      {isRegistUser && <InfoCard infoDetail={userDetail} openModal={() => handleModal("user")} />}
      {isRegistUser && !isRegistNotice && (
        <EmptyBox status="notice" btnText={isEmployer ? "등록하기" : "공고 보기"} clickConfirm={onClickNoticeBtn} />
      )}
      {isRegistNotice && <NoticeBox noticeList={noticeList} handleModal={handleModal} />}
      <ModalLayout category={curModal} type={type} status={curModal !== ""} closeModal={() => handleModal("")} handleConfirmBtn={onClickConfirmBtn} />
    </PageLayout>
  );
};

export default MyPage;

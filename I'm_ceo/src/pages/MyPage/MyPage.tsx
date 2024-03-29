import { useState } from "react";

import { ModalLayout } from "@_component/Modal";
import { Loading } from "@_component/UI";
import { EmptyBox, ProfileBox } from "@_component/page/myPage";
import { useGetUserInfo } from "@_hook/useHandleUser";

const MyPage = () => {
  const [curModal, setCurModal] = useState("");

  const isEmployer = localStorage.getItem("userType") === "employer";
  const { userInfo, userInfoLoading, refetch } = useGetUserInfo(isEmployer ? "employerDetail" : "employeeDetail");

  const isRegistUser = isEmployer ? userInfo?.shop : userInfo?.name;
  const userDetail = isEmployer ? userInfo?.shop.item : userInfo;

  const handleModal = (value: string) => {
    setCurModal(value);
  };

  if (userInfoLoading) return <Loading />;

  return (
    <main className="mt-20 flexCenterColumn px-6 py-4 ">
      {!isRegistUser && <EmptyBox clickConfirm={() => handleModal(localStorage.getItem("userType") as string)} />}
      {isRegistUser && <ProfileBox userDetail={userDetail} />}
      <ModalLayout
        category="user"
        type={localStorage.getItem("userType") as string}
        status={curModal !== ""}
        closeModal={() => handleModal("")}
        handleConfirmBtn={() => refetch()}
      />
    </main>
  );
};

export default MyPage;

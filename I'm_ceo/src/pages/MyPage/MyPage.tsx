import { useState } from "react";

import { ModalLayout } from "@_component/Modal";
import { Loading } from "@_component/UI";
import { EmptyBox } from "@_component/page/myPage";
import { useGetUserInfo } from "@_hook/useHandleUser";

const MyPage = () => {
  const [curModal, setCurModal] = useState("");
  const { userInfo, userInfoLoading } = useGetUserInfo();

  const isEmployer = localStorage.getItem("userType") === "employer";
  const isRegistUser = isEmployer ? userInfo?.name : userInfo?.shop;

  const handleModal = (value: string) => {
    setCurModal(value);
  };

  if (userInfoLoading) return <Loading />;

  return (
    <main className="mt-20 flexCenterColumn px-6 py-4 ">
      {!isRegistUser && <EmptyBox clickConfirm={() => handleModal(localStorage.getItem("userType") as string)} />}
      <ModalLayout
        category="user"
        type={localStorage.getItem("userType") as string}
        status={curModal !== ""}
        handleConfirmBtn={() => {}}
        closeModal={() => handleModal("")}
      />
    </main>
  );
};

export default MyPage;

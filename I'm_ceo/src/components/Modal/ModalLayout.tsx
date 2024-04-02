import { ReactNode } from "react";
import { Modal } from "@mui/base";

import { UserInfoModal, AlertModal, NoticeModal } from ".";

import "./modal.css";

interface Props {
  category: string;
  type?: string;
  status: boolean;
  handleConfirmBtn?: () => void;
  closeModal: () => void;
}

const ModalLayout = ({ category, type, status, handleConfirmBtn = () => {}, closeModal }: Props) => {
  const modalList: { [key: string]: ReactNode } = {
    sign: <AlertModal handleConfirmBtn={handleConfirmBtn} />,
    user: <UserInfoModal isEmployer={type === "employer"} closeModal={closeModal} handleConfirmBtn={handleConfirmBtn} />,
    notice: <NoticeModal closeModal={closeModal} handleConfirmBtn={handleConfirmBtn} />,
  };

  return (
    <Modal open={status} onClick={closeModal} className="dimmedBackground flexCenterColumn z-50">
      <>{modalList[category]}</>
    </Modal>
  );
};

export default ModalLayout;

import { ReactNode, useEffect } from "react";
import { Modal } from "@mui/base";

import AlertModal from "./AlertModal";

import "./modal.css";

interface Props {
  type: string;
  status: boolean;
  handleConfirmBtn: () => void;
  closeModal: () => void;
}

const ModalLayout = ({ type, status, handleConfirmBtn, closeModal }: Props) => {
  const modalList: { [key: string]: ReactNode } = {
    sign: <AlertModal handleConfirmBtn={handleConfirmBtn} />,
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Modal open={status} onClose={closeModal} closeAfterTransition className="dimmedBackground flexCenterColumn">
      <>{modalList[type]}</>
    </Modal>
  );
};

export default ModalLayout;

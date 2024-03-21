import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/base";

import AlertModal from "./AlertModal";

import "./modal.css";

interface Props {
  type: string;
  status: boolean;
  handleModal: () => void;
}

const ModalLayout = ({ type, status, handleModal }: Props) => {
  const navigate = useNavigate();

  const successSignin = () => {
    handleModal();
    navigate("/myPage");
  };

  const modalList: { [key: string]: ReactNode } = {
    signin: <AlertModal handleModal={successSignin} />,
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Modal open={status} onClose={handleModal} closeAfterTransition>
      <div className="dimmedBackground flexCenterColumn" onClick={handleModal}>
        {modalList[type]}
      </div>
    </Modal>
  );
};

export default ModalLayout;

import { Button } from "@_component/Action";
import { useAlertModalStore } from "@_lib/store";

interface Props {
  handleModal: () => void;
}

const AlertModal = ({ handleModal }: Props) => {
  const { title, description } = useAlertModalStore();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flexCenterColumn modalBox"
    >
      <h2>{title}</h2>
      <span>{description}</span>
      <Button type="confirm" size="w-1/2" clickAction={handleModal}>
        확인
      </Button>
    </div>
  );
};

export default AlertModal;

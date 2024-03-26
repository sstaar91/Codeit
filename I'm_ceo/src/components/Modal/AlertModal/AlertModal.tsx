import { useAlertModalStore } from "@_lib/store";
import { Button } from "@_component/Action";

interface Props {
  handleConfirmBtn: () => void;
}

const AlertModal = ({ handleConfirmBtn }: Props) => {
  const { title, description } = useAlertModalStore();

  return (
    <div onClick={(e) => e.stopPropagation()} className="flexCenterColumn modalBox gap-4">
      <h2 className="text-black h2 font-dongle ">{title}</h2>
      <span className="desc2">{description}</span>
      <Button type="confirm" size="w-1/2" clickAction={handleConfirmBtn}>
        확인
      </Button>
    </div>
  );
};

export default AlertModal;

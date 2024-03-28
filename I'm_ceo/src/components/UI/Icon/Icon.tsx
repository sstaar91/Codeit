import menu from "@_asset/icons/i_menu.svg";
import image from "@_asset/icons/i_image.svg";
import loading from "@_asset/icons/i_loading.svg";

interface Props {
  type: string;
  size: string;
  animation?: string;
  clickAction?: () => void;
}

const iconList: { [key: string]: string } = {
  menu,
  image,
  loading,
};

const Icon = ({ type, size, animation, clickAction = () => {} }: Props) => {
  return <img src={iconList[type]} alt="" className={`${size} ${animation}`} onClick={clickAction} />;
};

export default Icon;

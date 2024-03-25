import menu from "@_asset/icons/i_menu.svg";

interface Props {
  type: string;
  size: string;
  clickAction?: () => void;
}

const iconList: { [key: string]: string } = {
  menu: menu,
};

const Icon = ({ type, size, clickAction = () => {} }: Props) => {
  return <img src={iconList[type]} alt="" className={`${size}`} onClick={clickAction} />;
};

export default Icon;

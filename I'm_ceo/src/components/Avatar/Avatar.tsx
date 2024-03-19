import main from "@_asset/images/main.jpeg";
import "./avatar.css";

interface Props {
  size: string;
}

const Avatar = ({ size }: Props) => {
  return (
    <div className={`avatar ${size}`}>
      <img src={main} alt="main avatar" />
    </div>
  );
};

export default Avatar;

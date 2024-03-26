import { useNavigate } from "react-router-dom";

interface Props {
  type: string;
}

const Logo = ({ type }: Props) => {
  const navigate = useNavigate();

  const textSize: { [key: string]: string } = {
    sign: "text-7xl",
    nav: "text-4xl md:text-3xl sm:text-2xl",
  };

  const goToMain = () => {
    if (type === "nav") navigate("/");
  };

  return (
    <h1 className={`font-dongle font-bold text-main h-fit w-fit cursor-default ${textSize[type]}`} onClick={goToMain}>
      암쎄오
    </h1>
  );
};

export default Logo;

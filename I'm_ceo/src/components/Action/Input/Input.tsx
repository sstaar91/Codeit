import { userInfoList } from "@_context/userInfo";
import "./input.css";
import { ChangeEvent } from "react";

interface Props {
  style: string;
  name: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ style, name, handleInput }: Props) => {
  const property = userInfoList[name];
  const { type, placeholder } = property;

  return (
    <input
      className={style}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleInput}
    />
  );
};

export default Input;

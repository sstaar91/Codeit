import { ChangeEvent } from "react";
import { userInfoList } from "@_context/userInfo";
import "./input.css";

interface Props {
  style: string;
  name: string;
  value: string | number;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ style, name, value, handleInput }: Props) => {
  const property = userInfoList[name];
  const { type, placeholder } = property;

  return <input className={style} type={type} name={name} value={value} placeholder={placeholder} onChange={handleInput} />;
};

export default Input;

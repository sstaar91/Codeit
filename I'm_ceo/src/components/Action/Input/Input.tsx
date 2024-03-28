import { ChangeEvent } from "react";
import { inputProperty } from "@_constant/actionProperty";
import "./input.css";

interface Props {
  style: string;
  name: string;
  value: string | number;
  handleInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = ({ style, name, value, handleInput }: Props) => {
  const property = inputProperty[name];
  const { type, placeholder } = property;

  return <input className={style} type={type} name={name} value={value} placeholder={placeholder} onChange={handleInput} />;
};

export default Input;

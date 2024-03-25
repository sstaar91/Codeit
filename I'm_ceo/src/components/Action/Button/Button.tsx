import { ReactNode } from "react";
import "./button.css";

interface Props {
  children: ReactNode;
  type: string;
  size?: string;
  addStyle?: string;
  disabled?: boolean;
  clickAction: () => void;
}

const Button = ({ children, type, size = "w-full", addStyle = "", disabled = false, clickAction }: Props) => {
  return (
    <button disabled={disabled} onClick={clickAction} className={`default ${type} ${size} ${addStyle} ${disabled ? "disabled" : ""}`}>
      {children}
    </button>
  );
};

export default Button;

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

const Button = ({
  children,
  type,
  size = "w-full",
  addStyle = "",
  disabled = false,
  clickAction,
}: Props) => {
  return (
    <button
      className={`default ${type} ${size} ${addStyle}`}
      disabled={disabled}
      onClick={clickAction}
    >
      {children}
    </button>
  );
};

export default Button;

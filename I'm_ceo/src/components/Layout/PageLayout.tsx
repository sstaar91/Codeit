import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return <main className="flexCenterColumn mt-20 px-6 py-4">{children}</main>;
};

export default PageLayout;

import { ReactNode } from "react";
import { Wrapper } from "./Content";

type Props = {
  width: string;
  children: ReactNode;
};

const Content = ({ width, children }: Props) => {
  return <Wrapper itemProp={width}>{children}</Wrapper>;
};

export default Content;

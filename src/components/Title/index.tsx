import { ReactNode } from "react";
import { Wrapper } from "./Title";

type Props = {
  children: ReactNode;
};

const Title = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Title;

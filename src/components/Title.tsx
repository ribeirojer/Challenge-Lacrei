import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Wrapper = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  color: #1f1f1f;
`;

const Title = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Title;

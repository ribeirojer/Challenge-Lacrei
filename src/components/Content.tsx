import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  width: string;  
  children: ReactNode;
};

const Wrapper = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #515151;
  width: ${(props) => props.itemProp};
`;

const Content = ({ width, children }: Props) => {
  return <Wrapper itemProp={width}>{children}</Wrapper>;
};

export default Content;

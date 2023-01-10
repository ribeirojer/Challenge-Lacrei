import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Wrapper = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  line-height: 65px;
  color: #1f1f1f;

  @media (max-width: 1040px) {
    font-size: 2rem;
    line-height: 43px;
  }
  @media (max-width: 520px) {
    font-size: 1.5rem;
  }
`;

const Title = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Title;

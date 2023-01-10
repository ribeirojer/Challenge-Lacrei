import styled from "styled-components";

type Props = {};

const Wrapper = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  color: #1f1f1f;
`;

const Title = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Title;

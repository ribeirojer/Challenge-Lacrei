import styled from "styled-components";

type Props = {};

const Wrapper = styled.p`
  margin: 2rem 0 3rem 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  width: 452px;
  color: #515151;
`;

const Content = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;

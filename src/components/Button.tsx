import styled from "styled-components";

type Props = {};

const Wrapper = styled.button`
  width: 192px;
  height: 48px;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;

  border: 2px solid #018762;
  color: ${(props) => props.color};
  background-color: ${(props) => props.theme};
  &:hover {
    color: ${(props) => props.theme};
    background-color: ${(props) => props.color};
  }
`;

const Button = ({
  color,
  theme,
  text,
}: {
  color: string;
  theme: string;
  text: string;
}) => {
  return (
    <Wrapper color={color} theme={theme}>
      {text}
    </Wrapper>
  );
};

export default Button;

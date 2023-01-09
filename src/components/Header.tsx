import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 4rem;
  background-color: #eeeeee;

  h1 {
    top: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #018762;
  }
  ul {
    display: flex;
    gap: 40px;
  }
  ul li {
    list-style-type: none;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #1f1f1f;
  }
  .cor {
    color: #018762;
  }
`;

const Header = (props: Props) => {
  return (
    <Wrapper>
      <h1>Lacrei</h1>
      <ul>
        <Link to={"/"}>
          <li className="cor">Home</li>
        </Link>
        <Link to={"/pessoa"}>
          <li>Pessoa Usuária</li>
        </Link>
        <Link to={"/profissional"}>
          <li>Profissional</li>
        </Link>
      </ul>
    </Wrapper>
  );
};

export default Header;

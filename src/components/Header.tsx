import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  padding: 0 4rem;
  background-color: #eeeeee;

  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #018762;
  }
  ul {
    display: flex;
    gap: 2.5rem;
  }
  ul li {
    list-style-type: none;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #1f1f1f;
    cursor: pointer;
  }
  .cor {
    color: #018762;
  }

  @media (max-width: 1040px) {
    padding: 0.5rem 2rem;
    ul {
      gap: 2rem;
    }
  }
  @media (max-width: 520px) {
    
    flex-direction: column;
    ul {
      gap: 1rem;
    }
  }
`;

const Header = (props: Props) => {
  const [first, setfirst] = useState<string>(window.location.pathname);
  const navigate = useNavigate();

  function handleNavigate(link: string) {
    setfirst(link);
    navigate(link);
  }

  return (
    <Wrapper>
      <h1>Lacrei</h1>
      <ul>
        <li
          className={`${first === "/" && "cor"}`}
          onClick={() => handleNavigate("/")}
        >
          Home
        </li>
        <li
          className={`${first === "/pessoa" && "cor"}`}
          onClick={() => handleNavigate("/pessoa")}
        >
          Pessoa Usuária
        </li>
        <li
          className={`${first === "/profissional" && "cor"}`}
          onClick={() => handleNavigate("/profissional")}
        >
          Profissional
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;

import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
  border-top: 1px solid #b0e0d3;
  .navbar {
    display: flex;
    margin-top: 2rem;
    gap: 40px;
  }
  div span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #1f1f1f;
  }
  .logos {
    display: flex;
    margin: 28px 0;
    gap: 40px;
    color: #018762;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #515151;
    margin-bottom: 8px;
  }
  .bold {
    font-weight: 700;
  }
`;

const Footer = (props: Props) => {
  const [first, setfirst] = useState<string>(window.location.pathname);
  const navigate = useNavigate();

  function handleNavigate(link: string) {
    setfirst(link);
    navigate(link);
  }

  return (
    <Wrapper>
      <div className="navbar">
        <span
          className={`${first === "/" && "bold"}`}
          onClick={() => handleNavigate("/")}
        >
          Home
        </span>
        <span
          className={`${first === "/pessoa" && "bold"}`}
          onClick={() => handleNavigate("/pessoa")}
        >
          Pessoa Usuária
        </span>
        <span
          className={`${first === "/profissional" && "bold"}`}
          onClick={() => handleNavigate("/profissional")}
        >
          Profissional
        </span>
      </div>
      <div className="logos">
        <FacebookLogo size={32} />
        <InstagramLogo size={32} />
        <LinkedinLogo size={32} />
      </div>
      <p>Desafio Front-end Lacrei</p>
    </Wrapper>
  );
};

export default Footer;

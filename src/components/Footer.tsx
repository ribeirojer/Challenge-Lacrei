import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 4rem 0.5rem 4rem;
  border-top: 1px solid #b0e0d3;
  .navbar {
    display: flex;
    margin-top: 2rem;
    gap: 40px;
  }
  div span {
    color: #1f1f1f;
    cursor: pointer;
  }
  .logos svg {
    margin: 23px 30px 23px 0;
    color: #018762;
  }
  p {
    font-size: 12px;
    line-height: 16px;
    color: #515151;
  }
  .bold {
    font-weight: 700;
  }

  @media (max-width: 1040px) {
    margin: 2.5rem 2rem 0.5rem 2rem;
  }
  @media (max-width: 520px) {
    font-size: 0.875rem;
    margin: 2.5rem 1rem 0.5rem 1rem;
    .navbar {
      flex-direction: column;
      margin-top: 1rem;
      gap: 0.25rem;
    }
    .logos svg {
      margin: 0.5rem 2rem 0.5rem 0;
    }
    div span {
      height: 19px;
    }
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

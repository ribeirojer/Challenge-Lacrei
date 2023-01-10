import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  .line {
    margin-top: 1rem;
    width: 1238px;
    height: 1px;
    margin-right: 4rem;
    background: #b0e0d3;
  }
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
  return (
    <Wrapper>
      <div className="line"></div>
      <div className="navbar">
        <span className="bold">Home</span>
        <span>Pessoa Usuária</span>
        <span>Profissional</span>
      </div>
      <div className="logos">
        <FacebookLogo size={24} />
        <InstagramLogo size={24} />
        <LinkedinLogo size={24} />
      </div>
      <p>Desafio Front-end Lacrei</p>
    </Wrapper>
  );
};

export default Footer;

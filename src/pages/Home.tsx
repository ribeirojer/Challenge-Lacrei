import styled from "styled-components";
import Button from "../components/Button";
import Content from "../components/Content";
import Title from "../components/Title";
import imagem from "../assets/img1.svg";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  .container {
    margin: 4rem 4rem 0 4rem;
    gap: 230px;
    display: flex;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 453px;
  }
  .wrapper div {
    margin-top: 1rem;
    display: flex;
    gap: 69px;
  }
`;

const Home = (props: Props) => {
  useEffect(() => {
    document.title = "Home | Desafio Lacrei";
  });

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div className="wrapper">
          <Title>Boas vindas a Lacrei Saúde</Title>
          <Content width={"403px"}>
            Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
          </Content>
          <div>
            <Button color={"#ffffff"} theme={"#018762"}>
              Pessoa Usuária
            </Button>
            <Button color={"#018762"} theme={"#ffffff"}>
              Profissional
            </Button>
          </div>
        </div>
        <img src={imagem} alt="" />
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Home;

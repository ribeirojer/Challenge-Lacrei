import styled from "styled-components";
import Button from "../components/Button";
import Content from "../components/Content";
import Title from "../components/Title";
import imagem from "../assets/img1.svg";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

type Props = {};

const Wrapper = styled.div`
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

  @media (max-width: 1040px) {
    .container {
      margin: 2rem 2rem 0 2rem;
      flex-direction: column;
      gap: 0;
    }
    .wrapper {
      gap: 0;
    }
    .wrapper div {
      margin: 3rem 0 2rem;
    }
  }
  @media (max-width: 520px) {
    .welcome div {
      margin-top: 0rem;
      display: flex;
      flex-direction: column;
    }
  }
`;

const Home = (props: Props) => {
  useEffect(() => {
    document.title = "Home | Desafio Lacrei";
  });

  return (
    <Wrapper>
      <Header />
      <main className="container">
        <div className="wrapper">
          <Title>Boas vindas a Lacrei Saúde</Title>
          <Content width={"403px"}>
            Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
          </Content>
          <div>
            <Link to={"/pessoa"}>
              <Button color={"#ffffff"} theme={"#018762"}>
                Pessoa Usuária
              </Button>
            </Link>
            <Link to={"/profissional"}>
              <Button color={"#018762"} theme={"#ffffff"}>
                Profissional
              </Button>
            </Link>
          </div>
        </div>
        <img src={imagem} alt="" />
      </main>
      <Footer />
    </Wrapper>
  );
};

export default Home;

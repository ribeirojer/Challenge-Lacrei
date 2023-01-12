import Button from "../../components/Button";
import Content from "../../components/Content";
import Title from "../../components/Title";
import imagem from "../../assets/img1.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Home";

type Props = {};

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

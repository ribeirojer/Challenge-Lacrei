import Content from "../../components/Content";
import Title from "../../components/Title";
import imagem from "../../assets/img2.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { Wrapper } from "./Person";

type Props = {};

const Person = (props: Props) => {
  useEffect(() => {
    document.title = "Pessoa Usuária | Desafio Lacrei";
  });

  return (
    <Wrapper>
      <Header />
      <main className="container">
        <div className="wrapper">
          <Title>Pessoa Usuária</Title>
          <Content width={"550px"}>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora.
          </Content>
        </div>
        <img src={imagem} alt="" />
      </main>
      <Footer />
    </Wrapper>
  );
};

export default Person;

import Content from "../../components/Content";
import Title from "../../components/Title";
import imagem from "../../assets/img3.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { Wrapper } from "./Profession";

type Props = {};

const Professional = (props: Props) => {
  useEffect(() => {
    document.title = "Profissional | Desafio Lacrei";
  });

  return (
    <Wrapper>
      <Header />
      <main className="container">
        <div className="wrapper">
          <Title>Profissional</Title>
          <Content width={"521px"}>
            Buscamos recrutar pessoas profissionais da saúde que entendam as
            necessidades e se comprometam com o bem-estar da comunidade
            LGBTQIAPN+
          </Content>
        </div>
        <img src={imagem} alt="" />
      </main>
      <Footer />
    </Wrapper>
  );
};

export default Professional;

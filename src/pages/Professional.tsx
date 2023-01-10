import Content from "../components/Content";
import Title from "../components/Title";
import imagem from "../assets/img3.svg";
import styled from "styled-components";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    margin: 4rem 4rem 0 4rem;
    display: flex;
    justify-content: space-between;
  }
  .wrapper {
    width: 550px;
  }
  .wrapper div {
    margin-top: 2rem;
    padding-left: 24px;
    border-left: 5px solid #018762;
  }
`;

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
          <div>
            <Content width={"521px"}>
              Buscamos recrutar pessoas profissionais da saúde que entendam as
              necessidades e se comprometam com o bem-estar da comunidade
              LGBTQIAPN+
            </Content>
          </div>
        </div>
        <img src={imagem} alt="" />
      </main>
      <Footer />
    </Wrapper>
  );
};

export default Professional;

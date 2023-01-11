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
    max-width: 550px;
  }
  .wrapper p {
    margin-top: 2rem;
    padding-left: 24px;
    border-left: 5px solid #018762;
  }

  @media (max-width: 1040px) {
    .container {
      margin: 2rem 2rem 0 2rem;
      flex-direction: column;
      gap: 0;
    }
    .wrapper p {
      margin: 1rem 0 0.5rem;
      padding-left: 1rem;
    }
  }
  @media (max-width: 520px) {
    .welcome div {
      margin-top: 0rem;
      display: flex;
      flex-direction: column;
    }
    .container {
      margin: 1rem 1rem 0 1rem;
    }
    .wrapper p {
      margin: 1rem 0 2rem;
    }
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

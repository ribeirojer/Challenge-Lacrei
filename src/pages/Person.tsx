import styled from "styled-components";
import Content from "../components/Content";
import Title from "../components/Title";
import imagem from "../assets/img2.svg";
import { useEffect } from "react";

type Props = {};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4rem 4rem 0 4rem;
  .wrapper p {
    margin-top: 2rem;
    padding-left: 24px;
    border-left: 5px solid #018762;
  }
`;

const Person = (props: Props) => {
  useEffect(() => {
    document.title = "Pessoa Usuária | Desafio Lacrei";
  });

  return (
    <Wrapper>
      <div className="wrapper">
        <Title>Pessoa Usuária</Title>
        <Content width={"550px"}>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </Content>
      </div>
      <img src={imagem} alt="" />
    </Wrapper>
  );
};

export default Person;

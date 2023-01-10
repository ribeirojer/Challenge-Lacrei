import Content from '../components/Content';
import Title from '../components/Title';
import imagem from "../assets/img3.svg";
import styled from 'styled-components';
import { useEffect } from 'react';

type Props = {};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4rem 4rem 0 4rem;
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
      <div className="wrapper">
        <Title>Profissional</Title>
        <div>
          <Content width={"521px"}>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora.
          </Content>
        </div>
      </div>
      <img src={imagem} alt="" />
    </Wrapper>
  )
}

export default Professional;
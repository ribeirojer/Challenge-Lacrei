import styled from "styled-components";
import Content from "../components/Content";
import Title from "../components/Title";
import imagem from "../assets/img2.svg";

type Props = {};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4rem 4rem 0 4rem;
  .wrapper {
    width: 550px;
  }
  .wrapper div {
    display: flex;
    margin-top: 2rem;
    gap: 24px;
  }
  .line {
    width: 5px;
    height: 132px;
    background: #018762;
  }
`;

const Person = (props: Props) => {
  return (
    <Wrapper>
      <div className="wrapper">
        <Title>Pessoa Usuária</Title>
        <div>
          <span className="line"></span>
          <Content width={"521px"}>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora.
          </Content>
        </div>
      </div>
      <img src={imagem} alt="" />
    </Wrapper>
  );
};

export default Person;

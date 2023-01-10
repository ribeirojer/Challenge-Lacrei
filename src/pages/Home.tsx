import styled from "styled-components";
import Button from "../components/Button";
import Content from "../components/Content";
import Title from "../components/Title";
import imagem from "../assets/img1.svg";

type Props = {};

const Wrapper = styled.header`
  display: flex;
  gap: 230px;
  padding: 4rem 4rem 0 4rem;
  .wrapper {
    width: 453px;
  }
  .wrapper p {
    margin-bottom: 2rem;
  }
  .wrapper div {
    margin-top: 3rem;
    display: flex;
    gap: 69px;
  }
`;

const Home = (props: Props) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Home;

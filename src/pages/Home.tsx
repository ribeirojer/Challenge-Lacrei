import styled from "styled-components";
import Button from "../components/Button";
import imagem from "../assets/img1.svg"
import Content from "../components/Content";
import Title from "../components/Title";
type Props = {};

const Wrapper = styled.header`
  display: flex;
  gap: 230px;
  padding: 4rem 4rem 0 4rem;
  .wrapper {
    width: 453px;
  }
  .wrapper div {
    display: flex;
    gap: 69px;
  }
`;

const Home = (props: Props) => {
  return (
    <Wrapper>
      <div className="wrapper">
        <Title className="title">Boas vindas a Lacrei Saúde</Title>
        <Content>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Content>
        <div>
          <Button color={"#ffffff"} theme={"#018762"} text={"Pessoa Usuária"} />
          <Button color={"#018762"} theme={"#ffffff"} text={"Profissional"} />
        </div>
      </div>
      <img src={imagem} alt="" />
    </Wrapper>
  );
};

export default Home;

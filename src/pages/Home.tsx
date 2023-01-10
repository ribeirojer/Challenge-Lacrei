import styled from "styled-components";
import Button from "../components/Button";
import imagem from "../assets/img1.svg"
type Props = {};

const Wrapper = styled.header`
  display: flex;
  gap: 230px;
  padding: 4rem 4rem 0 4rem;
  .wrapper {
    width: 453px;
  }
  .title {
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
    color: #1f1f1f;
  }
  p {
    margin: 2rem 0 3rem 0;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    width: 452px;
    color: #515151;
  }
  .buttons {
    display: flex;
    gap: 69px;
  }
`;

const Home = (props: Props) => {
  return (
    <Wrapper>
      <div className="wrapper">
        <h1 className="title">Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div className="buttons">
          <Button color={"#ffffff"} theme={"#018762"} text={"Pessoa Usuária"} />
          <Button color={"#018762"} theme={"#ffffff"} text={"Profissional"} />
        </div>
      </div>
      <img src={imagem} alt="" />
    </Wrapper>
  );
};

export default Home;

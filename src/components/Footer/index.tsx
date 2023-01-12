import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Footer";

type Props = {};

const Footer = (props: Props) => {
  const [first, setfirst] = useState<string>(window.location.pathname);

  useEffect(() => {
    setfirst(first);
  });

  return (
    <Wrapper>
      <div className="navbar">
        <span data-testid="link_home" className={`${first === "/" && "bold"}`}>
          <Link to={"/"}>Home</Link>
        </span>
        <span data-testid="link_pessoa" className={`${first === "/pessoa" && "bold"}`}>
          <Link to={"/pessoa"}>Pessoa Usuária</Link>
        </span>
        <span data-testid="link_pro" className={`${first === "/profissional" && "bold"}`}>
          <Link to={"/profissional"}>Profissional</Link>
        </span>
      </div>
      <div className="logos">
        <FacebookLogo size={32} />
        <InstagramLogo size={32} />
        <LinkedinLogo size={32} />
      </div>
      <p>Desafio Front-end Lacrei</p>
    </Wrapper>
  );
};

export default Footer;

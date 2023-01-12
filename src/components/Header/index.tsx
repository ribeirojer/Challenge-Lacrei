import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Header";

type Props = {};

const Header = (props: Props) => {
  const [first, setfirst] = useState<string>(window.location.pathname);

  useEffect(() => {
    setfirst(first);
  });

  return (
    <Wrapper>
      <Link to={"/"}>
        <h1>Lacrei</h1>
      </Link>
      <ul>
        <li data-testid="link_home" className={`${first === "/" && "cor"}`}>
          <Link to={"/"}>Home</Link>
        </li>
        <li data-testid="link_pessoa" className={`${first === "/pessoa" && "cor"}`}>
          <Link to={"/pessoa"}>Pessoa Usuária</Link>
        </li>
        <li data-testid="link_pro" className={`${first === "/profissional" && "cor"}`}>
          <Link to={"/profissional"}>Profissional</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;

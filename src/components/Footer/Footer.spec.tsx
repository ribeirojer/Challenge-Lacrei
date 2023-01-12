import { getByTestId, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Footer from "./index";
// @vitest-environment happy-dom

describe("Footer component", () => {
  it("should render the correct text", () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(container.firstChild?.textContent).toBe(
      "HomePessoa UsuáriaProfissionalDesafio Front-end Lacrei"
    );
  });

  it("should render the links correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const url_home = getByTestId(container, "link_home")
      .children.item(0)
      ?.attributes.getNamedItem("href")?.value;
    const url_pessoa = getByTestId(container, "link_pessoa")
      .children.item(0)
      ?.attributes.getNamedItem("href")?.value;
    const url_profissional = getByTestId(container, "link_pro")
      .children.item(0)
      ?.attributes.getNamedItem("href")?.value;

    expect(url_home).toBe("/");
    expect(url_pessoa).toBe("/pessoa");
    expect(url_profissional).toBe("/profissional");
  });

  it("should contain an SVG", () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("should apply styles", () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    // as classes do styled-components tem nomes estranhos
    // verificou só que elas existem no Footer
    const { children } = container;
    const classe = children.item(0)?.attributes.getNamedItem("class")?.value;
    expect(classe).toBeTruthy();
  });
});

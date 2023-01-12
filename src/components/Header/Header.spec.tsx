import { getByTestId, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Header from "./index";
// @vitest-environment happy-dom

describe("Header component", () => {
  it("should render the correct text", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(container.firstChild?.textContent).toBe(
      "LacreiHomePessoa UsuáriaProfissional"
    );
  });

  it("should render the links correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
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

  it("should apply styles", () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // as classes do styled-components tem nomes estranhos
    // verificou só que elas existem no header
    const { children } = container;
    const classe = children.item(0)?.attributes.getNamedItem("class")?.value;
    expect(classe).toBeTruthy();
  });
});

import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Content from "./index";
// @vitest-environment happy-dom

describe("Content component", () => {
  it("should render the correct text", () => {
    const { container } = render(<Content width={"550px"}>Click me</Content>);
    expect(container.firstChild?.textContent).toBe("Click me");
  });

  it("should apply the itemprop prop", () => {
    const { container } = render(<Content width={"550px"}>Click me</Content>);
    const { children } = container;
    const color = children.item(0)?.attributes.getNamedItem("itemprop")?.value;
    expect(color).toBe("550px");
  });

  it("should apply styles", () => {
    const { container } = render(<Content width={"550px"}>Click me</Content>);
    // as classes do styled-components tem nomes estranhos
    // verificou só que elas existem no botão
    const { children } = container;
    const classe = children.item(0)?.attributes.getNamedItem("class")?.value;
    expect(classe).toBeTruthy();
  });
});

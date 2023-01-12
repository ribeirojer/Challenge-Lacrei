import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Title from "./index";
// @vitest-environment happy-dom

describe("Title component", () => {
  it("should render the correct text", () => {
    const { container } = render(<Title>Click me</Title>);
    expect(container.firstChild?.textContent).toBe("Click me");
  });

  it("should apply styles", () => {
    const { container } = render(<Title>Click me</Title>);
    // as classes do styled-components tem nomes estranhos
    // verificou só que elas existem no botão
    const { children } = container;
    const classe = children.item(0)?.attributes.getNamedItem("class")?.value;
    expect(classe).toBeTruthy();
  });
});

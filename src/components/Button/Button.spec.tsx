import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Button from "./index";
// @vitest-environment happy-dom

describe("Button component", () => {
  it("should render the correct text", () => {
    const { container } = render(
      <Button color="#fff" theme="#000">
        Click me
      </Button>
    );
    expect(container.firstChild?.textContent).toBe("Click me");
  });
  it("should apply the color prop", () => {
    const { container } = render(
      <Button color="#fff" theme="#000">
        Click me
      </Button>
    );
    const { children } = container;
    const color = children.item(0)?.attributes.getNamedItem("color")?.value;
    expect(color).toBe("#fff");
  });
  it("should apply the theme prop", () => {
    const { container } = render(
      <Button color="#fff" theme="#000">
        Click me
      </Button>
    );
    // as classes do styled-components tem nomes estranhos
    // verificou só que elas existem no botão
    const { children } = container;
    const classe = children.item(0)?.attributes.getNamedItem("class")?.value;
    expect(classe).toBeTruthy();
  });
});

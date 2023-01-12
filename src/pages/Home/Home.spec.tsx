import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { it, describe, expect } from "vitest";
import Home from "./index";
// @vitest-environment happy-dom

describe("Home page", () => {
    it("should contain an image", () => {
      const { container } = render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      const img = container.querySelector("img");
      expect(img).toBeTruthy();
    });
});

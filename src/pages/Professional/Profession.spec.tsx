import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { it, describe, expect } from "vitest";
import Profession from "./index";
// @vitest-environment happy-dom

describe("Profession page", () => {
    it("should contain an image", () => {
      const { container } = render(
        <MemoryRouter>
          <Profession />
        </MemoryRouter>
      );
      const img = container.querySelector("img");
      expect(img).toBeTruthy();
    });
});

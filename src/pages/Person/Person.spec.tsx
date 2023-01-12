import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { it, describe, expect } from "vitest";
import Person from "./index";
// @vitest-environment happy-dom

describe("Person page", () => {
    it("should contain an image", () => {
      const { container } = render(
        <MemoryRouter>
          <Person />
        </MemoryRouter>
      );
      const img = container.querySelector("img");
      expect(img).toBeTruthy();
    });
});

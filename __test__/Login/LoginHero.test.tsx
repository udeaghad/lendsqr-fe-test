import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginHero from "../../app/components/LoginHero/LoginHero";

describe("LoginHero", () => {
  it("should render the Lendsqr logo", () => {
    render(<LoginHero />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("should render the Lendsqr photo", () => {
    render(<LoginHero />);
    expect(screen.getByTestId("hero_photo")).toBeInTheDocument();
  });
});

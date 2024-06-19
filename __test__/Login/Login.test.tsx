import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginHero from "../../app/components/LoginHero/LoginHero";

describe("LoginHero", () => {
  it("should render the Lendsqr logo", () => {
    render(<LoginHero />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});
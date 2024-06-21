import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TopBar from "../../app/components/NavBar/TopBar";

describe("TopBar", () => {
  let isCollapsed = false;
  const setIsCollapsed = jest.fn();

  it("should render logo on the top nav bar", () => {
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("should render search input on the top nav bar", () => {
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    const searchInput = screen.getByPlaceholderText("Search for anything");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "text");
    expect(searchInput.innerHTML).not.toContain("search for anything");
    expect(searchInput).not.toHaveAttribute("button");
  });

  it("should render text 'Docs' on the top nav bar", () => {
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    const docsText = screen.getByText("Docs");
    expect(docsText).toBeInTheDocument();
    expect(docsText.innerHTML).toContain("Docs");
    expect(docsText.innerHTML).not.toContain("docs");
  });

  it("should render bell icon on the top nav bar", () => {
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    const bellIcon = screen.getByAltText("bell");
    expect(bellIcon).toBeInTheDocument();
    expect(bellIcon).toHaveAttribute("src");
    expect(bellIcon).toHaveAttribute("width");
  });

  it("should render user profile pix on the top nav bar", () => {
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    const userPix = screen.getByAltText("userPix");
    expect(userPix).toBeInTheDocument();
    expect(userPix).toHaveAttribute("src");
    expect(userPix).toHaveAttribute("width");
    
  });

  it("should render user name on the top nav bar", () => {
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    expect(screen.getByText("Adedeji")).toBeInTheDocument();
  });

  it("should render dropdown icon on the top nav bar", () => {
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    expect(screen.getByAltText("dropDown")).toBeInTheDocument();
  });

  it("should not render the hamburger icon when isCollapsed is false", () => {
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    expect(screen.queryByTestId("hamburger")).not.toBeInTheDocument();
  });

  it("should render the hamburger icon when isCollapsed is true", () => {
    isCollapsed = true;
    render(<TopBar isCollapsed={true} setIsCollapsed={setIsCollapsed} />);
    expect(screen.getByTestId("hamburger")).toBeInTheDocument();
  });

  it("should call setIsCollapsed when the hamburger icon is clicked", () => {
    isCollapsed = true;
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    const hamburger = screen.getByTestId("hamburger");
    fireEvent.click(hamburger);
    expect(setIsCollapsed).toHaveBeenCalled();
  });

  it("should render the close hamburger icon when isCollapsed is false", () => {
    isCollapsed = false;
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    expect(screen.getByTestId("close_hamburger")).toBeInTheDocument();
  });

  it("should call setIsCollapsed when the close hamburger icon is clicked", () => {
    isCollapsed = false;
    render(
      <TopBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
    );
    const closeHamburger = screen.getByTestId("close_hamburger");
    fireEvent.click(closeHamburger);
    expect(setIsCollapsed).toHaveBeenCalled();
  });
});

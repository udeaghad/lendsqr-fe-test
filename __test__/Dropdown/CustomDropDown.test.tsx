import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CustomDropDown from "@/app/components/Dropdown/CustomDropDown";

describe("CustomDropDown", () => {
  const filterOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Pending", value: "pending" },
    { label: "Blacklisted", value: "blacklisted" },
  ];
  const handleSearch = jest.fn();

  it("should render the dropdown", () => {
    render(
      <CustomDropDown options={filterOptions} handleSearch={handleSearch} />
    );
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
  });

  it("should render the dropdown icon", () => {
    render(
      <CustomDropDown options={filterOptions} handleSearch={handleSearch} />
    );
    expect(screen.getByTestId("dropdown_icon")).toBeInTheDocument();
  });

  it("should render the dropdown select", () => {
    render(
      <CustomDropDown options={filterOptions} handleSearch={handleSearch} />
    );
    expect(screen.getByTestId("dropdown_select")).toBeInTheDocument();
  });


  it("should render the correct dropdown title", () => {
    render(
      <CustomDropDown options={filterOptions} handleSearch={handleSearch} />
    );
    expect(screen.getByText("Organization")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("should render reset button", () => {
    render(
      <CustomDropDown options={filterOptions} handleSearch={handleSearch} />
    );
    expect(screen.getByTestId("dropdown_reset")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("dropdown_reset"));
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  it("should render the filter button", () => {
    render(
      <CustomDropDown options={filterOptions} handleSearch={handleSearch} />
    );
    expect(screen.getByTestId("dropdown_filter")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("dropdown_filter"));
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
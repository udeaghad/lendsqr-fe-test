import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import UsersTable from "@/app/components/Table/UsersTable";

describe("UsersTable", () => {
  const data = [
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "1234@gmail.com",
      phoneNumber: "08012345678",
      dateJoined: "May 12, 2021",
      status: "Inactive",
    },
    {
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby@mail.com",
      phoneNumber: "08012345678",
      dateJoined: "May 12, 2021",
      status: "Active",
    },
    {
      organization: "Lendsqr",
      username: "Grace Effiom",
      email: "grace@yahoo.com",
      phoneNumber: "08012345678",
      dateJoined: "May 12, 2021",
      status: "Pending",
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "Tosin@mail.com",
      phoneNumber: "08012345678",
      dateJoined: "May 12, 2021",
      status: "Blacklisted",
    },
  ];

  it("should render the table", () => {
    render(<UsersTable data={data} />);
    expect(screen.getByTestId("table")).toBeInTheDocument();
  });

  it("should render the table headers", () => {
    render(<UsersTable data={data} />);
    expect(screen.getByTestId("table_header")).toBeInTheDocument();
  });

  it("should render the following table headers: Organization, Username, Email, Phone Number, Date Joined, Status", () => {
    render(<UsersTable data={data} />);
    const tableHeading = screen.getByTestId("table_header");
    expect(tableHeading).toHaveTextContent("Organization");
    expect(tableHeading).toHaveTextContent("Username");
    expect(tableHeading).toHaveTextContent("Email");
    expect(tableHeading).toHaveTextContent("Phone Number");
    expect(tableHeading).toHaveTextContent("Date Joined");
    expect(tableHeading).toHaveTextContent("Status");
  });

  it("should render the table body", () => {
    render(<UsersTable data={data} />);
    expect(screen.getByTestId("table_body")).toBeInTheDocument();
  });

  it("should render the data in the table body", () => {
    render(<UsersTable data={data} />);
    const tableBody = screen.getByTestId("table_body");

    expect(tableBody).toHaveTextContent("Lendsqr");
    expect(tableBody).toHaveTextContent("Adedeji");
    expect(tableBody).toHaveTextContent("1234@gmail.com");
    expect(tableBody).toHaveTextContent("08012345678");
    expect(tableBody).toHaveTextContent("May 12, 2021");
    expect(tableBody).toHaveTextContent("Inactive");
    expect(tableBody).toHaveTextContent("Active");
    expect(tableBody).toHaveTextContent("Pending");
    expect(tableBody).toHaveTextContent("Blacklisted");
    expect(tableBody).toHaveTextContent("Irorun");
    expect(tableBody).toHaveTextContent("Debby Ogana");
  });

  it("should render more icons on the table body", () => {
    render(<UsersTable data={data} />);
    const tableBody = screen.getByTestId("table_body");
    const icons = screen.getAllByTestId("more_icon");
    expect(tableBody).toContainElement(icons[0]);
  });

  it("should render the correct status color", () => {
    render(<UsersTable data={data} />);
    expect(screen.getByText("Inactive")).toHaveClass("inactive_status");
    expect(screen.getByText("Active")).toHaveClass("active_status");
    expect(screen.getByText("Pending")).toHaveClass("pending_status");
    expect(screen.getByText("Blacklisted")).toHaveClass("blacklisted_status");
  });

  it("should render the correct number of columns", () => {
    render(<UsersTable data={data} />);
    expect(screen.getAllByRole("columnheader")).toHaveLength(7);
  });

  
});

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DataTable from "@/app/components/Table/DataTable";
import { OverviewTableProps, UsersDetailsProps } from "@/types";

describe("DataTable", () => {
  const currentData: UsersDetailsProps[] = [
    {
      id: "7ba1d030-a7d8-4902-9663-7112f4e67fe1",
      info: {
        org: "moniepoint",
        firstName: "Orpha",
        lastName: "Muller",
        phoneNumber: "08125474254",
        email: "Velda59@mail.com",
        bvn: "3529-6808-0740-0630",
        gender: "female",
        mariralStatus: "single",
        children: "4",
        residentType: "sqautting",
        tier: "2",
        bank: "ecobank",
        account: "1247456982",
        referralCode: "sqnU6AQ3oElRWji",
        dateJoined: "2013-01-30T15:12:19.404Z",
        status: "Blacklisted",
      },
      educationAndEmployment: {
        educationLevel: "PhD",
        employStatus: "self employed",
        sector: "Oil and Gas",
        employmentDuration: "above 5 years",
        officeEmail: "example.com",
        loanRequest: "70000",
        monthlyIncome: "60000",
      },
      guarantor: {
        firstName: "Joany",
        lastName: "Schultz",
        phoneNumber: "09132471254",
        email: "Pearlie.Effertz27@example.com",
        relationship: "father",
      },
    },
    {
      id: "1242c80a-bc2d-4232-a571-15b6616f2b32",
      info: {
        org: "alat",
        firstName: "Maymie",
        lastName: "Gibson",
        phoneNumber: "07132587894",
        email: "Adell.Ward@example.com",
        bvn: "6759-7606-6325-5221",
        gender: "female",
        mariralStatus: "married",
        children: "5",
        residentType: "sqautting",
        tier: "1",
        bank: "polaris bank",
        account: "3625412358",
        referralCode: "BX6lNL_56wybHRs",
        dateJoined: "2021-01-28T09:31:15.898Z",
        status: "Inactive",
      },
      educationAndEmployment: {
        educationLevel: "Diploma",
        employStatus: "employed",
        sector: "Oil and Gas",
        employmentDuration: "5 years",
        officeEmail: "yopmail.com",
        loanRequest: "20000",
        monthlyIncome: "800000",
      },
      guarantor: {
        firstName: "Kaitlin",
        lastName: "Witting",
        phoneNumber: "07036521234",
        email: "Kiera.Douglas@mail.com",
        relationship: "father",
      },
    },
  ];

  const filterOptions = [
    { label: "", value: "Select" },
    { label: "lendsqr", value: "lendsqr" },
    { label: "opay", value: "opay" },
    { label: "moniepoint", value: "moniepoint" },
    { label: "oneBank", value: "oneBank" },
    { label: "palmpay", value: "palmpay" },
    { label: "alat", value: "alat" },
  ];

  const handleSearch = jest.fn();
  const handleFilterBtn = jest.fn();
  const handleReset = jest.fn();
  const handlePopupClick = jest.fn();

  it("should render the table", () => {
    render(
      <DataTable
        currentData={currentData}
        filterOptions={filterOptions}
        handleSearch={handleSearch}
        handleFilterBtn={handleFilterBtn}
        handleReset={handleReset}
        handlePopupClick={handlePopupClick}
      />
    );
    expect(screen.getByTestId("table")).toBeInTheDocument();
  });

  it("should render the table headers", () => {
    render(
      <DataTable
        currentData={currentData}
        filterOptions={filterOptions}
        handleSearch={handleSearch}
        handleFilterBtn={handleFilterBtn}
        handleReset={handleReset}
        handlePopupClick={handlePopupClick}
      />
    );
    expect(screen.getByTestId("table_header")).toBeInTheDocument();
  });

  it("should render the following table headers: Organization, Username, Email, Phone Number, Date Joined, Status", () => {
    render(
      <DataTable
        currentData={currentData}
        filterOptions={filterOptions}
        handleSearch={handleSearch}
        handleFilterBtn={handleFilterBtn}
        handleReset={handleReset}
        handlePopupClick={handlePopupClick}
      />
    );
    const tableHeading = screen.getByTestId("table_header");
    expect(tableHeading).toHaveTextContent("Organization");
    expect(tableHeading).toHaveTextContent("Username");
    expect(tableHeading).toHaveTextContent("Email");
    expect(tableHeading).toHaveTextContent("Phone Number");
    expect(tableHeading).toHaveTextContent("Date Joined");
    expect(tableHeading).toHaveTextContent("Status");
    expect(tableHeading).not.toHaveTextContent("Lendsqr");
    expect(tableHeading).not.toHaveTextContent("Orpha");
    expect(tableHeading).not.toHaveTextContent("08012345678");
    expect(tableHeading).not.toHaveTextContent("2021-01-30");
    expect(tableHeading).not.toHaveTextContent("Active");
  });

  it("should render the table body", () => {
    render(
      <DataTable
        currentData={currentData}
        filterOptions={filterOptions}
        handleSearch={handleSearch}
        handleFilterBtn={handleFilterBtn}
        handleReset={handleReset}
        handlePopupClick={handlePopupClick}
      />
    );
    expect(screen.getByTestId("table_body")).toBeInTheDocument();
  });

  it("should render the data in the table body", () => {
    render(
      <DataTable
        currentData={currentData}
        filterOptions={filterOptions}
        handleSearch={handleSearch}
        handleFilterBtn={handleFilterBtn}
        handleReset={handleReset}
        handlePopupClick={handlePopupClick}
      />
    );
    const tableBody = screen.getByTestId("table_body");

    expect(tableBody).toHaveTextContent("moniepoint");
    expect(tableBody).toHaveTextContent("Orpha");
    expect(tableBody).toHaveTextContent("Velda59@mail.com");
    expect(tableBody).toHaveTextContent("08125474254");
    expect(tableBody).toHaveTextContent("Thu Jan 28 2021");
    expect(tableBody).toHaveTextContent("Blacklisted");
    expect(tableBody).toHaveTextContent("Inactive");
    expect(tableBody).not.toHaveTextContent("Organization");
    expect(tableBody).not.toHaveTextContent("Username");
    expect(tableBody).not.toHaveTextContent("Email");
    expect(tableBody).not.toHaveTextContent("Phone Number");
    expect(tableBody).not.toHaveTextContent("Date Joined");
  });

  it("should render more icons on the table body", () => {
    render(
      <DataTable
        currentData={currentData}
        filterOptions={filterOptions}
        handleSearch={handleSearch}
        handleFilterBtn={handleFilterBtn}
        handleReset={handleReset}
        handlePopupClick={handlePopupClick}
      />
    );
    const tableBody = screen.getByTestId("table_body");
    const icons = screen.getAllByTestId("more_icon");
    expect(tableBody).toContainElement(icons[0]);
  });

  it("should render the correct status color", () => {
    render(
      <DataTable
        currentData={currentData}
        filterOptions={filterOptions}
        handleSearch={handleSearch}
        handleFilterBtn={handleFilterBtn}
        handleReset={handleReset}
        handlePopupClick={handlePopupClick}
      />
    );
    expect(screen.getByText("Inactive")).toHaveClass("inactive_status");
    expect(screen.getByText("Blacklisted")).toHaveClass("blacklisted_status");
  });

  it("should render the correct number of columns", () => {
    render(
      <DataTable
        currentData={currentData}
        filterOptions={filterOptions}
        handleSearch={handleSearch}
        handleFilterBtn={handleFilterBtn}
        handleReset={handleReset}
        handlePopupClick={handlePopupClick}
      />
    );
    expect(screen.getAllByRole("columnheader")).toHaveLength(7);
  });

  it('renders the CustomDropDown components that hanldes filtering', () => {
    render(
      <DataTable
        currentData={currentData}
        filterOptions={filterOptions}
        handleSearch={handleSearch}
        handleFilterBtn={handleFilterBtn}
        handleReset={handleReset}
        handlePopupClick={handlePopupClick}
      />
    );
    const dropdowns = screen.getAllByTestId('custom_dropdown');
    expect(dropdowns.length).toBe(6);
  });

});

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// // import '@testing-library/jest-dom/extend-expect';
// // import DataTable from './DataTable'; // adjust the import path accordingly
// import { useRouter } from 'next/router';

// // Mock useRouter
// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// // Sample data
// const mockData: UsersDetailsProps[] = [
//       {
//         "id": "7ba1d030-a7d8-4902-9663-7112f4e67fe1",
//         "info": {
//           "org": "moniepoint",
//           "firstName": "Orpha",
//           "lastName": "Muller",
//           "phoneNumber": "08125474254",
//           "email": "Velda59@mail.com",
//           "bvn": "3529-6808-0740-0630",
//           "gender": "female",
//           "mariralStatus": "single",
//           "children": "4",
//           "residentType": "sqautting",
//           "tier": "2",
//           "bank": "ecobank",
//           "account": "1247456982",
//           "referralCode": "sqnU6AQ3oElRWji",
//           "dateJoined": "2013-01-30T15:12:19.404Z",
//           "status": "Blacklisted"
//         },
//         "educationAndEmployment": {
//           "educationLevel": "PhD",
//           "employStatus": "self employed",
//           "sector": "Oil and Gas",
//           "employmentDuration": "above 5 years",
//           "officeEmail": "example.com",
//           "loanRequest": "70000",
//           "monthlyIncome": "60000"
//         },
//         "guarantor": {
//           "firstName": "Joany",
//           "lastName": "Schultz",
//           "phoneNumber": "09132471254",
//           "email": "Pearlie.Effertz27@example.com",
//           "relationship": "father"
//         }
//       },
//       {
//         "id": "1242c80a-bc2d-4232-a571-15b6616f2b32",
//         "info": {
//           "org": "alat",
//           "firstName": "Maymie",
//           "lastName": "Gibson",
//           "phoneNumber": "07132587894",
//           "email": "Adell.Ward@example.com",
//           "bvn": "6759-7606-6325-5221",
//           "gender": "female",
//           "mariralStatus": "married",
//           "children": "5",
//           "residentType": "sqautting",
//           "tier": "1",
//           "bank": "polaris bank",
//           "account": "3625412358",
//           "referralCode": "BX6lNL_56wybHRs",
//           "dateJoined": "2021-01-28T09:31:15.898Z",
//           "status": "Inactive"
//         },
//         "educationAndEmployment": {
//           "educationLevel": "Diploma",
//           "employStatus": "employed",
//           "sector": "Oil and Gas",
//           "employmentDuration": "5 years",
//           "officeEmail": "yopmail.com",
//           "loanRequest": "20000",
//           "monthlyIncome": "800000"
//         },
//         "guarantor": {
//           "firstName": "Kaitlin",
//           "lastName": "Witting",
//           "phoneNumber": "07036521234",
//           "email": "Kiera.Douglas@mail.com",
//           "relationship": "father"
//         }
//       },
//     ]

// describe('DataTable Component', () => {

//   let mockPush: jest.Mock;

//   beforeEach(() => {
//     mockPush = jest.fn();
//     (useRouter as jest.Mock).mockImplementation(() => ({
//       push: mockPush,
//     }));
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('renders table with data', () => {
//     render(<DataTable data={mockData} />);
//     expect(screen.getByTestId('table')).toBeInTheDocument();
//     expect(screen.getByTestId('table_body').children).toHaveLength(2);
//   });

//   test('pagination works correctly', () => {
//     render(<DataTable data={mockData} />);
//     const pagesInput = screen.getByLabelText('pages') as HTMLInputElement;
//     fireEvent.change(pagesInput, { target: { value: '20' } });
//     expect(pagesInput.value).toBe('20');
//   });

//   test('search filter works for organization', () => {
//     render(<DataTable data={mockData} />);
//     const dropdowns = screen.getAllByRole('combobox');
//     fireEvent.change(dropdowns[0], { target: { value: 'lendsqr' } });
//     fireEvent.click(screen.getByText('filter'));
//     expect(screen.getByTestId('table_body').children).toHaveLength(1);
//   });

//   test('handles view details click', () => {
//     render(<DataTable data={mockData} />);
//     const moreIcons = screen.getAllByTestId('more_icon');
//     fireEvent.click(moreIcons[0]);
//     fireEvent.click(screen.getByText('View Details'));
//     expect(mockPush).toHaveBeenCalledWith('/dashboard/users/1');
//   });

//   // Negative Scenarios
//   test('search with no match returns no data', () => {
//     render(<DataTable data={mockData} />);
//     const dropdowns = screen.getAllByRole('combobox');
//     fireEvent.change(dropdowns[0], { target: { value: 'NonExistentOrg' } });
//     fireEvent.click(screen.getByText('filter'));
//     expect(screen.getByTestId('table_body').children).toHaveLength(0);
//   });

//   // test('handles invalid pagination size gracefully', () => {
//   //   render(<DataTable data={mockData} />);
//   //   fireEvent.change(screen.getByLabelText('pages'), { target: { value: '1000' } });
//   //   expect(screen.getByLabelText('pages').value).toBe('1000');
//   // });
// });

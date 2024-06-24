import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GeneralDetailsCard from '../../app/components/GeneralDetails/GeneralDetailsCard';

// Mock localStorage
const mockUserDetails = {
  info: {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '1234567890',
    email: 'john.doe@example.com',
    bvn: '12345678901',
    gender: 'Male',
    mariralStatus: 'Single',
    children: 'None',
    residentType: 'Apartment',
  },
  educationAndEmployment: {
    educationLevel: 'Bachelors',
    employStatus: 'Employed',
    sector: 'Technology',
    employmentDuration: '5 years',
    officeEmail: 'john.doe@company.com',
    monthlyIncome: '500000',
    loanRequest: '200000',
  },
  guarantor: {
    firstName: 'Jane',
    lastName: 'Doe',
    phoneNumber: '0987654321',
    email: 'jane.doe@example.com',
    relationship: 'Sister',
  },
};

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(() => JSON.stringify(mockUserDetails)),
    setItem: jest.fn(() => null),
  },
  writable: true,
});

describe('GeneralDetailsCard Component', () => {
  test('renders user details from localStorage', () => {
    render(<GeneralDetailsCard />);

    // Personal Information
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('12345678901')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Single')).toBeInTheDocument();
    expect(screen.getByText('None')).toBeInTheDocument();
    expect(screen.getByText('Apartment')).toBeInTheDocument();

    // Education and Employment
    expect(screen.getByText('Bachelors')).toBeInTheDocument();
    expect(screen.getByText('Employed')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('5 years')).toBeInTheDocument();
    expect(screen.getByText('john.doe@company.com')).toBeInTheDocument();
    expect(screen.getByText('₦500,000.00')).toBeInTheDocument();
    expect(screen.getByText('₦200,000.00')).toBeInTheDocument();

    // Socials
    expect(screen.getByText('@John_Doe')).toBeInTheDocument();
    expect(screen.getByText('DoeJ')).toBeInTheDocument();
    expect(screen.getByText('John_Doe')).toBeInTheDocument();

    // Guarantor
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('0987654321')).toBeInTheDocument();
    expect(screen.getByText('jane.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Sister')).toBeInTheDocument();
  });

  // Negative test scenario: LocalStorage returns null
  test('handles no user details in localStorage gracefully', () => {
    window.localStorage.getItem = jest.fn(() => null);
    render(<GeneralDetailsCard />);

    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('1234567890')).not.toBeInTheDocument();
    expect(screen.queryByText('john.doe@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('12345678901')).not.toBeInTheDocument();
    expect(screen.queryByText('Male')).not.toBeInTheDocument();
    expect(screen.queryByText('Single')).not.toBeInTheDocument();
    expect(screen.queryByText('None')).not.toBeInTheDocument();
    expect(screen.queryByText('Apartment')).not.toBeInTheDocument();
    expect(screen.queryByText('Bachelors')).not.toBeInTheDocument();
    expect(screen.queryByText('Employed')).not.toBeInTheDocument();
    expect(screen.queryByText('Technology')).not.toBeInTheDocument();
    expect(screen.queryByText('5 years')).not.toBeInTheDocument();
    expect(screen.queryByText('john.doe@company.com')).not.toBeInTheDocument();
    expect(screen.queryByText('₦500,000.00')).not.toBeInTheDocument();
    expect(screen.queryByText('₦200,000.00')).not.toBeInTheDocument();
    expect(screen.queryByText('@John_Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('DoeJ')).not.toBeInTheDocument();
    expect(screen.queryByText('John_Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Jane Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('0987654321')).not.toBeInTheDocument();
    expect(screen.queryByText('jane.doe@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('Sister')).not.toBeInTheDocument();
  });
});

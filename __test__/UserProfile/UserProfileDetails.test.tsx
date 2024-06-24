import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfileCard from '../../app/components/UserProfile/UserProfileCard';

// Mock localStorage
const mockUserDetails = {
  info: {
    firstName: 'John',
    lastName: 'Doe',
    referralCode: '123ABC',
    tier: '2',
    account: '1234567890',
    bank: 'Some Bank',
  },
  educationAndEmployment: {
    monthlyIncome: '50000',
  },
};

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(() => JSON.stringify(mockUserDetails)),
    setItem: jest.fn(() => null),
  },
  writable: true,
});

describe('UserProfileCard Component', () => {
  test('renders user details from localStorage', () => {
    render(<UserProfileCard />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('123ABC')).toBeInTheDocument();
    expect(screen.getByText('User\'s Tier')).toBeInTheDocument();
    expect(screen.getByText('₦50,000.00')).toBeInTheDocument();
    expect(screen.getByText('1234567890/Some Bank')).toBeInTheDocument();
  });

  test('renders and switches tabs correctly', () => {
    render(<UserProfileCard />);
    expect(screen.getByText('General Details')).toHaveClass('active_tab');
    fireEvent.click(screen.getByText('Documents'));
    expect(screen.getByText('Documents')).toHaveClass('active_tab');
    expect(screen.getByText('General Details')).not.toHaveClass('active_tab');
    fireEvent.click(screen.getByText('Bank Details'));
    expect(screen.getByText('Bank Details')).toHaveClass('active_tab');
    expect(screen.getByText('Documents')).not.toHaveClass('active_tab');
  });

  test('handles no user details in localStorage gracefully', () => {
    window.localStorage.getItem = jest.fn(() => null);
    render(<UserProfileCard />);

    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('123ABC')).not.toBeInTheDocument();;
    expect(screen.queryByText('₦50,000.00')).not.toBeInTheDocument();
    expect(screen.queryByText('1234567890/Some Bank')).not.toBeInTheDocument();
  });
});

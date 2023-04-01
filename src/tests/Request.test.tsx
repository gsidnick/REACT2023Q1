import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Request from '../components/Request/Request';

const mockData = {
  city: 'Rome',
  name: 'Nick',
  birthday: '1990-01-01',
  email: 'user@example.com',
  photo: 'https://via.placeholder.com/100x100',
  gender: 'Male',
  check: 'Cuisine',
};

describe('Testing <Request /> component', () => {
  test('should show Radio component with input text', () => {
    render(<Request data={mockData} />);
    expect(screen.getByText(/Rome/i)).toBeInTheDocument();
    expect(screen.getByText(/Nick/i)).toBeInTheDocument();
    expect(screen.getByText(/1990-01-01/i)).toBeInTheDocument();
    expect(screen.getByText(/user@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Cuisine/i)).toBeInTheDocument();
  });
});

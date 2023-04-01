import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Request from '../components/Request/Request';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const mockData = [
  'Birthday is required',
  'Age should be over 18 years old',
  'Age should be less 100 years old',
  'Date should not be in the future',
];

describe('Testing <ErrorMessage /> component', () => {
  test('should show Radio component with input text', () => {
    render(<ErrorMessage errorMessages={mockData} />);
    expect(screen.getByText(/Birthday is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Age should be over 18 years old/i)).toBeInTheDocument();
    expect(screen.getByText(/Age should be less 100 years old/i)).toBeInTheDocument();
    expect(screen.getByText(/Date should not be in the future/i)).toBeInTheDocument();
  });
});

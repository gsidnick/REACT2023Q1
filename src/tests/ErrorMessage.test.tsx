import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Request from '../components/Request/Request';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const mockData = 'Birthday is required';

describe('Testing <ErrorMessage /> component', () => {
  test('should show Radio component with input text', () => {
    render(<ErrorMessage errorMessage={mockData} />);
    expect(screen.getByText(/Birthday is required/i)).toBeInTheDocument();
  });
});

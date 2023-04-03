import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testing <App /> component', () => {
  test('should show App', () => {
    const component = render(<App />);
    expect(component).toBeTruthy();
  });
  test('should show heading', () => {
    const { getByText } = render(<App />);
    const heading = getByText(/pizza/i, { selector: '.heading' });
    expect(heading).toBeInTheDocument();
  });
  test('should show search field', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});

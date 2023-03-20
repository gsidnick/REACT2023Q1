import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Catalog from '../components/Catalog/Catalog';

describe('Testing <Catalog /> component', () => {
  test('should show Catalog component', () => {
    const component = render(<Catalog />);
    expect(component).toBeTruthy();
  });
  test('should show Catalog component with search field', () => {
    render(<Catalog />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});

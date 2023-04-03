import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import data from '../../data.json';

describe('Testing <Card /> component', () => {
  test('should show Card component with image', () => {
    render(<Card value={data[0]} />);
    expect(screen.getByRole('img')).toHaveClass('card__image');
  });
  test('should show Card component with image alt text', () => {
    render(<Card value={data[0]} />);
    expect(screen.getByAltText(/.+/i)).toBeDefined();
  });
  test('should show Card component with title', () => {
    render(<Card value={data[0]} />);
    expect(screen.getByText(/.+/i, { selector: '.card__title' })).toBeDefined();
  });
  test('should show Card component with price', () => {
    render(<Card value={data[0]} />);
    expect(screen.getByText(/[$\d+.]/i, { selector: '.card__price' })).toBeDefined();
  });
  test('should show Card component with description', () => {
    render(<Card value={data[0]} />);
    expect(screen.getByText(/.+/i, { selector: '.card__description' })).toBeDefined();
  });
});

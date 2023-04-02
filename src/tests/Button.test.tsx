import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../components/UI/Button/Button';

describe('Testing <Button /> component', () => {
  test('should show Button component with custom class', () => {
    render(<Button type="button" className="custom-button-class" />);
    expect(screen.getByText(/.*/i, { selector: '.custom-button-class' })).toBeDefined();
  });
  test('should render Button component with inner text', () => {
    render(<Button type="button">Click me</Button>);
    expect(screen.getByText('Click me')).toBeDefined();
  });
});

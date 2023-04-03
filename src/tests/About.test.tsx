import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import About from '../components/About/About';

describe('Testing <About /> component', () => {
  test('should show About component', () => {
    const component = render(<About />);
    expect(component).toBeTruthy();
  });
});

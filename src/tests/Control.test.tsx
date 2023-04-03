import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Control from '../components/Control/Control';

describe('Testing <Control /> component', () => {
  test('should show Form component', () => {
    const component = render(<Control />);
    expect(component).toBeTruthy();
  });
});

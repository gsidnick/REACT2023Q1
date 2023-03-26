import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Checkbox from '../components/UI/Checkbox/Checkbox';

describe('Testing <Checkbox /> component', () => {
  test('should show Checkbox component', () => {
    const component = render(<Checkbox name="checkbox" value="checkboxValue" />);
    expect(component).toBeTruthy();
  });
});

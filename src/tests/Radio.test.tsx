import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Radio from '../components/UI/Radio/Radio';

describe('Testing <Radio /> component', () => {
  test('should show Radio component', () => {
    const component = render(<Radio name="radioButton" value="radioValue" />);
    expect(component).toBeTruthy();
  });
});

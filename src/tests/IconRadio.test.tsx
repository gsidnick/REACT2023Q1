import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import IconRadio from '../components/UI/Icon/IconRadio/IconRadio';

describe('Testing <IconRadio /> component', () => {
  test('should show IconRadio component', () => {
    const component = render(<IconRadio />);
    expect(component).toBeTruthy();
  });
});

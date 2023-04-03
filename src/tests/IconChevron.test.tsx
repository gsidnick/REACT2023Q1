import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import IconChevron from '../components/UI/Icon/IconChevron/IconChevron';

describe('Testing <IconChevron /> component', () => {
  test('should show IconChevron component', () => {
    const component = render(<IconChevron />);
    expect(component).toBeTruthy();
  });
});

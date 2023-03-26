import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import IconCheck from '../components/UI/Icon/IconCheck/IconCheck';

describe('Testing <IconCheck /> component', () => {
  test('should show IconCheck component', () => {
    const component = render(<IconCheck />);
    expect(component).toBeTruthy();
  });
});

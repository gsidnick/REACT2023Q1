import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Radio from '../components/UI/Radio/Radio';

describe('Testing <Radio /> component', () => {
  test('should show Radio component with input text', () => {
    render(
      <Radio name="gender" value="Male">
        Male
      </Radio>
    );
    expect(screen.getByText(/.*/i, { selector: 'input[name="gender"]' })).toBeTruthy();
  });
  test('should show Radio component with input text', () => {
    render(
      <Radio name="gender" value="Male">
        Male
      </Radio>
    );
    expect(screen.getByText(/Male/i)).toBeDefined();
  });
});

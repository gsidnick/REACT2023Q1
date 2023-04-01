import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputDate from '../components/UI/InputDate/InputDate';

describe('Testing <InputDate /> component', () => {
  test('should show Input component with input text', () => {
    render(<InputDate name="birthday" onChange={() => undefined} />);
    expect(screen.getByText(/.*/i, { selector: 'input[name="birthday"]' })).toBeDefined();
  });
});

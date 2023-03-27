import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputText from '../components/UI/InputText/InputText';

describe('Testing <Input /> component', () => {
  test('should show Input component with input text', () => {
    render(<InputText value="Type text here..." onChange={() => undefined} />);
    expect(screen.getByText(/.*/i, { selector: '.input__field' })).toBeDefined();
  });
});

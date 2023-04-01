import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputFile from '../components/UI/InputFile/InputFile';

describe('Testing <InputFile /> component', () => {
  test('should show InputFile component with input text', () => {
    render(<InputFile label="Upload your photo:" name="photo" onChange={() => undefined} />);
    expect(screen.getByText(/Upload your photo:/i)).toBeDefined();
  });
});

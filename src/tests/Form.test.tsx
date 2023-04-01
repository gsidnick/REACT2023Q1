import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Form from '../components/Form/Form';

describe('Testing <Form /> component', () => {
  test('should show Form component', () => {
    const component = render(<Form setRequests={() => {}} />);
    expect(component).toBeTruthy();
  });
});

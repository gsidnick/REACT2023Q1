import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import List from '../components/List/List';
import data from '../../data.json';

describe('Testing <List /> component', () => {
  test('should show List component with data', () => {
    render(<List value={data} />);
    expect(screen.getAllByText(/.*/i, { selector: '.card' })).toBeDefined();
  });
});

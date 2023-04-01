import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound/NotFound';

describe('Testing <NotFound /> component', () => {
  test('should show NotFound component', () => {
    render(
      <MemoryRouter initialEntries={['/somepath']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});

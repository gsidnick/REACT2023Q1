import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Notice from '../components/Notice/Notice';

describe('Testing <Notice /> component', () => {
  test('should show Notice component', () => {
    const component = render(<Notice className="notice notice_success">Message</Notice>);
    expect(component).toBeTruthy();
  });
  test('should render Notice component with inner text', () => {
    render(<Notice className="notice notice_success">Message</Notice>);
    expect(screen.getByText('Message')).toBeDefined();
  });
});

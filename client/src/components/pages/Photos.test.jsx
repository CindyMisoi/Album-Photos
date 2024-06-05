import '@testing-library/jest-dom';
// Photos.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Photos from './Photos';

describe('Photos component', () => {
  it('renders correctly', () => {
    render(<Photos />);
    expect(screen.getByText('Photos')).toBeInTheDocument();
  });
});
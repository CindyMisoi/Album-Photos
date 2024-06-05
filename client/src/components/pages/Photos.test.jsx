import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import Photos from './Photos';

describe('Photos component', () => {
  it('renders correctly', () => {
    render(<Photos />);
    expect(screen.getByText('Photos')).toBeInTheDocument();
  });
});
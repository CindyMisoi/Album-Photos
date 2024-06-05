import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import UserAvatar from './UserAvatar';

describe('UserAvatar', () => {
    it('renders the component', () => {
      render(<UserAvatar id="1" name="John Doe" />);
      expect(screen.getByRole('img', { name: /JD/ })).toBeInTheDocument();
    });

  });
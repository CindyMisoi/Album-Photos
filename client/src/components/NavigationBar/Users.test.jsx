import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from '@jest/globals';
import UserAvatar from './UserAvatar';

describe('UserAvatar', () => {
    it('renders the component', () => {
      render(<UserAvatar id="1" name="John Doe" />);
    });

  });
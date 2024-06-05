import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from '@jest/globals';
import User from '../../components/pages/User';

describe('User', () => {
    it('renders the component', () => {
      render(<User id="1" name="John Doe" />);
    });

  });
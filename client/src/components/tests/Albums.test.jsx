import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from '@jest/globals';
import Albums from '../../components/pages/Albums';

describe('Albums', () => {
    it('renders the component', () => {
      render(<Albums/>);
    });

  });
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from '@jest/globals';
import Photos from '../../components/pages/Photos';

describe('Photos', () => {
    it('renders the component', () => {
      render(<Photos/>);
    });

  });
import { render, screen } from '@testing-library/react';
import UserAvatar from './UserAvatar';

describe('UserAvatar', () => {
  it('renders the initials correctly', () => {
    render(<UserAvatar id="1" name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders "NA" when name is not provided', () => {
    render(<UserAvatar id="1" />);
    expect(screen.getByText('NA')).toBeInTheDocument();
  });

  it('renders "NA" when name is an empty string', () => {
    render(<UserAvatar id="1" name="" />);
    expect(screen.getByText('NA')).toBeInTheDocument();
  });

  it('renders the loading state when name is not provided and id is provided', () => {
    render(<UserAvatar id="1" />);
    expect(screen.getByText('Loading..')).toBeInTheDocument();
  });

  it('renders the loading state when name is an empty string and id is provided', () => {
    render(<UserAvatar id="1" name="" />);
    expect(screen.getByText('Loading..')).toBeInTheDocument();
  });
});
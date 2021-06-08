import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      selectedRegion: { region: { id: 1, name: '서울' } },
    }));
  });

  it('renders RegionsContainer', () => {
    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText('서울')).not.toBeNull();
  });
});
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Balance } from './Balance';
import { GlobalProvider } from '../../context/GlobalState';

afterEach(cleanup);

const renderUI = () => {
  return render(
    <GlobalProvider>
      <Balance />
    </GlobalProvider>
  );
};

describe('<Balance/>', () => {
  it('renders without crashing.', () => {
    const { container } = renderUI();
    expect(container).toBeInTheDocument();
  });

  it('matches the snapshot.', () => {
    const { asFragment } = renderUI();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an initial total of $0.00', () => {
    const { getByText } = renderUI();
    expect(getByText('$0.00')).toBeInTheDocument();
  });
});

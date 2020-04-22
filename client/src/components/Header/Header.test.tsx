import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Header } from './Header';

afterEach(cleanup);

const renderUI = () => {
  return render(<Header title="Expense Tracker" />);
};

describe('<Header/>', () => {
  it('renders without crashing.', () => {
    const { container } = renderUI();
    expect(container).toBeInTheDocument();
  });

  it('renders the title prop inside a h2 tag', () => {
    const { getByText } = renderUI();
    const header = getByText('Expense Tracker');
    expect(header).toBeTruthy();
    expect(header.localName).toEqual('h2');
  });
});

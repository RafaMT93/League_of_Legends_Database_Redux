import React from 'react';
import Header from '../Components/Header';
import '@testing-library/jest-dom';

import { render, screen, userEvent } from '@testing-library/react';

const options = ['first link', 'second link'];

describe('Header Component Test', () => {
  it('Have text header in element', () => {
    render(<Header options={options} />);

    expect(screen.queryByText(options[0])).toBeInTheDocument();
    expect(screen.queryByText(options[1])).toBeInTheDocument();
    expect(screen.queryByText('third link')).not.toBeInTheDocument;
  });

  it('Click redirect to page', () => {
    render(<Header options={options} />);

    expect(screen.queryByText(options[0])).toBeInTheDocument();
    expect(screen.queryByText(options[1])).toBeInTheDocument();
    expect(screen.queryByText('third link')).not.toBeInTheDocument;

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(`/${options[0]}`), leftClick);
  });
});

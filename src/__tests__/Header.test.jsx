import React from 'react';
import Header from '../Components/Header';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import theme from '../Global/Theme';
import { ThemeProvider } from 'styled-components';

const options = ['Champions', 'Items', 'ChampionList'];

describe('Component Header', () => {
  it('Render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header options={options} />
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(screen.queryByText(options[0])).toMatchSnapshot();
    expect(screen.queryByText(options[1])).toMatchSnapshot();
    expect.not.objectContaining(screen.queryByText(options[2]));
  });
});

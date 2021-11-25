import React from 'react';
import Header from '../Components/Header';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

//Styled Component Theme
import theme from '../Global/Theme';
import { ThemeProvider } from 'styled-components';

//Router
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const options = ['Champions', 'Itens'];

afterEach(cleanup);

describe('Component Header', () => {
  it('Render correctly', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header options={options} />
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(queryByText(options[0]));
    expect(queryByText(options[1]));
    expect(queryByText('List')).not.toBeInTheDocument();
  });

  it('Click redirect to page', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter history={history}>
          <Header options={options} />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const leftClick = { button: 0 };
    userEvent.click(getByText(/Itens/i), leftClick);
    expect(getByText(/Itens/i)).toBeTruthy();

    userEvent.click(getByText(/Champions/i), leftClick);
    expect(getByText(/Itens/i)).toBeTruthy();
  });
});

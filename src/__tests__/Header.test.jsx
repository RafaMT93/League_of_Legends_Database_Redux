import React from 'react';
import Header from '../Components/Header';
import '@testing-library/jest-dom';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';

//Styled Component Theme
import theme from '../Global/Theme';
import { ThemeProvider } from 'styled-components';

//Router
import { BrowserRouter, Link } from 'react-router-dom';

const options = ['First', 'Second'];

afterEach(cleanup);

describe('Component Header', () => {
  it('Render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header options={options} />
        </BrowserRouter>
      </ThemeProvider>,
    );

    expect(screen.queryByText(options[0]));
    expect(screen.queryByText(options[1]));
    expect(screen.queryByText('Third')).not.toBeInTheDocument();
  });

  /*   it('Click redirect to page', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header options={options} />
        </BrowserRouter>
      </ThemeProvider>,
    );
    const leftClick = { button: 0 };
    const navlink = queryByText(options[0]);
    navlink.click(leftClick);
    expect(screen.getByText(`/${options[0]}`));
  }); */
});

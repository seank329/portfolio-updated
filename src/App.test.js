import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

test('Renders the homepage of Sean Cooper ', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/I'm Sean/i);
  expect(linkElement).toBeInTheDocument();
});

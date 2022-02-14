import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const Element = screen.getByText(/Todo List/i);
  expect(Element).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const Element = screen.getByRole("textbox")
  expect(Element).toBeInTheDocument();
});

describe("submit button", () => {
  test("submit button is in the document", () => {
    render(<App />)
    const button = screen.getByText("submit")
    expect(button).toBeInTheDocument()
  })
  test("submit button is in the document", () => {
    render(<App />)
    const button = screen.getByText("submit")
    expect(button).toBeInTheDocument()
  })
})
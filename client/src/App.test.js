import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Get Prime Medians");
  expect(linkElement).toBeInTheDocument();
});

test("check if we can input numbers", async () => {
  render(<App />);
  const numberInput = screen.getByRole("spinbutton");

  // https://legacy.reactjs.org/docs/test-utils.html#act
  act(() => {
    userEvent.type(numberInput, "50");
  })

  expect(numberInput).toHaveValue(50);
})

// test("if we can reset the input nubmer box", async() => {
//   render(<App />);
//   const user = userEvent.setup();
//   const resetButton = screen.getByText("Reset");
//   const numberInput = screen.getByRole("textbox");
//   await user.click(resetButton);
//   expect(numberInput).toHaveValue("");
// })

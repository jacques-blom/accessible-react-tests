import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Task } from "./Task";
import userEvent from "@testing-library/user-event";

it("toggles the task checked state", () => {
  render(<Task />);

  const checkbox = screen.getByTestId("checkbox");
  const checkIcon = screen.getByTestId("checkIcon");

  // Checked
  userEvent.click(checkbox);
  expect(checkIcon).toHaveStyle("opacity: 1");

  // Not checked
  userEvent.click(checkbox);
  expect(checkIcon).toHaveStyle("opacity: 0");
});

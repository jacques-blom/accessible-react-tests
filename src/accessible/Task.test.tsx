import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Task } from "./Task";
import userEvent from "@testing-library/user-event";

const getCheckbox = (checked: boolean) => {
  // Including 'name' here makes sure the checkbox is
  // displaying the correct acessible label
  if (checked) {
    return screen.getByRole("checkbox", { name: "mark as unchecked" });
  } else {
    return screen.getByRole("checkbox", { name: "mark as checked" });
  }
};

it("toggles the task checked state", () => {
  render(<Task />);

  // Click the checkbox
  userEvent.click(getCheckbox(false));

  // Expect the checkbox to be checked
  expect(getCheckbox(true)).toBeChecked();

  // Click the checkbox
  userEvent.click(getCheckbox(true));

  // Expect the checkbox to be checked
  expect(getCheckbox(false)).not.toBeChecked();
});

import * as React from "react";
import "./Task.scss";
import { useFakeAPI } from "../useFakeAPI";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <div data-testid="checkbox" className="accessible-checkbox">
      <img
        alt="check icon"
        src="/check.svg"
        style={{ opacity: checked ? 1 : 0 }}
        data-testid="checkIcon"
      />
      <input
        type="checkbox"
        aria-label={checked ? "mark as unchecked" : "mark as checked"}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
    </div>
  );
};

export const Task = () => {
  const { task, updateChecked } = useFakeAPI();

  return (
    <div className="accessible-task">
      <Checkbox checked={task.checked} onChange={updateChecked} />
      {task.label}
    </div>
  );
};

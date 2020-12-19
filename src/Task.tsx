import * as React from "react";
import "./Task.scss";
import { useFakeAPI } from "./useFakeAPI";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <div
      data-testid="checkbox"
      className="checkbox"
      onClick={() => onChange(!checked)}
    >
      <img
        alt="check icon"
        src="/check.svg"
        style={{ opacity: checked ? 1 : 0 }}
        data-testid="checkIcon"
      />
    </div>
  );
};

export const Task = () => {
  const { task, updateChecked } = useFakeAPI();

  return (
    <div className="task">
      <Checkbox checked={task.checked} onChange={updateChecked} />
      {task.label}
    </div>
  );
};

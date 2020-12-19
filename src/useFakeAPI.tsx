import * as React from "react";

export const useFakeAPI = () => {
  const [checked, setChecked] = React.useState(false);
  // const [loading, setLoading]

  return {
    task: { id: 0, checked, label: "Example Task" },
    updateChecked: setChecked
  };
};

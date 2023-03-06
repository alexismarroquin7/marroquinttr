import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [active, setActive] = useState(initialState ? initialState : false);
  const toggle = () => setActive(!active);

  return {
    active,
    setActive,
    toggle
  };
}
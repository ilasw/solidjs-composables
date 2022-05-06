import {createSignal} from "solid-js";

export const useToggle = (initialStatus: boolean) => {
  const [state, setState] = createSignal(initialStatus);
  const toggle = () => setState(!state());

  return [state, toggle];
}
import {createSignal} from "solid-js";

/**
 * It returns a signal and a function that toggles the signal's value
 * @param {boolean} initialStatus - The initial state of the toggle.
 * @returns A tuple containing a signal and a function.
 */
export const useToggle = (initialStatus: boolean) => {
  const [state, setState] = createSignal(initialStatus);
  const toggle = () => setState(!state());

  return [state, toggle];
}
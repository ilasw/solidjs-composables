import {createSignal} from "solid-js";

/**
 * function that takes an initial value and returns a function that can be used to get and set the value
 * @param initalValue - The initial value of the atom.
 * @returns A function that takes an optional parameter and returns a value.
 */
export const useAtom = <T>(initalValue: T) => {
  const [state, setState] = createSignal<T>(initalValue);

  return (newVal?: T): T => {
    if (typeof newVal !== 'undefined') {
      setState(() => newVal);
    }

    return state();
  }
}
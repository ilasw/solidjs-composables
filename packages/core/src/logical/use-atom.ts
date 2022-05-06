import {createSignal} from "solid-js";

export const useAtom = <T>(initalValue: T) => {
  const [state, setState] = createSignal<T>(initalValue);

  return (newVal?: T): T => {
    if (typeof newVal !== 'undefined') {
      setState(() => newVal);
    }

    return state();
  }
}
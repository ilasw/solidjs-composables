import {createSignal} from "solid-js";
import {useEventListener} from "./use-event-listener";
import {isServer} from "solid-js/web";

export const useWindowSize = () => {
  const [state, setState] = createSignal<{ width: number, height: number } | null>(null);
  const updateState = () => {
    if (isServer) return;

    const {innerHeight, innerWidth} = globalThis;
    return setState({width: innerWidth, height: innerHeight});
  }

  updateState();
  useEventListener('resize', updateState, {passive: true});

  return state;
}
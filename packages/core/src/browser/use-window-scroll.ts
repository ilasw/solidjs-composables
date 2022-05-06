import {createSignal} from "solid-js";
import {useEventListener} from "./use-event-listener";
import {isServer} from "solid-js/web";

export const useWindowScroll = () => {
  const [state, setState] = createSignal<{ top: number, left: number } | null>(null);
  const updateState = () => {
    if (isServer) return;

    const {pageYOffset, scrollY, pageXOffset, scrollX} = globalThis;
    return setState({top: scrollY ?? pageYOffset, left: scrollX ?? pageXOffset});
  }

  updateState();
  useEventListener('scroll', updateState, {passive: true});

  return state;
}
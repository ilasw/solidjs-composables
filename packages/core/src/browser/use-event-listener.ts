import {onCleanup, onMount} from "solid-js";
import {isServer} from "solid-js/web";

export const useEventListener = <E extends keyof WindowEventMap>(
    event: E,
    callback: (this: Window, ev: WindowEventMap[E]) => any,
    options: boolean | AddEventListenerOptions = {}
) => {

  onMount(() => {
    if (isServer) return;
    globalThis.addEventListener(event, callback, options);
  });

  onCleanup(() => {
    if (isServer) return;
    globalThis.removeEventListener(event, callback);
  });
}
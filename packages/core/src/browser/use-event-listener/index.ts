import {onCleanup, onMount} from "solid-js";
import {isServer} from "solid-js/web";

/**
 * It adds an event listener to the window object when the component mounts, and removes it when the component unmounts
 * @param {E} event - The event to listen for.
 * @param callback - The function to be called when the event is fired.
 * @param {boolean | AddEventListenerOptions} options - boolean | AddEventListenerOptions = {}
 */
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
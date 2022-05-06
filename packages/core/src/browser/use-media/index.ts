import {isServer} from "solid-js/web";
import {createSignal, onCleanup, onMount} from "solid-js";

/**
 * It returns an accessor that is either `null` or `true` or `false` depending on whether the media query matches
 * @param {string} query - string - The media query to listen to.
 * @returns An accessor that will update when the media query changes.
 */
export const useMedia = (query: string) => {
  const [state, setState] = createSignal<null | boolean>(null);

  const mediaQuery = globalThis?.matchMedia(query);
  const updateValue = () => setState(mediaQuery?.matches);

  onMount(() => {
    if (isServer) return;

    updateValue();

    if ('addEventListener' in mediaQuery!) {
      mediaQuery.addEventListener('change', updateValue)
    } else {
      mediaQuery?.addListener(updateValue)
    }
  });

  onCleanup(() => {
    if (isServer) return;

    if ('removeEventListener' in mediaQuery!) {
      mediaQuery!.removeEventListener('change', updateValue)
    } else {
      mediaQuery!.removeListener(updateValue)
    }
  })

  return state;
}
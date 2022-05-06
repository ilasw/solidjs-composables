import {isServer} from "solid-js/web";
import {createSignal, onCleanup, onMount} from "solid-js";

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
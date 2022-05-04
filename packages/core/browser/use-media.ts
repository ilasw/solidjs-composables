import {isServer} from "solid-js/web";
import {createEffect, createSignal, onCleanup, onMount} from "solid-js";

const getMatchMedia = (mediaQuery: string, defaultValue?: boolean) => {
  if (isServer) return defaultValue ?? null;

  return !!globalThis?.matchMedia?.(mediaQuery)?.matches;
}

export const useMedia = (mediaQuery: string, defaultValue?: boolean) => {
  const [state, setState] = createSignal(getMatchMedia(mediaQuery, defaultValue));
  const updateValue = () => setState(getMatchMedia(mediaQuery, defaultValue));

  createEffect(() => {
    updateValue()
  }, [mediaQuery]);

  onMount(() => {
    globalThis?.addEventListener?.('resize', updateValue, {passive: true})
  });

  onCleanup(() => {
    globalThis?.removeEventListener?.('resize', updateValue)
  })

  return state;
}
import {createSignal, onCleanup, onMount} from "solid-js";

export const useNetworkState = <T = any>() => {
  const [state, setState] = createSignal<{ isOnline: boolean | null }>({isOnline: null});

  const updateNetworkInformation = () => {
    if (!navigator) return;
    setState({isOnline: navigator.onLine})
  }

  onMount(() => {
    globalThis?.addEventListener?.('offline', updateNetworkInformation, {passive: true});
    globalThis?.addEventListener?.('online', updateNetworkInformation, {passive: true});
    updateNetworkInformation();
  });

  onCleanup(() => {
    globalThis?.removeEventListener?.('offline', updateNetworkInformation)
    globalThis?.removeEventListener?.('online', updateNetworkInformation)
  })

  return state;
}
import {createSignal} from "solid-js";
import {useEventListener} from "../../browser";
import {isServer} from "solid-js/web";

export const useNetworkState = () => {
  const [state, setState] = createSignal<{ isOnline: boolean | null }>({isOnline: null});

  const updateNetworkInformation = () => {
    if (isServer || !navigator) return;
    setState({isOnline: navigator.onLine})
  }

  updateNetworkInformation();
  useEventListener('offline', updateNetworkInformation, {passive: true});
  useEventListener('online', updateNetworkInformation, {passive: true});

  return state;
}
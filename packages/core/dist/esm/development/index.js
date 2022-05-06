// src/browser/use-media.ts
import { isServer } from "solid-js/web";
import { createSignal, onCleanup, onMount } from "solid-js";
var useMedia = (query) => {
  const [state, setState] = createSignal(null);
  const mediaQuery = globalThis == null ? void 0 : globalThis.matchMedia(query);
  const updateValue = () => setState(mediaQuery == null ? void 0 : mediaQuery.matches);
  onMount(() => {
    if (isServer)
      return;
    updateValue();
    if ("addEventListener" in mediaQuery) {
      mediaQuery.addEventListener("change", updateValue);
    } else {
      mediaQuery == null ? void 0 : mediaQuery.addListener(updateValue);
    }
  });
  onCleanup(() => {
    if (isServer)
      return;
    if ("removeEventListener" in mediaQuery) {
      mediaQuery.removeEventListener("change", updateValue);
    } else {
      mediaQuery.removeListener(updateValue);
    }
  });
  return state;
};

// src/logical/use-toggle.ts
import { createSignal as createSignal2 } from "solid-js";
var useToggle = (initialStatus) => {
  const [state, setState] = createSignal2(initialStatus);
  const toggle = () => setState(!state());
  return [state, toggle];
};

// src/network/use-network-state.ts
import { createSignal as createSignal3 } from "solid-js";

// src/browser/use-event-listener.ts
import { onCleanup as onCleanup2, onMount as onMount2 } from "solid-js";
import { isServer as isServer2 } from "solid-js/web";
var useEventListener = (event, callback, options = {}) => {
  onMount2(() => {
    if (isServer2)
      return;
    globalThis.addEventListener(event, callback, options);
  });
  onCleanup2(() => {
    if (isServer2)
      return;
    globalThis.removeEventListener(event, callback);
  });
};

// src/network/use-network-state.ts
import { isServer as isServer3 } from "solid-js/web";
var useNetworkState = () => {
  const [state, setState] = createSignal3({ isOnline: null });
  const updateNetworkInformation = () => {
    if (isServer3 || !navigator)
      return;
    setState({ isOnline: navigator.onLine });
  };
  updateNetworkInformation();
  useEventListener("offline", updateNetworkInformation, { passive: true });
  useEventListener("online", updateNetworkInformation, { passive: true });
  return state;
};
export {
  useMedia,
  useNetworkState,
  useToggle
};
//# sourceMappingURL=index.js.map

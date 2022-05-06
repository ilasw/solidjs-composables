# Solid Composables

Collection of essential Solidjs composition utilities

## 📦 Install

```bash
npm i -S solidjs-use
# or
yarn add solidjs-use
```

## Composable functions

#### Status

- ✅ = Implemented
- ⏩ = Coming next
- ☠️ = Deprecating soon

#### Functions

- Logical
    - ✅ [useAtom](./packages/core/src/logical/use-atom) - utility for using one variable for get/set Accessors;
    - ✅ [useToggle](./packages/core/src/logical/use-toggle) - a boolean switcher with utility functions;
- Browser
    - ✅ [useEventListener](./packages/core/src/browser/use-event-listener) - event listener that unsubscribe on cleanup;
    - ✅ [useMedia](./packages/core/src/browser/use-media) - tracks state of a CSS media query;
    - ✅ [useMouse](./packages/core/src/browser/use-mouse) - track position of mouse/touch on window;
    - ⏩ `usePrefersColor`
    - ⏩ `usePrefersReducedMotion`
    - ⏩ `useUrlSearchParams`
    - ✅ `useWindowSize` - return window size (height and width) in pixels;
    - ✅ `useWindowScroll` - return window scroll position (left, top);
- Storage
    - ⏩ `useCookie`
    - ⏩ `useLocalStorage`
    - ⏩ `useSessionStorage`
- Elements
    - ⏩ `useElementBounding`
    - ⏩ `useElementEventListener` - element attached event listener that unsubscribe on cleanup;
    - ⏩ `useElementScroll`
    - ⏩ `useElementSize`
    - ⏩ `useIntersectionObserver`
    - ⏩ `useMutationObserver`
- Network
    - ✅ `useNetworkState` - tracks state of connection;
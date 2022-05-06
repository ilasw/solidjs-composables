# Solid Composables

Collection of essential Solidjs composition utilities

## 📦 Install

```bash
npm i -S solidjs-composables
# or
yarn add solidjs-composables
```

## Composable functions

#### Status

- ✅ = Implemented
- ⏩ = Coming next
- ☠️ = Deprecating soon

#### Functions

- Logical
    - ✅ `index` - utility for using one variable for get/set Accessors;
    - ✅ `useToggle` - a boolean switcher with utility functions;
- Browser
    - ✅ `useEventListener` - event listener that unsubscribe on cleanup;
    - ✅ `useMedia` - tracks state of a CSS media query;
    - ✅ `useMouse` - track position of mouse/touch on window;
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
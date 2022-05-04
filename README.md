# SolidUse

Collection of essential Solidjs composition utilities

## 📦 Install

```bash
npm i -S solidjs-use
# or
yarn add solidjs-use
```

## Composable functions

#### Legend

- ✅ = Implemented
- ⏩ = Coming next
- ☠️ = Deprecating soon

#### List

- Logical
    - ✅ `useToggle` - a boolean switcher with utility functions;
- Browser
    - ✅ `useMedia` - tracks state of a CSS media query;
    - ⏩ `useMouse`
    - ⏩ `usePrefersColor`
    - ⏩ `usePrefersReducedMotion`
    - ⏩ `useUrlSearchParams`
    - ⏩ `useWindowSize`
    - ⏩ `useWindowScroll`
- Storage
    - ⏩ `useCookie`
    - ⏩ `useLocalStorage`
    - ⏩ `useSessionStorage`
- Elements
    - ⏩ `useElementBounding`
    - ⏩ `useElementScroll`
    - ⏩ `useElementSize`
    - ⏩ `useIntersectionObserver`
    - ⏩ `useMutationObserver`
- Network
    - ✅ `useNetworkState` - tracks state of connection;
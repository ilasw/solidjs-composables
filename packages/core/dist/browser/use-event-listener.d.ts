export declare const useEventListener: <E extends keyof WindowEventMap>(event: E, callback: (this: Window, ev: WindowEventMap[E]) => any, options?: boolean | AddEventListenerOptions) => void;

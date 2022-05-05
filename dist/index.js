var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
define("use-media", ["require", "exports", "solid-js/web", "solid-js"], function (require, exports, web_1, solid_js_1) {
    "use strict";
    exports.__esModule = true;
    exports.useMedia = void 0;
    var getMatchMedia = function (mediaQuery, defaultValue) {
        var _a, _b;
        if (web_1.isServer)
            return defaultValue !== null && defaultValue !== void 0 ? defaultValue : null;
        return !!((_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.matchMedia) === null || _a === void 0 ? void 0 : _a.call(globalThis, mediaQuery)) === null || _b === void 0 ? void 0 : _b.matches);
    };
    var useMedia = function (mediaQuery, defaultValue) {
        var _a = (0, solid_js_1.createSignal)(getMatchMedia(mediaQuery, defaultValue)), state = _a[0], setState = _a[1];
        var updateValue = function () { return setState(getMatchMedia(mediaQuery, defaultValue)); };
        (0, solid_js_1.createEffect)(function () {
            updateValue();
        }, [mediaQuery]);
        (0, solid_js_1.onMount)(function () {
            var _a;
            (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.addEventListener) === null || _a === void 0 ? void 0 : _a.call(globalThis, 'resize', updateValue, { passive: true });
        });
        (0, solid_js_1.onCleanup)(function () {
            var _a;
            (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(globalThis, 'resize', updateValue);
        });
        return state;
    };
    exports.useMedia = useMedia;
});
define("use-toggle", ["require", "exports", "solid-js"], function (require, exports, solid_js_2) {
    "use strict";
    exports.__esModule = true;
    exports.useToggle = void 0;
    var useToggle = function (initialStatus) {
        var _a = (0, solid_js_2.createSignal)(initialStatus), state = _a[0], setState = _a[1];
        var toggle = function () { return setState(!state()); };
        return [state, toggle];
    };
    exports.useToggle = useToggle;
});
define("index", ["require", "exports", "use-media", "use-toggle"], function (require, exports, use_media_1, use_toggle_1) {
    "use strict";
    exports.__esModule = true;
    exports.useToggle = exports.useMedia = void 0;
    __createBinding(exports, use_media_1, "useMedia");
    __createBinding(exports, use_toggle_1, "useToggle");
});

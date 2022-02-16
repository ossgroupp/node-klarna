"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalLoggerFactory = void 0;
function optionalLoggerFactory(config) {
    if (config === void 0) { config = { enabled: false, useNodeEnv: false }; }
    var _a = config.enabled, enabled = _a === void 0 ? false : _a, _b = config.useNodeEnv, useNodeEnv = _b === void 0 ? false : _b;
    var disabledLogger = {
        warn: function () { },
        info: function () { },
        error: function () { },
    };
    if (useNodeEnv && process.env.NODE_ENV === 'production') {
        return disabledLogger;
    }
    if (!enabled && !useNodeEnv) {
        return disabledLogger;
    }
    return {
        info: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return console.log.apply(console, args);
        },
        warn: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return console.warn.apply(console, args);
        },
        error: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return console.error.apply(console, args);
        },
    };
}
exports.optionalLoggerFactory = optionalLoggerFactory;
//# sourceMappingURL=logger.js.map
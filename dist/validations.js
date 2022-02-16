"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = void 0;
function validateConfig(config) {
    var username = config.username, password = config.password;
    if (!username || username === '') {
        return new Error('`username` is mandatory');
    }
    if (!password || password === '') {
        return new Error('`password` is mandatory');
    }
    return null;
}
exports.validateConfig = validateConfig;
//# sourceMappingURL=validations.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSON = void 0;
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (_a) {
        return null;
    }
}
exports.parseJSON = parseJSON;
//# sourceMappingURL=json.js.map
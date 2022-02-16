"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBasicAuthHeader = void 0;
function getBasicAuthHeader(input) {
    var username = input.username, password = input.password;
    return "Basic " + Buffer.from(username + ":" + password).toString('base64');
}
exports.getBasicAuthHeader = getBasicAuthHeader;
//# sourceMappingURL=http.js.map
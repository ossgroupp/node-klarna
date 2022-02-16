"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
var https = __importStar(require("https"));
var utils_1 = require("./utils");
var HttpRequest = /** @class */ (function () {
    function HttpRequest(options) {
        this.authorization = options.authorization;
        this.hostname = options.apiEndpoint;
        this.logger = options.logger;
    }
    HttpRequest.prototype.invoke = function (httpMethod, path, requestBody) {
        var _this = this;
        if (requestBody === void 0) { requestBody = {}; }
        var logger = this.logger;
        return new Promise(function (resolve) {
            var options = {
                method: httpMethod,
                hostname: _this.hostname,
                path: path,
                headers: {
                    'content-type': 'application/json',
                    authorization: _this.authorization,
                },
            };
            var req = https.request(options, function (res) {
                var chunks = [];
                res.on('data', function (chunk) {
                    chunks.push(chunk);
                });
                res.on('end', function () {
                    var _a;
                    var apiResponse = Buffer.concat(chunks).toString();
                    // Check if the response is really from Klarna?
                    if (!((_a = res === null || res === void 0 ? void 0 : res.headers) === null || _a === void 0 ? void 0 : _a['klarna-correlation-id'])) {
                        logger.warn('\x1b[41m', '⚠️ important: api response headers do not contain klarna correlation id', '\x1b[0m');
                    }
                    if (!res.statusCode) {
                        return;
                    }
                    var parsedJSON = utils_1.parseJSON(apiResponse);
                    var response = parsedJSON ? parsedJSON : apiResponse;
                    if (res.statusCode < 200 || res.statusCode >= 300) {
                        return resolve({
                            statusCode: res.statusCode,
                            error: response,
                        });
                    }
                    resolve({
                        statusCode: res.statusCode,
                        response: response,
                    });
                });
            });
            if (requestBody) {
                req.write(JSON.stringify(requestBody));
            }
            req.on('error', function (error) {
                logger.error('Klarna request errored: ' + error.message);
                resolve({ statusCode: 500, error: error });
            });
            req.end();
        });
    };
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=http-request.js.map
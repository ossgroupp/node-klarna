"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Klarna = void 0;
var checkout_v3_1 = require("./api/checkout-v3");
var customer_token_v1_1 = require("./api/customer-token-v1");
var order_management_v1_1 = require("./api/order-management-v1");
var utils_1 = require("./utils");
var validations_1 = require("./validations");
var http_1 = require("./utils/http");
__exportStar(require("./interface"), exports);
__exportStar(require("./osspim-helpers"), exports);
var Klarna = /** @class */ (function () {
    function Klarna(config) {
        var validationError = validations_1.validateConfig(config);
        if (validationError) {
            throw validationError;
        }
        var logger = utils_1.optionalLoggerFactory(config.logs);
        var apiEndpoint = config.apiEndpoint;
        var defaultApiEndpoint = 'api.playground.klarna.com';
        if (!apiEndpoint) {
            logger.warn('\x1b[33m', "\u26A0\uFE0F   apiEndpoint field not provided while initializing library. Default API endpoint set to: " + defaultApiEndpoint + " [Test EU]", '\x1b[0m');
        }
        var options = {
            apiEndpoint: apiEndpoint || defaultApiEndpoint,
            authorization: http_1.getBasicAuthHeader(config),
            logger: logger,
        };
        this.checkoutV3 = new checkout_v3_1.CheckoutV3(options);
        this.customerTokenV1 = new customer_token_v1_1.CustomerTokenV1(options);
        this.orderManagementV1 = new order_management_v1_1.OrderManagementV1(options);
    }
    return Klarna;
}());
exports.Klarna = Klarna;
//# sourceMappingURL=index.js.map
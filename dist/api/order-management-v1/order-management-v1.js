"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManagementV1 = void 0;
var orders_1 = require("./orders");
var captures_1 = require("./captures");
var refunds_1 = require("./refunds");
/**
 * Docs: https://developers.klarna.com/api/#order-management-api
 */
var OrderManagementV1 = /** @class */ (function () {
    function OrderManagementV1(options) {
        this.orders = new orders_1.Orders(options);
        this.captures = new captures_1.Captures(options);
        this.refunds = new refunds_1.Refunds(options);
    }
    return OrderManagementV1;
}());
exports.OrderManagementV1 = OrderManagementV1;
//# sourceMappingURL=order-management-v1.js.map
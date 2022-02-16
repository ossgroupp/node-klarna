"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutV3 = void 0;
var http_request_1 = require("../../http-request");
/*
 * Documentation: https://developers.klarna.com/api/#checkout-api
 */
var CheckoutV3 = /** @class */ (function (_super) {
    __extends(CheckoutV3, _super);
    function CheckoutV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
      Documentation: https://developers.klarna.com/api/#checkout-api-create-a-new-order
    */
    CheckoutV3.prototype.createOrder = function (body) {
        return this.invoke("POST", "/checkout/v3/orders", body);
    };
    /*
      Documentation: https://developers.klarna.com/api/#checkout-api-retrieve-an-order
    */
    CheckoutV3.prototype.retrieveOrder = function (orderId) {
        if (!orderId) {
            this.logger.warn('\x1b[33m', '⚠️   Order ID is required to fetch an order', '\x1b[0m');
        }
        return this.invoke("GET", "/checkout/v3/orders/" + orderId);
    };
    /*
      Documentation: https://developers.klarna.com/api/#checkout-api-update-an-order
    */
    CheckoutV3.prototype.updateOrder = function (orderId, body) {
        if (!orderId) {
            this.logger.warn('\x1b[33m', '⚠️   Order ID is required to update an order', '\x1b[0m');
        }
        return this.invoke("POST", "/checkout/v3/orders/" + orderId, body);
    };
    return CheckoutV3;
}(http_request_1.HttpRequest));
exports.CheckoutV3 = CheckoutV3;
//# sourceMappingURL=checkout-v3.js.map
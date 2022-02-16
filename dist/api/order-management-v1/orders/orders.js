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
exports.Orders = void 0;
var http_request_1 = require("../../../http-request");
var Orders = /** @class */ (function (_super) {
    __extends(Orders, _super);
    function Orders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * https://developers.klarna.com/api/#order-management-api-acknowledge-order
     */
    Orders.prototype.acknowledge = function (orderId) {
        return this.invoke("POST", "/ordermanagement/v1/orders/" + orderId + "/acknowledge");
    };
    /**
     * https://developers.klarna.com/api/#order-management-api-cancel-order
     */
    Orders.prototype.cancel = function (orderId) {
        return this.invoke("POST", "/ordermanagement/v1/orders/" + orderId + "/cancel", {});
    };
    /**
     * https://developers.klarna.com/api/#order-management-api-release-remaining-authorization
     */
    Orders.prototype.releaseRemainingAuthorization = function (orderId) {
        return this.invoke("POST", "/ordermanagement/v1/orders/" + orderId + "/release-remaining-authorization", {});
    };
    /**
     * https://developers.klarna.com/api/#order-management-api-update-merchant-references
     */
    Orders.prototype.updateMerchantReference = function (orderId, body) {
        return this.invoke("PATCH", "/ordermanagement/v1/orders/" + orderId + "/merchant-references", body);
    };
    Orders.prototype.getOrder = function (orderId) {
        return this.invoke("GET", "/ordermanagement/v1/orders/" + orderId);
    };
    return Orders;
}(http_request_1.HttpRequest));
exports.Orders = Orders;
//# sourceMappingURL=orders.js.map
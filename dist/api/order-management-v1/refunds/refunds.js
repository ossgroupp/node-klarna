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
exports.Refunds = void 0;
var http_request_1 = require("../../../http-request");
var Refunds = /** @class */ (function (_super) {
    __extends(Refunds, _super);
    function Refunds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * https://developers.klarna.com/api/#order-management-api-create-a-refund
     */
    Refunds.prototype.create = function (orderId, body) {
        return this.invoke("POST", "/ordermanagement/v1/orders/" + orderId + "/refunds", body);
    };
    return Refunds;
}(http_request_1.HttpRequest));
exports.Refunds = Refunds;
//# sourceMappingURL=refunds.js.map
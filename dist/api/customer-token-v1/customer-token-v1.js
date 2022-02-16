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
exports.CustomerTokenV1 = void 0;
var http_request_1 = require("../../http-request");
/**
 * Docs: https://developers.klarna.com/documentation/klarna-payments/integration-guide/place-order/#4-3-place-recurring-order-tokenization
 */
var CustomerTokenV1 = /** @class */ (function (_super) {
    __extends(CustomerTokenV1, _super);
    function CustomerTokenV1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerTokenV1.prototype.order = function (token, body) {
        return this.invoke("POST", "/customer-token/v1/tokens/" + token + "/order", body);
    };
    return CustomerTokenV1;
}(http_request_1.HttpRequest));
exports.CustomerTokenV1 = CustomerTokenV1;
//# sourceMappingURL=customer-token-v1.js.map
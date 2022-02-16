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
exports.Captures = void 0;
var http_request_1 = require("../../../http-request");
var Captures = /** @class */ (function (_super) {
    __extends(Captures, _super);
    function Captures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * https://developers.klarna.com/api/#order-management-api-create-capture
     */
    Captures.prototype.capture = function (orderId, body) {
        return this.invoke("POST", "/ordermanagement/v1/orders/" + orderId + "/captures", body);
    };
    return Captures;
}(http_request_1.HttpRequest));
exports.Captures = Captures;
//# sourceMappingURL=captures.js.map
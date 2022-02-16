"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSSPIMKlarnaHelpers = void 0;
var utils_1 = require("./utils");
function getPackageDefaults(host_uri) {
    return {
        host_uri: host_uri,
        purchase_country: 'NO',
        purchase_currency: 'NOK',
        locale: 'nb-NO',
        merchant_urls: {
            terms: host_uri + "/salgsbetingelser/",
            checkout: host_uri + "/checkout",
            confirmation: host_uri + "/confirmation/?orderId={checkout.order.id}",
            push: host_uri + "/klarna/push/{checkout.order.id}",
        },
        shipping_options: [
            {
                id: '1',
                name: 'Hjemlevering',
                description: 'Rett i postkassen',
                price: 4900,
                tax_amount: 639,
                tax_rate: 1500,
                preselected: true,
            },
        ],
    };
}
var OSSPIMKlarnaHelpers = /** @class */ (function () {
    function OSSPIMKlarnaHelpers(defaults) {
        var logger = utils_1.optionalLoggerFactory(defaults.logs);
        if (!(defaults === null || defaults === void 0 ? void 0 : defaults.host_uri)) {
            logger.warn('\x1b[33m', '⚠️   host_uri property is mandatory while initialising OSSPIMKlarnaHelpers', '\x1b[0m');
        }
        this.defaults = defaults;
    }
    OSSPIMKlarnaHelpers.prototype.getKlarnaOrderLines = function (lineItems) {
        var _this = this;
        var order_tax_amount = 0;
        var order_amount = 0;
        var order_lines = lineItems.map(function (item) {
            order_tax_amount += item.vatAmount * 100;
            // Klarna represents numbers as number * 100
            // Ex: 11.59 becomes 1159. 9 becomes 900
            var amount = item.price * 100 * item.quantity;
            order_amount += amount;
            return {
                name: item.name,
                reference: item.sku,
                quantity: item.quantity,
                tax_rate: item.taxGroup.percent * 100 || 0,
                unit_price: item.price * 100,
                merchant_data: JSON.stringify({
                    productId: item.id,
                    subscription: _this.isSubscription([item]),
                }),
                image_url: item.image.url,
                total_amount: amount,
                total_tax_amount: item.vatAmount * 100,
            };
        });
        return {
            order_lines: order_lines,
            order_amount: order_amount,
            order_tax_amount: order_tax_amount,
        };
    };
    OSSPIMKlarnaHelpers.prototype.isSubscription = function (lineItems) {
        return lineItems.some(function (item) { var _a; return item.isSubscriptionOnly || ((_a = item === null || item === void 0 ? void 0 : item.subscriptionPlans) === null || _a === void 0 ? void 0 : _a.length) > 0; });
    };
    OSSPIMKlarnaHelpers.prototype.getOrderBody = function (lineItems) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var _m = this.getKlarnaOrderLines(lineItems), order_lines = _m.order_lines, order_amount = _m.order_amount, order_tax_amount = _m.order_tax_amount;
        var packageDefaults = getPackageDefaults(this.defaults.host_uri);
        // Something to look into: Will the merchant urls or purchase currency be different for separate orders?
        var orderBody = {
            purchase_country: ((_a = this.defaults) === null || _a === void 0 ? void 0 : _a.purchase_country) || packageDefaults.purchase_currency,
            purchase_currency: this.defaults.purchase_currency || packageDefaults.purchase_currency,
            locale: this.defaults.locale || packageDefaults.locale,
            merchant_urls: {
                terms: ((_b = this.defaults.merchant_urls) === null || _b === void 0 ? void 0 : _b.terms) ||
                    ((_c = packageDefaults.merchant_urls) === null || _c === void 0 ? void 0 : _c.terms),
                checkout: ((_d = this.defaults.merchant_urls) === null || _d === void 0 ? void 0 : _d.checkout) ||
                    ((_e = packageDefaults.merchant_urls) === null || _e === void 0 ? void 0 : _e.checkout),
                confirmation: ((_g = (_f = this.defaults) === null || _f === void 0 ? void 0 : _f.merchant_urls) === null || _g === void 0 ? void 0 : _g.confirmation) ||
                    ((_h = packageDefaults === null || packageDefaults === void 0 ? void 0 : packageDefaults.merchant_urls) === null || _h === void 0 ? void 0 : _h.confirmation),
                push: ((_j = this.defaults.merchant_urls) === null || _j === void 0 ? void 0 : _j.push) ||
                    ((_k = packageDefaults.merchant_urls) === null || _k === void 0 ? void 0 : _k.push),
            },
            shipping_options: ((_l = this.defaults) === null || _l === void 0 ? void 0 : _l.shipping_options) || (packageDefaults === null || packageDefaults === void 0 ? void 0 : packageDefaults.shipping_options),
            order_lines: order_lines,
            order_tax_amount: order_tax_amount,
            order_amount: order_amount,
            recurring: this.isSubscription(lineItems),
        };
        return orderBody;
    };
    return OSSPIMKlarnaHelpers;
}());
exports.OSSPIMKlarnaHelpers = OSSPIMKlarnaHelpers;
//# sourceMappingURL=osspim-helpers.js.map
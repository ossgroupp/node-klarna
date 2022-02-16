import { MerchantUrls, ShippingOption, OrderBody, OrderLine } from './api/checkout-v3';
import { OptionalLogConfig } from './utils';
export interface Defaults {
    host_uri: string;
    purchase_country?: string;
    purchase_currency?: string;
    locale?: string;
    merchant_urls?: MerchantUrls;
    shipping_options?: Array<ShippingOption>;
    logs?: OptionalLogConfig;
}
interface SubscriptionPlan {
    id: string;
    initialPeriod: number;
    initialPrice: number;
    name: string;
    recurringPeriod: number;
    recurringPrice: number;
}
export interface Attribute {
    attributes: string;
    value: string;
}
export interface OSSPIMLineItem {
    id: string;
    name: string;
    basketId: string;
    path: string;
    sku: string;
    price: number;
    isDefault: boolean;
    priceWithoutVat: number;
    quantity: number;
    stock: number;
    isSubscriptionOnly: boolean;
    subscriptionPlans: Array<SubscriptionPlan>;
    vatAmount: number;
    taxGroup: {
        name: string;
        percent: number;
    };
    image: {
        url: string;
    };
    variantId: string;
    attributes: Attribute[];
}
interface ParsedOrderLines {
    order_lines: Array<OrderLine>;
    order_tax_amount: number;
    order_amount: number;
}
export declare class OSSPIMKlarnaHelpers {
    defaults: Defaults;
    constructor(defaults: Defaults);
    getKlarnaOrderLines(lineItems: Array<OSSPIMLineItem>): ParsedOrderLines;
    isSubscription(lineItems: Array<OSSPIMLineItem>): boolean;
    getOrderBody(lineItems: Array<OSSPIMLineItem>): OrderBody;
}
export {};

import { CheckoutV3 } from './api/checkout-v3';
import { CustomerTokenV1 } from './api/customer-token-v1';
import { OrderManagementV1 } from './api/order-management-v1';
import { Config } from './interface';
export * from './interface';
export * from './osspim-helpers';
export declare class Klarna {
    checkoutV3: CheckoutV3;
    customerTokenV1: CustomerTokenV1;
    orderManagementV1: OrderManagementV1;
    constructor(config: Config);
}

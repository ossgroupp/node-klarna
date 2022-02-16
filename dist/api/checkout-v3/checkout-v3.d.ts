import { HttpRequest } from '../../http-request';
import { OrderBody, OrderResponse } from './interface';
export declare class CheckoutV3 extends HttpRequest {
    createOrder(body: OrderBody): Promise<OrderResponse>;
    retrieveOrder(orderId: string): Promise<OrderResponse>;
    updateOrder(orderId: string, body: OrderBody): Promise<OrderResponse>;
}

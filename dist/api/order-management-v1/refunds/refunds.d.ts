import { HttpRequest, Response } from '../../../http-request';
import { RefundBody } from './interface';
export declare class Refunds extends HttpRequest {
    /**
     * https://developers.klarna.com/api/#order-management-api-create-a-refund
     */
    create(orderId: string, body: RefundBody): Promise<Response>;
}

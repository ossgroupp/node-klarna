import { HttpRequest, Response } from '../../../http-request';
import { UpdateMerchantReferenceBody } from './interface';
export declare class Orders extends HttpRequest {
    /**
     * https://developers.klarna.com/api/#order-management-api-acknowledge-order
     */
    acknowledge(orderId: string): Promise<Response>;
    /**
     * https://developers.klarna.com/api/#order-management-api-cancel-order
     */
    cancel(orderId: string): Promise<Response>;
    /**
     * https://developers.klarna.com/api/#order-management-api-release-remaining-authorization
     */
    releaseRemainingAuthorization(orderId: string): Promise<Response>;
    /**
     * https://developers.klarna.com/api/#order-management-api-update-merchant-references
     */
    updateMerchantReference(orderId: string, body: UpdateMerchantReferenceBody): Promise<Response>;
    getOrder(orderId: string): Promise<Response>;
}

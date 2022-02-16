import { HttpRequest, Response } from '../../../http-request';
import { CaptureBody } from './interface';
export declare class Captures extends HttpRequest {
    /**
     * https://developers.klarna.com/api/#order-management-api-create-capture
     */
    capture(orderId: string, body: CaptureBody): Promise<Response>;
}

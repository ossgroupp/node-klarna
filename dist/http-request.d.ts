import { Logger } from './utils';
export interface Options {
    authorization: string;
    apiEndpoint: string;
    logger: Logger;
}
export interface Response {
    statusCode: number;
    error?: string | Error | any;
    response?: string | any;
}
export declare class HttpRequest {
    protected readonly authorization: string;
    protected readonly hostname: string;
    protected readonly logger: Logger;
    constructor(options: Options);
    invoke(httpMethod: string, path: string, requestBody?: {}): Promise<Response>;
}

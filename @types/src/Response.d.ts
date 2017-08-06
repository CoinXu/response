/**
 * Created by asd on 17-8-5.
 */
import { StatusStruct } from './http-response-status';
export interface ResponseStruct<T> {
    code: number;
    type: string;
    body: T;
}
export declare class Response<T> {
    private code;
    private body;
    private type;
    constructor(code: number, body: T, type: string);
    serialize(): ResponseStruct<T>;
    static struct(struct: StatusStruct): ResponseStruct<string>;
    /**
     * 发送状态码
     * @param {Number} code
     * @param {String} body
     * @param {String} type
     * @return {ResponseStruct<string>}
     * @example
     * ```js
     * Response.status(200, 'ok')
     * ```
     */
    static status(code: number, body: string, type?: string): ResponseStruct<string>;
    /**
     * @param body
     * @param type
     * @return {ResponseStruct}
     * @example
     * ```js
     * Response.ok()
     * Response.ok('{"id":"a"}', MEDIA_TYPES.APPLICATION_JSON)
     * ```
     */
    static ok<U>(body: U, type?: string): ResponseStruct<U>;
    static noContent(): ResponseStruct<string>;
    static seeOther(): ResponseStruct<string>;
    static notModified(): ResponseStruct<string>;
    static unused(): ResponseStruct<string>;
    static badRequest(): ResponseStruct<string>;
    static unauthorized(): ResponseStruct<string>;
    static forbidden(): ResponseStruct<string>;
    static notFount(): ResponseStruct<string>;
    static methodNotAllowed(): ResponseStruct<string>;
    static notAcceptable(): ResponseStruct<string>;
    static requestTimeout(): ResponseStruct<string>;
    static conflict(): ResponseStruct<string>;
    static gone(): ResponseStruct<string>;
    static lengthRequired(): ResponseStruct<string>;
    static requestEntityTooLarge(): ResponseStruct<string>;
    static requestURITooLong(): ResponseStruct<string>;
    static unsupportedMediaType(): ResponseStruct<string>;
    static expectationFailed(): ResponseStruct<string>;
    static internalServerError(): ResponseStruct<string>;
    static notImplemented(): ResponseStruct<string>;
    static badGateway(): ResponseStruct<string>;
    static serviceUnavailable(): ResponseStruct<string>;
    static gatewayTimeout(): ResponseStruct<string>;
    static httpVersionNotSupported(): ResponseStruct<string>;
}

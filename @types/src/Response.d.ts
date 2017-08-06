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
    static struct(struct: StatusStruct, body?: string): ResponseStruct<string>;
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
    static noContent(body?: string): ResponseStruct<string>;
    static seeOther(body?: string): ResponseStruct<string>;
    static notModified(body?: string): ResponseStruct<string>;
    static unused(body?: string): ResponseStruct<string>;
    static badRequest(body?: string): ResponseStruct<string>;
    static unauthorized(body?: string): ResponseStruct<string>;
    static forbidden(body?: string): ResponseStruct<string>;
    static notFount(body?: string): ResponseStruct<string>;
    static methodNotAllowed(body?: string): ResponseStruct<string>;
    static notAcceptable(body?: string): ResponseStruct<string>;
    static requestTimeout(body?: string): ResponseStruct<string>;
    static conflict(body?: string): ResponseStruct<string>;
    static gone(body?: string): ResponseStruct<string>;
    static lengthRequired(body?: string): ResponseStruct<string>;
    static requestEntityTooLarge(body?: string): ResponseStruct<string>;
    static requestURITooLong(body?: string): ResponseStruct<string>;
    static unsupportedMediaType(body?: string): ResponseStruct<string>;
    static expectationFailed(body?: string): ResponseStruct<string>;
    static internalServerError(body?: string): ResponseStruct<string>;
    static notImplemented(body?: string): ResponseStruct<string>;
    static badGateway(body?: string): ResponseStruct<string>;
    static serviceUnavailable(body?: string): ResponseStruct<string>;
    static gatewayTimeout(body?: string): ResponseStruct<string>;
    static httpVersionNotSupported(body?: string): ResponseStruct<string>;
}

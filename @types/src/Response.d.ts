/**
 * Created by asd on 17-8-5.
 */
import { Status } from './http-response-status';
export interface ResponseStruct<T> {
    code: number;
    type: string;
    body: T;
}
export declare class Response {
    static struct<T>(body: T, code: number, type: string): ResponseStruct<T>;
    /**
     * 发送状态码
     * @param {Status} status
     * @return {ResponseStruct<string>}
     * @example
     * ```js
     * Response.status(HTTP_RESPONSE_STATUS.OK)
     * ```
     */
    static status(status: Status): ResponseStruct<string>;
    /**
     * @param body
     * @param type
     * @return {ResponseStruct}
     * @example
     * ```js
     * Response.ok('{"id":"a"}', MEDIA_TYPES.APPLICATION_JSON)
     * ```
     */
    static ok<T>(body: T, type?: string): ResponseStruct<T>;
    static noContent<T>(body: T, type?: string): ResponseStruct<T>;
    static seeOther<T>(body: T, type?: string): ResponseStruct<T>;
    static notModified<T>(body: T, type?: string): ResponseStruct<T>;
    static unused<T>(body: T, type?: string): ResponseStruct<T>;
    static badRequest<T>(body: T, type?: string): ResponseStruct<T>;
    static unauthorized<T>(body: T, type?: string): ResponseStruct<T>;
    static forbidden<T>(body: T, type?: string): ResponseStruct<T>;
    static notFount<T>(body: T, type?: string): ResponseStruct<T>;
    static methodNotAllowed<T>(body: T, type?: string): ResponseStruct<T>;
    static notAcceptable<T>(body: T, type?: string): ResponseStruct<T>;
    static requestTimeout<T>(body: T, type?: string): ResponseStruct<T>;
    static conflict<T>(body: T, type?: string): ResponseStruct<T>;
    static gone<T>(body: T, type?: string): ResponseStruct<T>;
    static lengthRequired<T>(body: T, type?: string): ResponseStruct<T>;
    static requestEntityTooLarge<T>(body: T, type?: string): ResponseStruct<T>;
    static requestURITooLong<T>(body: T, type?: string): ResponseStruct<T>;
    static unsupportedMediaType<T>(body: T, type?: string): ResponseStruct<T>;
    static expectationFailed<T>(body: T, type?: string): ResponseStruct<T>;
    static internalServerError<T>(body: T, type?: string): ResponseStruct<T>;
    static notImplemented<T>(body: T, type?: string): ResponseStruct<T>;
    static badGateway<T>(body: T, type?: string): ResponseStruct<T>;
    static serviceUnavailable<T>(body: T, type?: string): ResponseStruct<T>;
    static gatewayTimeout<T>(body: T, type?: string): ResponseStruct<T>;
    static httpVersionNotSupported<T>(body: T, type?: string): ResponseStruct<T>;
}

"use strict";
/**
 * Created by asd on 17-8-5.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const http_response_status_1 = require("./http-response-status");
const media_types_1 = require("./media-types");
class Response {
    constructor(code, body, type) {
        this.code = code;
        this.body = body;
        this.type = type;
    }
    serialize() {
        return {
            code: this.code,
            type: this.type,
            body: this.body
        };
    }
    static struct(struct) {
        return new Response(struct.code, struct.body, media_types_1.MEDIA_TYPES.TEXT_PLAIN).serialize();
    }
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
    static status(code, body, type = media_types_1.MEDIA_TYPES.TEXT_PLAIN) {
        return new Response(code, body, type).serialize();
    }
    // ========= static =========
    // ========= 2xx =========
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
    static ok(body, type = media_types_1.MEDIA_TYPES.TEXT_PLAIN) {
        return new Response(http_response_status_1.HTTP_RESPONSE_STATUS.Ok.code, body, type).serialize();
    }
    static noContent() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NoContent);
    }
    // ========= 3xx =========
    static seeOther() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.SeeOther);
    }
    static notModified() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NotModified);
    }
    static unused() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.Unused);
    }
    // ========= 4xx =========
    static badRequest() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BadRequest);
    }
    static unauthorized() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BadRequest);
    }
    static forbidden() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BadRequest);
    }
    static notFount() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NotFount);
    }
    static methodNotAllowed() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.MethodNotAllowed);
    }
    static notAcceptable() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NotAcceptable);
    }
    static requestTimeout() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.RequestTimeout);
    }
    static conflict() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.Conflict);
    }
    static gone() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.Gone);
    }
    static lengthRequired() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.LengthRequired);
    }
    static requestEntityTooLarge() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.RequestEntityTooLarge);
    }
    static requestURITooLong() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.RequestURITooLong);
    }
    static unsupportedMediaType() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.UnsupportedMediaType);
    }
    static expectationFailed() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.ExpectationFailed);
    }
    // ========= 5xx =========
    static internalServerError() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.InternalServerError);
    }
    static notImplemented() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NotImplemented);
    }
    static badGateway() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BadGateway);
    }
    static serviceUnavailable() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.ServiceUnavailable);
    }
    static gatewayTimeout() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.GatewayTimeout);
    }
    static httpVersionNotSupported() {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.HTTPVersionNotSupported);
    }
}
exports.Response = Response;

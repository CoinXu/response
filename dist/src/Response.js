"use strict";
/**
 * Created by asd on 17-8-5.
 */
exports.__esModule = true;
var http_response_status_1 = require("./http-response-status");
var media_types_1 = require("./media-types");
var Response = (function () {
    function Response(code, body, type) {
        this.code = code;
        this.body = body;
        this.type = type;
    }
    Response.prototype.serialize = function () {
        return {
            code: this.code,
            type: this.type,
            body: this.body
        };
    };
    Response.struct = function (struct, body) {
        return new Response(struct.code, body || struct.body, media_types_1.MEDIA_TYPES.TEXT_PLAIN).serialize();
    };
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
    Response.status = function (code, body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return new Response(code, body, type).serialize();
    };
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
    Response.ok = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return new Response(http_response_status_1.HTTP_RESPONSE_STATUS.OK.code, body, type).serialize();
    };
    Response.noContent = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NO_CONTENT, body);
    };
    // ========= 3xx =========
    Response.seeOther = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.SEE_OTHER, body);
    };
    Response.notModified = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NOT_MODIFIED, body);
    };
    Response.unused = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.UNUSED, body);
    };
    // ========= 4xx =========
    Response.badRequest = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BAD_REQUEST, body);
    };
    Response.unauthorized = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.UNAUTHORIZED, body);
    };
    Response.forbidden = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.FORBIDDEN, body);
    };
    Response.notFount = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NOT_FOUNT, body);
    };
    Response.methodNotAllowed = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.METHOD_NOT_ALLOWED, body);
    };
    Response.notAcceptable = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NOT_ACCEPTABLE, body);
    };
    Response.requestTimeout = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.REQUEST_TIMEOUT, body);
    };
    Response.conflict = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.CONFLICT, body);
    };
    Response.gone = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.GONE, body);
    };
    Response.lengthRequired = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.LENGTH_REQUIRED, body);
    };
    Response.requestEntityTooLarge = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.REQUEST_ENTITY_TOO_LARGE, body);
    };
    Response.requestURITooLong = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.REQUEST_URI_TOO_LONG, body);
    };
    Response.unsupportedMediaType = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.UNSUPPORTED_MEDIA_TYPE, body);
    };
    Response.expectationFailed = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.EXPECTATION_FAILED, body);
    };
    // ========= 5xx =========
    Response.internalServerError = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.INTERNAL_SERVERERROR, body);
    };
    Response.notImplemented = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NOT_IMPLEMENTED, body);
    };
    Response.badGateway = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BAD_GATEWAY, body);
    };
    Response.serviceUnavailable = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.SERVICE_UNAVAILABLE, body);
    };
    Response.gatewayTimeout = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.GATEWAY_TIMEOUT, body);
    };
    Response.httpVersionNotSupported = function (body) {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED, body);
    };
    return Response;
}());
exports.Response = Response;

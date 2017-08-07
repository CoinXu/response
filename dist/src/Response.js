"use strict";
/**
 * Created by asd on 17-8-5.
 */
exports.__esModule = true;
var http_response_status_1 = require("./http-response-status");
var media_types_1 = require("./media-types");
var Response = (function () {
    function Response() {
    }
    Response.struct = function (body, code, type) {
        return { body: body, code: code, type: type };
    };
    /**
     * 发送状态码
     * @param {Status} status
     * @return {ResponseStruct<string>}
     * @example
     * ```js
     * Response.status(HTTP_RESPONSE_STATUS.OK)
     * ```
     */
    Response.status = function (status) {
        return this.struct(status.body, status.code, media_types_1.MEDIA_TYPES.TEXT_PLAIN);
    };
    // ======================
    // Successful
    // 2xx
    /**
     * @param body
     * @param type
     * @return {ResponseStruct}
     * @example
     * ```js
     * Response.ok('{"id":"a"}', MEDIA_TYPES.APPLICATION_JSON)
     * ```
     */
    Response.ok = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.OK.code, type);
    };
    Response.noContent = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.NO_CONTENT.code, type);
    };
    // ======================
    // Multiple Choices
    // 3xx
    Response.seeOther = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.SEE_OTHER.code, type);
    };
    Response.notModified = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.NOT_MODIFIED.code, type);
    };
    Response.unused = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.UNUSED.code, type);
    };
    // ======================
    // Client Error
    // 4xx
    Response.badRequest = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.BAD_REQUEST.code, type);
    };
    Response.unauthorized = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.UNAUTHORIZED.code, type);
    };
    Response.forbidden = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.FORBIDDEN.code, type);
    };
    Response.notFount = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.NOT_FOUNT.code, type);
    };
    Response.methodNotAllowed = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.METHOD_NOT_ALLOWED.code, type);
    };
    Response.notAcceptable = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.NOT_ACCEPTABLE.code, type);
    };
    Response.requestTimeout = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.REQUEST_TIMEOUT.code, type);
    };
    Response.conflict = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.CONFLICT.code, type);
    };
    Response.gone = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.GONE.code, type);
    };
    Response.lengthRequired = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.LENGTH_REQUIRED.code, type);
    };
    Response.requestEntityTooLarge = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.REQUEST_ENTITY_TOO_LARGE.code, type);
    };
    Response.requestURITooLong = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.REQUEST_URI_TOO_LONG.code, type);
    };
    Response.unsupportedMediaType = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.UNSUPPORTED_MEDIA_TYPE.code, type);
    };
    Response.expectationFailed = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.EXPECTATION_FAILED.code, type);
    };
    // ======================
    // Server Error
    // 5xx
    Response.internalServerError = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.INTERNAL_SERVERERROR.code, type);
    };
    Response.notImplemented = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.NOT_IMPLEMENTED.code, type);
    };
    Response.badGateway = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.BAD_GATEWAY.code, type);
    };
    Response.serviceUnavailable = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.SERVICE_UNAVAILABLE.code, type);
    };
    Response.gatewayTimeout = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.GATEWAY_TIMEOUT.code, type);
    };
    Response.httpVersionNotSupported = function (body, type) {
        if (type === void 0) { type = media_types_1.MEDIA_TYPES.TEXT_PLAIN; }
        return this.struct(body, http_response_status_1.HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED.code, type);
    };
    return Response;
}());
exports.Response = Response;

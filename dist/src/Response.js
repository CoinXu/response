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
    Response.struct = function (struct) {
        return new Response(struct.code, struct.body, media_types_1.MEDIA_TYPES.TEXT_PLAIN).serialize();
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
        return new Response(http_response_status_1.HTTP_RESPONSE_STATUS.Ok.code, body, type).serialize();
    };
    Response.noContent = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NoContent);
    };
    // ========= 3xx =========
    Response.seeOther = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.SeeOther);
    };
    Response.notModified = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NotModified);
    };
    Response.unused = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.Unused);
    };
    // ========= 4xx =========
    Response.badRequest = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BadRequest);
    };
    Response.unauthorized = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BadRequest);
    };
    Response.forbidden = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BadRequest);
    };
    Response.notFount = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NotFount);
    };
    Response.methodNotAllowed = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.MethodNotAllowed);
    };
    Response.notAcceptable = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NotAcceptable);
    };
    Response.requestTimeout = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.RequestTimeout);
    };
    Response.conflict = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.Conflict);
    };
    Response.gone = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.Gone);
    };
    Response.lengthRequired = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.LengthRequired);
    };
    Response.requestEntityTooLarge = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.RequestEntityTooLarge);
    };
    Response.requestURITooLong = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.RequestURITooLong);
    };
    Response.unsupportedMediaType = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.UnsupportedMediaType);
    };
    Response.expectationFailed = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.ExpectationFailed);
    };
    // ========= 5xx =========
    Response.internalServerError = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.InternalServerError);
    };
    Response.notImplemented = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.NotImplemented);
    };
    Response.badGateway = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.BadGateway);
    };
    Response.serviceUnavailable = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.ServiceUnavailable);
    };
    Response.gatewayTimeout = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.GatewayTimeout);
    };
    Response.httpVersionNotSupported = function () {
        return Response.struct(http_response_status_1.HTTP_RESPONSE_STATUS.HTTPVersionNotSupported);
    };
    return Response;
}());
exports.Response = Response;

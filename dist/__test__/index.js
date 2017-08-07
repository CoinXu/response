"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   05/08/2017
 * @description
 */
exports.__esModule = true;
var src_1 = require("../src");
var assert_1 = require("assert");
require("mocha");
function isType(type) {
    return function (v) {
        return Object.prototype.toString.call(v) === "[object " + type + "]";
    };
}
var isString = isType('String');
var isNumber = isType('Number');
var isObject = isType('Object');
var body;
var code;
var type;
// instance
var struct = src_1.Response.struct(src_1.HTTP_RESPONSE_STATUS.OK.body, src_1.HTTP_RESPONSE_STATUS.OK.code, src_1.MEDIA_TYPES.TEXT_PLAIN);
describe('Response', function () {
    it('new Response', function () {
        body = struct.body;
        code = struct.code;
        type = struct.type;
        assert_1.ok(isString(body));
        assert_1.ok(isNumber(code));
        assert_1.ok(isString(type));
    });
    it('Use Interface structure', function () {
        var sres = src_1.Response.struct({ id: 'id', name: 'name', age: 1 }, src_1.HTTP_RESPONSE_STATUS.OK.code, src_1.MEDIA_TYPES.APPLICATION_JSON);
        var sbody = sres.body;
        code = sres.code;
        type = sres.type;
        assert_1.ok(isObject(sbody));
        assert_1.ok(isNumber(code));
        assert_1.ok(isString(type));
        var res01 = src_1.Response.ok({ id: 'id', name: 'name', age: 1 });
        assert_1.ok(isObject(res01.body));
        assert_1.ok(isNumber(res01.code));
        assert_1.ok(isString(res01.type));
    });
    // stati cmethods
    var responseArr = [
        ['Response.struct', src_1.Response.struct(src_1.HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED.body, src_1.HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED.code, src_1.MEDIA_TYPES.TEXT_PLAIN)],
        ['Response.status', src_1.Response.status(src_1.HTTP_RESPONSE_STATUS.BAD_REQUEST)],
        // 2xx
        ['Response.noContent', src_1.Response.noContent(src_1.HTTP_RESPONSE_STATUS.NO_CONTENT.body)],
        // 3xx
        ['Response.seeOther', src_1.Response.ok('ok')],
        ['Response.notModified', src_1.Response.notModified(src_1.HTTP_RESPONSE_STATUS.NOT_MODIFIED.body)],
        ['Response.unused', src_1.Response.unused(src_1.HTTP_RESPONSE_STATUS.UNUSED.body)],
        // 4xx
        ['Response.badRequest', src_1.Response.badRequest(src_1.HTTP_RESPONSE_STATUS.BAD_REQUEST.body)],
        ['Response.unauthorized', src_1.Response.unauthorized(src_1.HTTP_RESPONSE_STATUS.UNAUTHORIZED.body)],
        ['Response.forbidden', src_1.Response.forbidden(src_1.HTTP_RESPONSE_STATUS.FORBIDDEN.body)],
        ['Response.notFount', src_1.Response.notFount(src_1.HTTP_RESPONSE_STATUS.NOT_FOUNT.body)],
        ['Response.methodNotAllowed', src_1.Response.methodNotAllowed(src_1.HTTP_RESPONSE_STATUS.METHOD_NOT_ALLOWED.body)],
        ['Response.notAcceptable', src_1.Response.notAcceptable(src_1.HTTP_RESPONSE_STATUS.NOT_ACCEPTABLE.body)],
        ['Response.requestTimeout', src_1.Response.requestTimeout(src_1.HTTP_RESPONSE_STATUS.REQUEST_TIMEOUT.body)],
        ['Response.conflict', src_1.Response.conflict(src_1.HTTP_RESPONSE_STATUS.CONFLICT.body)],
        ['Response.gone', src_1.Response.gone(src_1.HTTP_RESPONSE_STATUS.GONE.body)],
        ['Response.lengthRequired', src_1.Response.lengthRequired(src_1.HTTP_RESPONSE_STATUS.LENGTH_REQUIRED.body)],
        ['Response.requestEntityTooLarge', src_1.Response.requestEntityTooLarge(src_1.HTTP_RESPONSE_STATUS.REQUEST_ENTITY_TOO_LARGE.body)],
        ['Response.requestURITooLong', src_1.Response.requestURITooLong(src_1.HTTP_RESPONSE_STATUS.REQUEST_URI_TOO_LONG.body)],
        ['Response.unsupportedMediaType', src_1.Response.unsupportedMediaType(src_1.HTTP_RESPONSE_STATUS.UNSUPPORTED_MEDIA_TYPE.body)],
        ['Response.expectationFailed', src_1.Response.expectationFailed(src_1.HTTP_RESPONSE_STATUS.EXPECTATION_FAILED.body)],
        // 5xx
        ['Response.internalServerError', src_1.Response.internalServerError(src_1.HTTP_RESPONSE_STATUS.INTERNAL_SERVERERROR.body)],
        ['Response.notImplemented', src_1.Response.notImplemented(src_1.HTTP_RESPONSE_STATUS.NOT_IMPLEMENTED.body)],
        ['Response.badGateway', src_1.Response.badGateway(src_1.HTTP_RESPONSE_STATUS.BAD_GATEWAY.body)],
        ['Response.serviceUnavailable', src_1.Response.serviceUnavailable(src_1.HTTP_RESPONSE_STATUS.SERVICE_UNAVAILABLE.body)],
        ['Response.gatewayTimeout', src_1.Response.gatewayTimeout(src_1.HTTP_RESPONSE_STATUS.GATEWAY_TIMEOUT.body)],
        ['Response.httpVersionNotSupported', src_1.Response.httpVersionNotSupported(src_1.HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED.body)],
        ['Response.badRequest with body param', src_1.Response.badRequest('need id param')]
    ];
    var _loop_1 = function (r) {
        var name_1 = r[0], struc = r[1];
        it(name_1, function () {
            assert_1.ok(isString(struc.body));
            assert_1.ok(isNumber(struc.code));
            assert_1.ok(isString(struc.type));
        });
    };
    for (var _i = 0, responseArr_1 = responseArr; _i < responseArr_1.length; _i++) {
        var r = responseArr_1[_i];
        _loop_1(r);
    }
});

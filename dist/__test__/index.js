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
var res = new src_1.Response(src_1.HTTP_RESPONSE_STATUS.Ok.code, src_1.HTTP_RESPONSE_STATUS.Ok.body, src_1.MEDIA_TYPES.TEXT_PLAIN);
var struct = res.serialize();
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
        var sres = new src_1.Response(src_1.HTTP_RESPONSE_STATUS.Ok.code, { id: 'id', name: 'name', age: 1 }, src_1.MEDIA_TYPES.APPLICATION_JSON).serialize();
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
        ['Response.struct', src_1.Response.struct(src_1.HTTP_RESPONSE_STATUS.HTTPVersionNotSupported)],
        ['Response.status', src_1.Response.status(404, '<h3>404 Not Fount</h3>', src_1.MEDIA_TYPES.TEXT_HTML)],
        // 2xx
        ['Response.noContent', src_1.Response.noContent()],
        // 3xx
        ['Response.seeOther', src_1.Response.ok('ok')],
        ['Response.notModified', src_1.Response.notModified()],
        ['Response.unused', src_1.Response.unused()],
        // 4xx
        ['Response.badRequest', src_1.Response.badRequest()],
        ['Response.unauthorized', src_1.Response.unauthorized()],
        ['Response.forbidden', src_1.Response.forbidden()],
        ['Response.notFount', src_1.Response.notFount()],
        ['Response.methodNotAllowed', src_1.Response.methodNotAllowed()],
        ['Response.notAcceptable', src_1.Response.notAcceptable()],
        ['Response.requestTimeout', src_1.Response.requestTimeout()],
        ['Response.conflict', src_1.Response.conflict()],
        ['Response.gone', src_1.Response.gone()],
        ['Response.lengthRequired', src_1.Response.lengthRequired()],
        ['Response.requestEntityTooLarge', src_1.Response.requestEntityTooLarge()],
        ['Response.requestURITooLong', src_1.Response.requestURITooLong()],
        ['Response.unsupportedMediaType', src_1.Response.unsupportedMediaType()],
        ['Response.expectationFailed', src_1.Response.expectationFailed()],
        // 5xx
        ['Response.internalServerError', src_1.Response.internalServerError()],
        ['Response.notImplemented', src_1.Response.notImplemented()],
        ['Response.badGateway', src_1.Response.badGateway()],
        ['Response.serviceUnavailable', src_1.Response.serviceUnavailable()],
        ['Response.gatewayTimeout', src_1.Response.gatewayTimeout()],
        ['Response.httpVersionNotSupported', src_1.Response.httpVersionNotSupported()],
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

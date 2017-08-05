"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   05/08/2017
 * @description
 */
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const assert_1 = require("assert");
require("mocha");
function isType(type) {
    return function (v) {
        return Object.prototype.toString.call(v) === `[object ${type}]`;
    };
}
const isString = isType('String');
const isNumber = isType('Number');
const isObject = isType('Object');
let body;
let code;
let type;
// instance
const res = new src_1.Response(src_1.HTTP_RESPONSE_STATUS.Ok.code, src_1.HTTP_RESPONSE_STATUS.Ok.body, src_1.MEDIA_TYPES.TEXT_PLAIN);
const struct = res.serialize();
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
        const sres = new src_1.Response(src_1.HTTP_RESPONSE_STATUS.Ok.code, { id: 'id', name: 'name', age: 1 }, src_1.MEDIA_TYPES.APPLICATION_JSON).serialize();
        let sbody = sres.body;
        code = sres.code;
        type = sres.type;
        assert_1.ok(isObject(sbody));
        assert_1.ok(isNumber(code));
        assert_1.ok(isString(type));
        const res01 = src_1.Response.ok({ id: 'id', name: 'name', age: 1 });
        assert_1.ok(isObject(res01.body));
        assert_1.ok(isNumber(res01.code));
        assert_1.ok(isString(res01.type));
    });
    // stati cmethods
    const responseArr = [
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
    ];
    for (let r of responseArr) {
        const [name, struc] = r;
        it(name, function () {
            assert_1.ok(isString(struc.body));
            assert_1.ok(isNumber(struc.code));
            assert_1.ok(isString(struc.type));
        });
    }
});
//# sourceMappingURL=/Users/coinxu/github/response/source-map/__test__/index.js.map
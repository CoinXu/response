/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   05/08/2017
 * @description
 */

import { ResponseStruct, Response, HTTP_RESPONSE_STATUS, MEDIA_TYPES } from '../src'
import { ok } from 'assert'
import 'mocha'

function isType (type: string): (v: any) => boolean {
  return function (v: any): boolean {
    return Object.prototype.toString.call(v) === `[object ${type}]`
  }
}

const isString = isType('String')
const isNumber = isType('Number')
const isObject = isType('Object')

let body: string
let code: number
let type: string

// instance
const struct = Response.struct<string>(
  HTTP_RESPONSE_STATUS.OK.body,
  HTTP_RESPONSE_STATUS.OK.code,
  MEDIA_TYPES.TEXT_PLAIN
)

describe('Response', function () {

  it('new Response', function () {
    body = struct.body
    code = struct.code
    type = struct.type

    ok(isString(body))
    ok(isNumber(code))
    ok(isString(type))
  })

  it('Use Interface structure', function () {
    // user interface structure
    interface S {
      id: string
      name: string
      age: number
    }

    const sres = Response.struct(
      { id: 'id', name: 'name', age: 1 },
      HTTP_RESPONSE_STATUS.OK.code,
      MEDIA_TYPES.APPLICATION_JSON
    )

    let sbody: S = sres.body
    code = sres.code
    type = sres.type

    ok(isObject(sbody))
    ok(isNumber(code))
    ok(isString(type))

    const res01: ResponseStruct<S> = Response.ok<S>({ id: 'id', name: 'name', age: 1 })
    ok(isObject(res01.body))
    ok(isNumber(res01.code))
    ok(isString(res01.type))
  })

  // stati cmethods
  const responseArr: Array<[string, ResponseStruct<string>]> = [
    ['Response.struct', Response.struct<string>(
      HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED.body,
      HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED.code,
      MEDIA_TYPES.TEXT_PLAIN
    )],
    ['Response.status', Response.status(HTTP_RESPONSE_STATUS.BAD_REQUEST)],
    // 2xx
    ['Response.noContent', Response.noContent<string>(HTTP_RESPONSE_STATUS.NO_CONTENT.body)],

    // 3xx
    ['Response.seeOther', Response.ok<string>('ok')],
    ['Response.notModified', Response.notModified<string>(HTTP_RESPONSE_STATUS.NOT_MODIFIED.body)],
    ['Response.unused', Response.unused<string>(HTTP_RESPONSE_STATUS.UNUSED.body)],

    // 4xx
    ['Response.badRequest', Response.badRequest<string>(HTTP_RESPONSE_STATUS.BAD_REQUEST.body)],
    ['Response.unauthorized', Response.unauthorized<string>(HTTP_RESPONSE_STATUS.UNAUTHORIZED.body)],
    ['Response.forbidden', Response.forbidden<string>(HTTP_RESPONSE_STATUS.FORBIDDEN.body)],
    ['Response.notFount', Response.notFount<string>(HTTP_RESPONSE_STATUS.NOT_FOUNT.body)],
    ['Response.methodNotAllowed', Response.methodNotAllowed<string>(HTTP_RESPONSE_STATUS.METHOD_NOT_ALLOWED.body)],
    ['Response.notAcceptable', Response.notAcceptable<string>(HTTP_RESPONSE_STATUS.NOT_ACCEPTABLE.body)],
    ['Response.requestTimeout', Response.requestTimeout<string>(HTTP_RESPONSE_STATUS.REQUEST_TIMEOUT.body)],
    ['Response.conflict', Response.conflict<string>(HTTP_RESPONSE_STATUS.CONFLICT.body)],
    ['Response.gone', Response.gone<string>(HTTP_RESPONSE_STATUS.GONE.body)],
    ['Response.lengthRequired', Response.lengthRequired<string>(HTTP_RESPONSE_STATUS.LENGTH_REQUIRED.body)],
    ['Response.requestEntityTooLarge', Response.requestEntityTooLarge<string>(HTTP_RESPONSE_STATUS.REQUEST_ENTITY_TOO_LARGE.body)],
    ['Response.requestURITooLong', Response.requestURITooLong<string>(HTTP_RESPONSE_STATUS.REQUEST_URI_TOO_LONG.body)],
    ['Response.unsupportedMediaType', Response.unsupportedMediaType<string>(HTTP_RESPONSE_STATUS.UNSUPPORTED_MEDIA_TYPE.body)],
    ['Response.expectationFailed', Response.expectationFailed<string>(HTTP_RESPONSE_STATUS.EXPECTATION_FAILED.body)],

    // 5xx
    ['Response.internalServerError', Response.internalServerError<string>(HTTP_RESPONSE_STATUS.INTERNAL_SERVERERROR.body)],
    ['Response.notImplemented', Response.notImplemented<string>(HTTP_RESPONSE_STATUS.NOT_IMPLEMENTED.body)],
    ['Response.badGateway', Response.badGateway<string>(HTTP_RESPONSE_STATUS.BAD_GATEWAY.body)],
    ['Response.serviceUnavailable', Response.serviceUnavailable<string>(HTTP_RESPONSE_STATUS.SERVICE_UNAVAILABLE.body)],
    ['Response.gatewayTimeout', Response.gatewayTimeout<string>(HTTP_RESPONSE_STATUS.GATEWAY_TIMEOUT.body)],
    ['Response.httpVersionNotSupported', Response.httpVersionNotSupported<string>(HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED.body)],

    ['Response.badRequest with body param', Response.badRequest<string>('need id param')]
  ]

  for (let r of responseArr) {
    const [name, struc] = r
    it(name, function () {
      ok(isString(struc.body))
      ok(isNumber(struc.code))
      ok(isString(struc.type))
    })
  }
})

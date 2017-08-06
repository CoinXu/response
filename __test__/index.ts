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
const res = new Response<string>(
  HTTP_RESPONSE_STATUS.Ok.code,
  HTTP_RESPONSE_STATUS.Ok.body,
  MEDIA_TYPES.TEXT_PLAIN
)

const struct = res.serialize()

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

    const sres = new Response<S>(
      HTTP_RESPONSE_STATUS.Ok.code,
      { id: 'id', name: 'name', age: 1 },
      MEDIA_TYPES.APPLICATION_JSON
    ).serialize()

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
    // 2xx
    ['Response.noContent', Response.noContent()],

    // 3xx
    ['Response.seeOther', Response.ok<string>('ok')],
    ['Response.notModified', Response.notModified()],
    ['Response.unused', Response.unused()],

    // 4xx
    ['Response.badRequest', Response.badRequest()],
    ['Response.unauthorized', Response.unauthorized()],
    ['Response.forbidden', Response.forbidden()],
    ['Response.notFount', Response.notFount()],
    ['Response.methodNotAllowed', Response.methodNotAllowed()],
    ['Response.notAcceptable', Response.notAcceptable()],
    ['Response.requestTimeout', Response.requestTimeout()],
    ['Response.conflict', Response.conflict()],
    ['Response.gone', Response.gone()],
    ['Response.lengthRequired', Response.lengthRequired()],
    ['Response.requestEntityTooLarge', Response.requestEntityTooLarge()],
    ['Response.requestURITooLong', Response.requestURITooLong()],
    ['Response.unsupportedMediaType', Response.unsupportedMediaType()],
    ['Response.expectationFailed', Response.expectationFailed()],

    // 5xx
    ['Response.internalServerError', Response.internalServerError()],
    ['Response.notImplemented', Response.notImplemented()],
    ['Response.badGateway', Response.badGateway()],
    ['Response.serviceUnavailable', Response.serviceUnavailable()],
    ['Response.gatewayTimeout', Response.gatewayTimeout()],
    ['Response.httpVersionNotSupported', Response.httpVersionNotSupported()],

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

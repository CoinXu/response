/**
 * Created by asd on 17-8-5.
 */

import { HTTP_RESPONSE_STATUS, StatusStruct } from './http-response-status'
import { MEDIA_TYPES } from './media-types'

export interface ResponseStruct<T> {
  code: number
  type: string
  body: T
}

export class Response<T> {
  private code: number
  private body: T
  private type: string

  constructor (code: number, body: T, type: string) {
    this.code = code
    this.body = body
    this.type = type
  }

  serialize (): ResponseStruct<T> {
    return {
      code: this.code,
      type: this.type,
      body: this.body
    }
  }

  static struct (struct: StatusStruct): ResponseStruct<string> {
    return new Response(struct.code, struct.body, MEDIA_TYPES.TEXT_PLAIN).serialize()
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
  static status (code: number, body: string, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<string> {
    return new Response(code, body, type).serialize()
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
  static ok<U> (body: U, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<U> {
    return new Response<U>(HTTP_RESPONSE_STATUS.Ok.code, body, type).serialize()
  }

  static noContent (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NoContent)
  }

  // ========= 3xx =========
  static seeOther (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.SeeOther)
  }

  static notModified (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NotModified)
  }

  static unused (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.Unused)
  }

  // ========= 4xx =========
  static badRequest (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.BadRequest)
  }

  static unauthorized (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.BadRequest)
  }

  static forbidden (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.BadRequest)
  }

  static notFount (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NotFount)
  }

  static methodNotAllowed (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.MethodNotAllowed)
  }

  static notAcceptable (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NotAcceptable)
  }

  static requestTimeout (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.RequestTimeout)
  }

  static conflict (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.Conflict)
  }

  static gone (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.Gone)
  }

  static lengthRequired (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.LengthRequired)
  }

  static requestEntityTooLarge (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.RequestEntityTooLarge)
  }

  static requestURITooLong (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.RequestURITooLong)
  }

  static unsupportedMediaType (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.UnsupportedMediaType)
  }

  static expectationFailed (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.ExpectationFailed)
  }

  // ========= 5xx =========
  static internalServerError (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.InternalServerError)
  }

  static notImplemented (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NotImplemented)
  }

  static badGateway (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.BadGateway)
  }

  static serviceUnavailable (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.ServiceUnavailable)
  }

  static gatewayTimeout (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.GatewayTimeout)
  }

  static httpVersionNotSupported (): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.HTTPVersionNotSupported)
  }
}


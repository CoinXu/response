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

  static struct (struct: StatusStruct, body?: string): ResponseStruct<string> {
    return new Response<string>(struct.code, body || struct.body, MEDIA_TYPES.TEXT_PLAIN).serialize()
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

  // ======================
  // Successful
  // 2xx

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
    return new Response<U>(HTTP_RESPONSE_STATUS.OK.code, body, type).serialize()
  }

  static noContent (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NO_CONTENT, body)
  }

  // ======================
  // Multiple Choices
  // 3xx

  static seeOther (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.SEE_OTHER, body)
  }

  static notModified (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NOT_MODIFIED, body)
  }

  static unused (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.UNUSED, body)
  }

  // ======================
  // Client Error
  // 4xx
  static badRequest (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.BAD_REQUEST, body)
  }

  static unauthorized (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.UNAUTHORIZED, body)
  }

  static forbidden (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.FORBIDDEN, body)
  }

  static notFount (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NOT_FOUNT, body)
  }

  static methodNotAllowed (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.METHOD_NOT_ALLOWED, body)
  }

  static notAcceptable (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NOT_ACCEPTABLE, body)
  }

  static requestTimeout (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.REQUEST_TIMEOUT, body)
  }

  static conflict (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.CONFLICT, body)
  }

  static gone (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.GONE, body)
  }

  static lengthRequired (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.LENGTH_REQUIRED, body)
  }

  static requestEntityTooLarge (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.REQUEST_ENTITY_TOO_LARGE, body)
  }

  static requestURITooLong (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.REQUEST_URI_TOO_LONG, body)
  }

  static unsupportedMediaType (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.UNSUPPORTED_MEDIA_TYPE, body)
  }

  static expectationFailed (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.EXPECTATION_FAILED, body)
  }
  // ======================
  // Server Error
  // 5xx
  static internalServerError (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.INTERNAL_SERVERERROR, body)
  }

  static notImplemented (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.NOT_IMPLEMENTED, body)
  }

  static badGateway (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.BAD_GATEWAY, body)
  }

  static serviceUnavailable (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.SERVICE_UNAVAILABLE, body)
  }

  static gatewayTimeout (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.GATEWAY_TIMEOUT, body)
  }

  static httpVersionNotSupported (body?: string): ResponseStruct<string> {
    return Response.struct(HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED, body)
  }
}


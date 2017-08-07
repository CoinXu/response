/**
 * Created by asd on 17-8-5.
 */

import { HTTP_RESPONSE_STATUS, Status } from './http-response-status'
import { MEDIA_TYPES } from './media-types'

export interface ResponseStruct<T> {
  code: number
  type: string
  body: T
}

export class Response {

  static struct<T> (body: T, code: number, type: string): ResponseStruct<T> {
    return { body, code, type }
  }

  /**
   * 发送状态码
   * @param {Status} status
   * @return {ResponseStruct<string>}
   * @example
   * ```js
   * Response.status(HTTP_RESPONSE_STATUS.OK)
   * ```
   */
  static status (status: Status): ResponseStruct<string> {
    return this.struct<string>(status.body, status.code, MEDIA_TYPES.TEXT_PLAIN)
  }

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
  static ok<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.OK.code, type)
  }

  static noContent<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.NO_CONTENT.code, type)
  }

  // ======================
  // Multiple Choices
  // 3xx
  static seeOther<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.SEE_OTHER.code, type)
  }

  static notModified<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.NOT_MODIFIED.code, type)
  }

  static unused<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.UNUSED.code, type)
  }

  // ======================
  // Client Error
  // 4xx
  static badRequest<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.BAD_REQUEST.code, type)
  }

  static unauthorized<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.UNAUTHORIZED.code, type)
  }

  static forbidden<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.FORBIDDEN.code, type)
  }

  static notFount<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.NOT_FOUNT.code, type)
  }

  static methodNotAllowed<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.METHOD_NOT_ALLOWED.code, type)
  }

  static notAcceptable<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.NOT_ACCEPTABLE.code, type)
  }

  static requestTimeout<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.REQUEST_TIMEOUT.code, type)
  }

  static conflict<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.CONFLICT.code, type)
  }

  static gone<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.GONE.code, type)
  }

  static lengthRequired<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.LENGTH_REQUIRED.code, type)
  }

  static requestEntityTooLarge<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.REQUEST_ENTITY_TOO_LARGE.code, type)
  }

  static requestURITooLong<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.REQUEST_URI_TOO_LONG.code, type)
  }

  static unsupportedMediaType<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.UNSUPPORTED_MEDIA_TYPE.code, type)
  }

  static expectationFailed<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.EXPECTATION_FAILED.code, type)
  }

  // ======================
  // Server Error
  // 5xx

  static internalServerError<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.INTERNAL_SERVERERROR.code, type)
  }

  static notImplemented<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.NOT_IMPLEMENTED.code, type)
  }

  static badGateway<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.BAD_GATEWAY.code, type)
  }

  static serviceUnavailable<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.SERVICE_UNAVAILABLE.code, type)
  }

  static gatewayTimeout<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.GATEWAY_TIMEOUT.code, type)
  }

  static httpVersionNotSupported<T> (body: T, type = MEDIA_TYPES.TEXT_PLAIN): ResponseStruct<T> {
    return this.struct<T>(body, HTTP_RESPONSE_STATUS.HTTP_VERSION_NOT_SUPPORTED.code, type)
  }
}


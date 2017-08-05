/**
 * Created by asd on 17-8-5.
 */

import {HTTP_RESPONSE_STATUS, StatuStruct} from './http-response-status'
import {MEDIA_TYPES} from './media-types'

interface ResponseStruct<T> {
  code: number
  type: string
  body: T
}

class Response<T> {
  private _code: number
  private _type: string
  private _body: T

  constructor (code: number, body: T, type: string) {
    this._code = code
    this._body = body
    this._type = type
  }

  serialize (): ResponseStruct<T> {
    return {
      code: this.code,
      type: this.type,
      body: this.body
    }
  }

  // ========= getter and setter =========
  set code (code: number) {
    this._code = code
  }

  get code (): number {
    return this._code
  }

  set type (type: string) {
    this._type = type
  }

  get type (): string {
    return this._type
  }

  set body (body: T) {
    this._body = body
  }

  get body (): T {
    return this._body
  }

  static struct (struct: StatuStruct): ResponseStruct<string> {
    return new Response(struct.code, struct.body, MEDIA_TYPES.TEXT_PLAIN).serialize()
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
  static ok<U> (body?: U, type?: string): ResponseStruct<U | string> {
    if (typeof body === "undefined") {
      return Response.struct(HTTP_RESPONSE_STATUS.Ok)
    }
    return new Response<U>(HTTP_RESPONSE_STATUS.Ok.code, body, type || MEDIA_TYPES.TEXT_PLAIN).serialize()
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
}

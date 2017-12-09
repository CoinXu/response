/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   09/12/2017
 * @description
 */

import { isSuccess } from './is-success'
import { Response } from './Response'
import { MEDIA_TYPES } from "./media-types"
import { ResponseStruct } from "./Response"
import { HTTP_RESPONSE_STATUS } from './http-response-status'

export interface Structure<T> {
  success: boolean
  type: string
  code: number
  body: T
  message?: string
}

export class ResponseStructure<T> {

  private success: boolean
  private type: string
  private code: number
  private body: T
  private message: string

  setSuccess (success: boolean) {
    this.success = success
    return this
  }

  setType (type: MEDIA_TYPES) {
    this.type = type
    return this
  }

  setCode (code: number) {
    this.code = code
    return this
  }

  setBody (body: T) {
    this.body = body
    return this
  }

  setMessage (message: string) {
    this.message = message
    return this
  }

  toJson (): Structure<T> {
    return {
      success: this.success,
      type: this.type,
      code: this.code,
      body: this.body,
      message: this.message
    }
  }

  static ok<T> (body: T): Structure<T> {
    return ResponseStructure.wrapper<T>(Response.ok(body))
  }

  static fail (message?: string): Structure<string> {
    return ResponseStructure.wrapper<string>(
      Response.badRequest(HTTP_RESPONSE_STATUS.BAD_REQUEST.body),
      message
    )
  }

  static wrapper<T> (struct: ResponseStruct<T>, message?: string): Structure<T> {
    return {
      success: isSuccess(struct.code),
      type: struct.type,
      body: struct.body,
      code: struct.code,
      message
    }
  }
}

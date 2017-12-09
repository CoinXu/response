/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   09/12/2017
 * @description
 */

import structure, { Structure } from './structure'
import { Response } from './Response'
import { MEDIA_TYPES } from "./media-types"

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
    return structure(Response.ok(body))
  }

  static fail (message?: string): Structure<string> {
    return structure(Response.badRequest(message))
  }
}

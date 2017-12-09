/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   09/12/2017
 * @description
 */
import { ResponseStruct } from "./Response"

/**
 * 根据传入的http status code 确定返回结果
 * @param {number} code
 * @return {boolean}
 */
function isSuccess (code: number) {
  // 2xx successful
  if (code >= 200 && code < 300) {
    return true
  }

  // 3xx redirection
  if (code >= 300 && code < 400) {
    return true
  }

  // 4xx client error
  if (code >= 400 && code < 500) {
    return false
  }

  // 5xx server error
  if (code >= 500 && code < 600) {
    return false
  }

  return false
}

export interface Structure<T> {
  success: boolean
  type: string
  code: number
  body: T
  message?: string
}

export default function <T> (struct: ResponseStruct<T>, message?: string): Structure<T> {
  return {
    success: isSuccess(struct.code),
    type: struct.type,
    body: struct.body,
    code: struct.code,
    message
  }
}


"use strict";
exports.__esModule = true;
/**
 * 根据传入的http status code 确定返回结果
 * @param {number} code
 * @return {boolean}
 */
function isSuccess(code) {
    // 2xx successful
    if (code >= 200 && code < 300) {
        return true;
    }
    // 3xx redirection
    if (code >= 300 && code < 400) {
        return true;
    }
    // 4xx client error
    if (code >= 400 && code < 500) {
        return false;
    }
    // 5xx server error
    if (code >= 500 && code < 600) {
        return false;
    }
    return false;
}
function default_1(struct, message) {
    return {
        success: isSuccess(struct.code),
        type: struct.type,
        body: struct.body,
        code: struct.code,
        message: message
    };
}
exports["default"] = default_1;

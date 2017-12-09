"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   09/12/2017
 * @description
 */
exports.__esModule = true;
var is_success_1 = require("./is-success");
var Response_1 = require("./Response");
var http_response_status_1 = require("./http-response-status");
var ResponseStructure = (function () {
    function ResponseStructure() {
    }
    ResponseStructure.prototype.setSuccess = function (success) {
        this.success = success;
        return this;
    };
    ResponseStructure.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    ResponseStructure.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    ResponseStructure.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    ResponseStructure.prototype.setMessage = function (message) {
        this.message = message;
        return this;
    };
    ResponseStructure.prototype.toJson = function () {
        return {
            success: this.success,
            type: this.type,
            code: this.code,
            body: this.body,
            message: this.message
        };
    };
    ResponseStructure.ok = function (body) {
        return ResponseStructure.wrapper(Response_1.Response.ok(body));
    };
    ResponseStructure.fail = function (message) {
        return ResponseStructure.wrapper(Response_1.Response.badRequest(http_response_status_1.HTTP_RESPONSE_STATUS.BAD_REQUEST.body), message);
    };
    ResponseStructure.wrapper = function (struct, message) {
        return {
            success: is_success_1.isSuccess(struct.code),
            type: struct.type,
            body: struct.body,
            code: struct.code,
            message: message
        };
    };
    return ResponseStructure;
}());
exports.ResponseStructure = ResponseStructure;

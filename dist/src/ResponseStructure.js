"use strict";
/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   09/12/2017
 * @description
 */
exports.__esModule = true;
var structure_1 = require("./structure");
var Response_1 = require("./Response");
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
        return structure_1["default"](Response_1.Response.ok(body));
    };
    ResponseStructure.fail = function (message) {
        return structure_1["default"](Response_1.Response.badRequest(message));
    };
    return ResponseStructure;
}());
exports.ResponseStructure = ResponseStructure;

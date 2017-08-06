"use strict";
/**
 * Created by asd on 17-8-5.
 * HTTP response status
 * https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
 */
exports.__esModule = true;
/**
 * 创建status快捷函数
 * @param code
 * @param body
 * @return {{code: number, body: string}}
 */
function struct(code, body) {
    return { code: code, body: body };
}
exports.HTTP_RESPONSE_STATUS = {
    // ## Successful 2xx
    Ok: struct(200, 'ok'),
    NoContent: struct(204, 'No Content'),
    // ## Redirection 3xx
    SeeOther: struct(303, 'See Other'),
    NotModified: struct(304, 'Not Modified'),
    Unused: struct(306, 'Unused'),
    // ## Client Error 4xx
    BadRequest: struct(400, 'Bad Request'),
    Unauthorized: struct(401, 'Unauthorized'),
    Forbidden: struct(403, 'Forbidden'),
    NotFount: struct(404, 'Not Fount'),
    MethodNotAllowed: struct(405, 'Method Not Allowed'),
    NotAcceptable: struct(406, 'Not Acceptable'),
    RequestTimeout: struct(408, 'Request Timeout'),
    Conflict: struct(409, 'Conflict'),
    // The requested resource is no longer available at the server and no forwarding address is known.
    Gone: struct(410, 'Gone'),
    LengthRequired: struct(411, 'Length Required'),
    RequestEntityTooLarge: struct(413, 'Request Entity TooLarge'),
    RequestURITooLong: struct(414, 'Request-URI Too Long'),
    UnsupportedMediaType: struct(415, 'Unsupported Media Type'),
    ExpectationFailed: struct(417, 'Expectation Failed'),
    // ## Server Error 5xx
    InternalServerError: struct(500, 'Internal ServerError'),
    NotImplemented: struct(501, 'Not Implemented'),
    BadGateway: struct(502, 'Bad Gateway'),
    ServiceUnavailable: struct(503, 'Service Unavailable'),
    GatewayTimeout: struct(504, 'Gateway Timeout'),
    HTTPVersionNotSupported: struct(505, 'HTTP Version Not Supported')
};

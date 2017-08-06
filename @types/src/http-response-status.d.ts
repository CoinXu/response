/**
 * Created by asd on 17-8-5.
 * HTTP response status
 * https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
 */
export interface StatusStruct {
    code: number;
    body: string;
}
export declare const HTTP_RESPONSE_STATUS: {
    Ok: StatusStruct;
    NoContent: StatusStruct;
    SeeOther: StatusStruct;
    NotModified: StatusStruct;
    Unused: StatusStruct;
    BadRequest: StatusStruct;
    Unauthorized: StatusStruct;
    Forbidden: StatusStruct;
    NotFount: StatusStruct;
    MethodNotAllowed: StatusStruct;
    NotAcceptable: StatusStruct;
    RequestTimeout: StatusStruct;
    Conflict: StatusStruct;
    Gone: StatusStruct;
    LengthRequired: StatusStruct;
    RequestEntityTooLarge: StatusStruct;
    RequestURITooLong: StatusStruct;
    UnsupportedMediaType: StatusStruct;
    ExpectationFailed: StatusStruct;
    InternalServerError: StatusStruct;
    NotImplemented: StatusStruct;
    BadGateway: StatusStruct;
    ServiceUnavailable: StatusStruct;
    GatewayTimeout: StatusStruct;
    HTTPVersionNotSupported: StatusStruct;
};

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
    OK: StatusStruct;
    NO_CONTENT: StatusStruct;
    SEE_OTHER: StatusStruct;
    NOT_MODIFIED: StatusStruct;
    UNUSED: StatusStruct;
    BAD_REQUEST: StatusStruct;
    UNAUTHORIZED: StatusStruct;
    FORBIDDEN: StatusStruct;
    NOT_FOUNT: StatusStruct;
    METHOD_NOT_ALLOWED: StatusStruct;
    NOT_ACCEPTABLE: StatusStruct;
    REQUEST_TIMEOUT: StatusStruct;
    CONFLICT: StatusStruct;
    GONE: StatusStruct;
    LENGTH_REQUIRED: StatusStruct;
    REQUEST_ENTITY_TOO_LARGE: StatusStruct;
    REQUEST_URI_TOO_LONG: StatusStruct;
    UNSUPPORTED_MEDIA_TYPE: StatusStruct;
    EXPECTATION_FAILED: StatusStruct;
    INTERNAL_SERVERERROR: StatusStruct;
    NOT_IMPLEMENTED: StatusStruct;
    BAD_GATEWAY: StatusStruct;
    SERVICE_UNAVAILABLE: StatusStruct;
    GATEWAY_TIMEOUT: StatusStruct;
    HTTP_VERSION_NOT_SUPPORTED: StatusStruct;
};

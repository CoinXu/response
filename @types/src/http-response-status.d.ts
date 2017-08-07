/**
 * Created by asd on 17-8-5.
 * HTTP response status
 * https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
 */
export interface Status {
    code: number;
    body: string;
}
export declare const HTTP_RESPONSE_STATUS: {
    OK: Status;
    NO_CONTENT: Status;
    SEE_OTHER: Status;
    NOT_MODIFIED: Status;
    UNUSED: Status;
    BAD_REQUEST: Status;
    UNAUTHORIZED: Status;
    FORBIDDEN: Status;
    NOT_FOUNT: Status;
    METHOD_NOT_ALLOWED: Status;
    NOT_ACCEPTABLE: Status;
    REQUEST_TIMEOUT: Status;
    CONFLICT: Status;
    GONE: Status;
    LENGTH_REQUIRED: Status;
    REQUEST_ENTITY_TOO_LARGE: Status;
    REQUEST_URI_TOO_LONG: Status;
    UNSUPPORTED_MEDIA_TYPE: Status;
    EXPECTATION_FAILED: Status;
    INTERNAL_SERVERERROR: Status;
    NOT_IMPLEMENTED: Status;
    BAD_GATEWAY: Status;
    SERVICE_UNAVAILABLE: Status;
    GATEWAY_TIMEOUT: Status;
    HTTP_VERSION_NOT_SUPPORTED: Status;
};

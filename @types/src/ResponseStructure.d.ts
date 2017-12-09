import { MEDIA_TYPES } from "./media-types";
import { ResponseStruct } from "./Response";
export interface Structure<T> {
    success: boolean;
    type: string;
    code: number;
    body: T;
    message?: string;
}
export declare class ResponseStructure<T> {
    private success;
    private type;
    private code;
    private body;
    private message;
    setSuccess(success: boolean): this;
    setType(type: MEDIA_TYPES): this;
    setCode(code: number): this;
    setBody(body: T): this;
    setMessage(message: string): this;
    toJson(): Structure<T>;
    static ok<T>(body: T): Structure<T>;
    static fail(message?: string): Structure<string>;
    static wrapper<T>(struct: ResponseStruct<T>, message?: string): Structure<T>;
}

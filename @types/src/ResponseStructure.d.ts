/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   09/12/2017
 * @description
 */
import { Structure } from './structure';
import { MEDIA_TYPES } from "./media-types";
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
}

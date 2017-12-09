/**
 * @author coinxu<duanxian0605@gmail.com>
 * @date   09/12/2017
 * @description
 */
import { ResponseStruct } from "./Response";
export interface Structure<T> {
    success: boolean;
    type: string;
    code: number;
    body: T;
    message?: string;
}
export default function <T>(struct: ResponseStruct<T>, message?: string): Structure<T>;

import {selector} from "recoil";
import { textState } from './textState';

// atomから参照した値を加工して返却する。
export const charCountState = selector({
    // 一意のID
    key: 'charCountState',
    get: ({get}) => {
        const text = get(textState);
        return text.length;
    }
})
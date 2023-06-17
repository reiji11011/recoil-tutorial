import { atom} from "recoil";

// 状態を定義する。
// <RecoilRoot>内の全てのコンポーネント内で共有される。
export const textState = atom({
    // 一意のID
    key: 'textState',
    // 初期値
    default: '',
});
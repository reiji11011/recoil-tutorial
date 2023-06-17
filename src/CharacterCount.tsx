import React from "react";
import {useRecoilValue} from "recoil";
import { charCountState } from './charCountState';

export const CharacterCount: React.VFC = () => {
    // useRecoilValueを使ってselectorを取得する。
    const count = useRecoilValue(charCountState);
    return <>Character Count: {count}</>
}
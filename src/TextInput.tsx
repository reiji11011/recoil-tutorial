import {useRecoilState} from "recoil";
import { textState } from './textState';

export const TextInput: React.VFC = () => {
    // atomが更新されるとコンポーネントは再描画される。
    // useRecoilStateを使ってatomの取得と更新を行う。
    const [text, setText] = useRecoilState(textState);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setText(event.target.value)
    }
    const onChange2: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setText(event.target.value)
    }
    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            <input type="text" value={text} onChange={onChange2} />
            <br />
            Echo: {text}
        </div>
    );
}
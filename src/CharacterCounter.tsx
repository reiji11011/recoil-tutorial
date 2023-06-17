import { TextInput } from './TextInput';
import { CharacterCount } from './CharacterCount';

export const CharacterCounter: React.VFC = () => {
    return (
        <div>
        <TextInput />
        <CharacterCount />
        </div>
    );
}
import { RecoilRoot } from 'recoil';
import { CharacterCounter } from "./CharacterCounter";

function App() {
  return (
    // 状態を共有したいコンポーネントツリーのルートは、<RecoilRoot>で囲う。
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
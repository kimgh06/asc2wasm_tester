import CodeNumber from "@/components/codenumber/codenumber";
import CodeArea from "../components/codearea/codearea";
import RunButton from "@/components/runbutton/runbutton";

import './style.scss'
export default function App() {
  return (
    <div>
      <h1>asc to wasm compiler</h1>
      <div className="contents">
        <div className="codeWriter">
          <CodeNumber />
          <CodeArea />
        </div>
        <RunButton />
        <div className="output">

        </div>
      </div>
    </div>
  );
}
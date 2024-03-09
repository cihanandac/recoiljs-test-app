import "./App.css";
import Todos from "./components/Todos";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          TODO'S APP
          <Todos />
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./ComponentC";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <ComponentC />
    </div>
  );
}

export default App;

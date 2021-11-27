import "./styles.css";
import Header from "./Components/Header/Header";
import Top from "./Components/Top/Top";
import Main from "./Components/Main";
export default function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <Main />
    </div>
  );
}

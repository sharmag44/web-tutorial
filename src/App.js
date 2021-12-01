import "./styles.css";
import Header from "./Components/Header/Header";
import Top from "./Components/Top/Top";
import Main from "./Components/Main";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Top />} />
      </Routes>
      <Top />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

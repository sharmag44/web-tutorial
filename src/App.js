import "./styles.css";
import Header from "./Components/Header/Header";
import Top from "./Components/Top/Top";
import Main from "./Components/Main";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="Ccontainer-fluid App">
      <Top />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

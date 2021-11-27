import Footer from "./Footer/Footer";
import Page1 from "./Page1/Page1";
import ES6 from "./ES6/ES6";
import "../styles.css";

export default function Main() {
  return (
    <div classsName="Main">
      <Page1 />
      <ES6 />
      <Footer />
    </div>
  );
}

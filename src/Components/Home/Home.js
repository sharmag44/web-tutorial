import "bootstrap/dist/css/bootstrap.min.css";
import MainText from "../MainText/MainText";
import "./Home.css";
export default function Home() {
  return (
    <div className="Home">
      <h1>What is React ? </h1>
      <MainText lg="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications" />
    </div>
  );
}

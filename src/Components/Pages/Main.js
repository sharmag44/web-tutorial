import Page1 from "./Page1/Page1";
import ES6 from "./Section/ES6/ES6";
import Home from "./Home/Home";
import Class from "./Section/Class/Class";
import Components from "./Section/Components/Components";
import Conditionals from "./Section/Conditionals/Conditionals";
import JSX from "./Section/JSX/JSX";
import Props from "./Section/Props/Props";
import RenderHTML from "./Section/RenderHTML/RenderHTML";
import Lists from "./Section/Lists/Lists";
import Events from "./Section/Events/Events";
import Hooks from "./Section/Hooks/Hooks";
import Form from "./Section/Forms/Form";
import Router from "./Section/Router/Router";
import Memo from "./Section/Memo/Memo";
import Style from "./Section/Styling/Style";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
export default function Main() {
  return (
    <div classsName="Main">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/install" element={<Page1 />} />
          <Route path="/es6" element={<ES6 />} />
          <Route path="/render" element={<RenderHTML />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/component" element={<Components />} />
          <Route path="/class" element={<Class />} />
          <Route path="/props" element={<Props />} />
          <Route path="/events" element={<Events />} />
          <Route path="/condition" element={<Conditionals />} />
          <Route path="/list" element={<Lists />} />
          <Route path="/hook" element={<Hooks />} />
          <Route path="/form" element={<Form />} />
          <Route path="/router" element={<Router />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/style" element={<Style />} />
        </Routes>
      </Container>
    </div>
  );
}

import "./Doc.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Code from "../Code/Code";
import Home from "../Home/Home";
export default function Doc(props) {
  return (
    <div className="Page1">
      <Home />
      <div className="Doc__title">
        <h1>Getting Started</h1>
      </div>
      <h3>Quick Start</h3>
      <div className="Code__all">
        <Code data="npx create-react-app my-app" />
        <Code style={{ textAlign: "left" }} data="cd my-app" />
        <Code data="npm start" />
      </div>

      <h6>
        if you have previously installed create-react-app globally via npm
        install -g create-react-app, we recommend you uninstall the package
        using npm uninstall -g create-react-app or yarn global remove
        create-react-app to ensure that npx always uses the latest version
      </h6>
      <div>
        <h2 style={{ position: "relative", left: "20rem" }}>Creating an App</h2>
      </div>
      <p>
        You’ll need to have Node &gt;= 10 on your local development machine (but
        it’s not required on the server). You can use nvm (macOS/Linux) ordddd
        nvm-windows to switch Node versions between different projects.
      </p>
      <h6>
        To create a new app or project, you may choose one of the following
        methods:
      </h6>
      <div className="Code__all">
        <Code data="npx create-react-app my-app" />
      </div>
      <h6>
        (npx comes with npm 5.2+ and higher, see instructions for older npm
        versions){" "}
      </h6>

      <h3>npm</h3>
      <div className="Code__all">
        <Code data="npm init react-app my-app" />
      </div>
      <h3>Yarn</h3>
      <div className="Code__all">
        <Code data="yarn create react-app my-app" />
      </div>

      <h6>installation is done, you can open your project folder:</h6>
      <div className="Code__all">
        <Code data="cd my-app" />
      </div>
      <h3>npm start or yarn start</h3>
      <h6>
        runs the app in development mode. Open http://localhost:3000 to view it
        in the browser
      </h6>
    </div>
  );
}

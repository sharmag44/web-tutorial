import React from "react";
import "./Router.css";
import Code from "../../Code/Code";
export default function Router() {
  return (
    <div className="Router">
      <h1>What is Router ?</h1>
      <p>
        Many modern websites are actually made up of a single page, they just
        look like multiple pages because they contain components which render
        like separate pages. These are usually referred to as SPAs - single-page
        applications. At its core, what React Router does is conditionally
        render certain components to display depending on the route being used
        in the URL (/ for the home page, /about for the about page, etc.).
      </p>
      <h5>Add React Router</h5>
      <div className="Code__all">
        <Code data="npm i  react-router-dom" />
      </div>

      <h5>Folder Structure</h5>
      <p>
        To create an application with multiple page routes, let's first start
        with the file structure. Within the src folder, we'll create a folder
        named pages with several files:
      </p>
      <p>src/pages</p>
      <p>Home.js</p>
      <p>Blogs.js</p>
      <p>Contact.js</p>

      <h6>Home.js</h6>
      <div className="Code__all">
        <Code data="const Home = () => {" />
        <Code data="return <h1>Home</h1>;" />
        <Code data="};" />
        <Code data=" " />
        <Code data="export default Home;" />
      </div>

      <h6>Blogs.js</h6>
      <div className="Code__all">
        <Code data="const Blogs = () => {" />
        <Code data="return <h1>Blog Articles</h1>;" />
        <Code data="};" />
        <Code data=" " />
        <Code data="export default Blogs;" />
      </div>
      <h6>Contacts.js</h6>
      <div className="Code__all">
        <Code data="const Contact = () => {" />
        <Code data=" return <h1>Contact Me</h1>;" />
        <Code data="};" />
        <Code data="" />
        <Code data="export default Contact;" />
      </div>
      <h4>Basic Usage</h4>
      <h5>Example</h5>
      <p>index.js</p>
      <div className="Code__all">
        <Code data="import ReactDOM from 'react-dom';" />
        <Code data="import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';" />
        <Code data="import Home from './pages/Home';" />
        <Code data="import Blogs from './pages/Blogs';" />
        <Code data="import Contact from './pages/Contact';" />
        <Code data="" />
        <Code data="export default function App() {" />
        <Code data="return (" />
        <Code data=" <Router>" />
        <Code data="<div></div> <Link to='/>Home</Link></div>" />
        <Code
          data="<div>
        <Link to='/blogs'>Blog Articles</Link></div>"
        />
        <Code data="<div><Link to='/contact'>Contact Me</Link></div>" />
        <Code data="<hr/>" />
        <Code data="<Routes>" />
        <Code data="<Route path='/' element={<Home/>}" />
        <Code data="<Route path='/blogs' element={<Blogs/>}" />
        <Code data="<Route path='/contact' element={<Contact/>}" />
        <Code data="</Routes>" />
        <Code data="   );" />
        <Code data="}" />
        <Code data="" />
        <Code data="ReactDOM.render(<App/>,document.getElementById('root'));" />
      </div>
    </div>
  );
}

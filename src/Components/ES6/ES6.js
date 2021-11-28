import Code from "../Code/Code";
import "./ES6.css";

export default function ES6() {
  return (
    <div className="ES6">
      <h2 style={{ position: "relative", left: "20rem" }}>What is ES6 ?</h2>
      <p style={{ margin: "5px" }}>
        ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming
        language. ECMAScript is the standardization of Javascript which was
        released in 2015, and subsequently renamed as ECMAScript 2015.
        ECMAScript and Javascript are both different in nature
      </p>
      <h3>React ES6 Classes</h3>
      <h4>Classes</h4>
      <p>
        A class is a type of function, but instead of using the keyword function
        to initiate it, we use the keyword class, and the properties are
        assigned inside a constructor() method.
      </p>
      <h5>Example</h5>
      <div className="Code__all">
        <Code data="class Car {" />
        <Code data=" constructor(name) {" />
        <Code data="this.brand = name;" />
        <Code data="  }" />
        <Code data="    }" />
      </div>
      <h4>Method in Classes</h4>
      <h5>Example</h5>
      <div className="Code__all">
        <Code data="class Car {" />
        <Code data="constructor(name) {" />
        <Code data="  this.brand = name;" />
        <Code data=" }" />
        <Code data="present() {" />
        <Code data="return 'I have a ' + this.brand;" />
        <Code data=" }" />
        <Code data="   }" />
        <Code data="const mycar = new Car('Ford')" />
        <Code data="mycar.present();" />
      </div>
      <h4>Class Inheritance</h4>
      <p>
        To create a class inheritance, use the extends keyword. A class created
        with a class inheritance inherits all the methods from another class
      </p>
      <div className="Code__all">
        <Code data="class Car {" />
        <Code data="constructor(name) {" />
        <Code data="  this.brand = name;" />
        <Code data=" }" />
        <Code data="present() {" />
        <Code data="return 'I have a ' + this.brand;" />
        <Code data=" }" />
        <Code data="   }" />
        <Code data="class Model extends Car {" />
        <Code data="constructor(name,mod) {" />
        <Code data="super(name);" />
        <Code data="  this.brand = name;" />
        <Code data=" }" />
        <Code data="show() {" />
        <Code data="return this.present() + ', it is a ' + this.model" />
        <Code data="  }" />
        <Code data="    }" />
        <Code data="present() {" />
        <Code data="return 'I have a ' + this.brand;" />
        <Code data=" }" />
        <Code data="   }" />
        <Code data="const mycar = new Car('Ford')" />
        <Code data="mycar.present();" />
      </div>
    </div>
  );
}

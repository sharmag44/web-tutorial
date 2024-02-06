import Code from "../../Code/Code";
import "./ES6.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ES6() {
  return (
    <div className="ES6">
      <h2>What is ES6 ?</h2>
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
      <h3>Arrow Functions</h3>
      <p>Arrow functions allow us to write shorter function syntax:</p>

      <h5>Before: </h5>
      <div className="Code__all">
        <Code data="hello = function() {" />
        <Code data="return 'Hello World!'; " />
        <Code data="}" />
      </div>

      <h5>With Arrow Function :</h5>
      <div className="Code__all">
        <Code data="hello = () => {" />
        <Code data="return 'Hello World!';" />
        <Code data="}" />
      </div>
      <h5>Arrow Functions Return Value by Default:</h5>
      <div className="Code__all">
        <Code data="hello = () => 'Hello World!';" />
      </div>
      <h5>Arrow Function With Parameters:</h5>
      <div className="Code__all">
        <Code data="hello = (val) =>  'Hello' + val;" />
      </div>
      <h5>Arrow Function Without Parentheses:</h5>
      <div className="Code__all">
        <Code data="hello = val => 'Hello ' + val;" />
      </div>
      <h3>React ES6 Destructuring</h3>
      <p>
        The destructuring assignment syntax is a JavaScript expression that
        makes it possible to unpack values from arrays, or properties from
        objects, into distinct variables.
      </p>
      <h5>Before :</h5>
      <div className="Code__all">
        <Code data="const vehicles = ['mustang', 'f-150', 'expedition'];" />
        <Code data="const car = vehicles[0];" />
        <Code data="const truck = vehicles[1];" />
        <Code data="const suv = vehicles[2];" />
      </div>
      <p>Here is the new way of assigning array items to a variable:</p>
      <h5>With destructuring:</h5>
      <div className="Code__all">
        <Code data="const vehicles = ['mustang', 'f-150', 'expedition'];" />
        <Code data="const [car, truck, suv] = vehicles;" />
      </div>
      <h3>Spread Operator</h3>
      <p>
        The JavaScript spread operator (...) allows us to quickly copy all or
        part of an existing array or object into another array or object.
      </p>
      <div className="Code_all">
        <Code data="const numbersOne = [1, 2, 3];" />
        <Code data="const numbersTwo = [4, 5, 6];" />
        <Code data="const numbersCombined = [...numbersOne, ...numbersTwo];" />q
      </div>
      <p>
        The spread operator is often used in combination with destructuring.
      </p>
      <h6>Examp,le</h6>
      <div className="Code_all">
        <Code data="const numbers = [1, 2, 3, 4, 5, 6];" />
        <Code data="const [one, two, ...rest] = numbers;" />
      </div>
      <p>We can use the spread operator with objects too:</p>
      <div className="Code__all">
        <Code
          data="const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}"
        />
        <Code
          data="const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}"
        />
        <Code
          data="const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

"
        />
      </div>
      <h3>React ES6 Modules</h3>
      <h4>Export</h4>
      <p>
        JavaScript modules allow you to break up your code into separate files.
        This makes it easier to maintain the code-base. ES Modules rely on the
        import and export statements.
      </p>

      <h5>Named Exports</h5>
      <p>
        You can create named exports two ways. In-line individually, or all at
        once at the bottom.
      </p>
      <div className="Code__all">
        <Code data="export const name = 'Jesse' " />
        <Code data="export const age=40" />
      </div>

      <h5>All at once at the bottom:</h5>
      <div className="Code__all">
        <Code data="const name = 'Jesse' " />
        <Code data="const age=40" />
        <Code data="export { name, age }" />
      </div>
      <h3>React ES6 Ternary Operator</h3>
      <p>
        The conditional (ternary) operator is the only JavaScript operator that
        takes three operands: a condition followed by a question mark (?), then
        an expression to execute if the condition is truthy followed by a colon
        (:), and finally the expression to execute if the condition is falsy.
        This operator is frequently used as a shortcut for the if statement.
      </p>
      <h5>Before :</h5>
      <div className="Code__all">
        <Code data="if (authenticated) {" />
        <Code data=" renderApp();" />
        <Code data="} else {" />
        <Code data=" renderLogin();" />
        <Code data=" };" />
      </div>
      <h5>With Ternary Operator</h5>
      <div className="Code__all">
        <Code data="authenticated ? renderApp() : renderLogin();  " />
      </div>
      <div className="bottom_button">
        <Button variant="success">
          <Link to="/install">❮ Previous</Link>
        </Button>

        <Button variant="success">
          <Link to="/render">Next ❯</Link>
        </Button>
      </div>
    </div>
  );
}

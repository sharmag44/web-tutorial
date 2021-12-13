import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
export default function Home() {
  return (
    <div className="Home">
      <h1>What is React ? </h1>
      <p>
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on UI components. It is maintained by
        Meta (Facebook) and a community of individual developers and companies.
        React can be used as a base in the development of single-page or mobile
        applications. It was created by Jordan Walke, who was a software
        engineer at Facebook. It was initially developed and maintained by
        Facebook and was later used in its products like WhatsApp & Instagram.
        Facebook developed ReactJS in 2011 in its newsfeed section, but it was
        released to the public in the month of May 2013.
      </p>
      <p>
        A ReactJS application is made up of multiple components, each component
        responsible for outputting a small, reusable piece of HTML code. The
        components are the heart of all React applications. These Components can
        be nested with other components to allow complex applications to be
        built of simple building blocks. ReactJS uses virtual DOM based
        mechanism to fill data in HTML DOM. The virtual DOM works fast as it
        only changes individual DOM elements instead of reloading complete DOM
        every time.
      </p>
      <p>The features that make React powerful and beautiful are:</p>
      <ol>
        <li>
          <strong>
            It uses the virtual DOM concept instead of the real DOM.
          </strong>
        </li>
        <li>
          <strong>
            Code readability because of JSX. The use of JSX makes you feel like
            you’re writing web apps.
          </strong>
        </li>
        <li>
          <strong>It also uses SSR (SSR helps in SEO).</strong>
        </li>
      </ol>
    </div>
  );
}

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
        applications
      </p>
      <p>The features that make React powerful and beautiful are:</p>
      <ol>
        <li><strong>It uses the virtual DOM concept instead of the real DOM.</strong></li>
        <li><strong>Code readability because of JSX. The use of JSX makes you feel like you’re writing web apps.</strong></li>
        <li><strong>It also uses SSR (SSR helps in SEO).</strong></li>
      </ol>
    </div>
  );
}

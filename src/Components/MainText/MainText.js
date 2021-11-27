import "bootstrap/dist/css/bootstrap.min.css";
import "./MainText.css";
export default function MainText(props) {
  return (
    <div className="MainText">
      <p className="MainText__p">{props.lg}</p>
    </div>
  );
}

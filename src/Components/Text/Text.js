import "bootstrap/dist/css/bootstrap.min.css";
import "./Text.css";
export default function Text(props) {
  return (
    <div className="Text">
      <h6 className="Text__heading">{props.text}</h6>
    </div>
  );
}

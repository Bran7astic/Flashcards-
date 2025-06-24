import "../App.css";

function Button(props) {

  return (
    <button
      className="button"
      onClick={props.action}
      style={{ backgroundColor: props.active ? "#ef863d" : "#20212d" }}
    >
      {props.text}
    </button>
  );
}

export default Button;

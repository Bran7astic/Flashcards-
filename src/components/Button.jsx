import "../App.css";

function Button(props) {
  return (
    <button
      className="button"
      onClick={props.action}
      style={{
        backgroundColor: props.active ? "#ef863d" : "#20212d",
        transition: "background-color 0.3s",
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;

import '../App.css'

function Button(props) {
    return (
         <button className="nextButton" onClick={props.action}>
        {" "}
        {props.text}
      </button>         
    );
}

export default Button;
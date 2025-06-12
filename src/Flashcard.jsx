import './App.css'

function Flashcard(props) {
    return (
        <div className = "flashcard" onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    );
}

export default Flashcard
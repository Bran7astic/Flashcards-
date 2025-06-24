import { useContext } from 'react';
import '../App.css'
import { ActionContext } from '../ActionContext';

function Flashcard(props) {

    const { toggleCard } = useContext(ActionContext);

    return (
        <div className = "flashcard" onClick={toggleCard}>
            <p>{props.text}</p>
        </div>
    );
}

export default Flashcard
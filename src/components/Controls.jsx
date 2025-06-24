import { useContext } from "react";
import Button from "./Button";
import { ActionContext } from "../ActionContext";

function Controls() {

    const {nextCard} = useContext(ActionContext);

    return(
        <div>
            <Button text = '←' action/>
            <Button text = '→' action={nextCard}/>
            <Button text = 'Shuffle Cards' action/>
        </div>
    );
}

export default Controls;
import { useContext } from "react";
import Button from "./Button";
import { ActionContext } from "../ActionContext";
import { cardSet } from "../questions";

function Controls() {

    const {index, prevCard, nextCard} = useContext(ActionContext);

    return(
        <div>
            <Button text = '←' action={prevCard} active={index>0}/>
            <Button text = '→' action={nextCard} active={index<cardSet.length-1}/>
            {/* <Button text = 'Shuffle Cards' action/> */}
        </div>
    );
}

export default Controls;
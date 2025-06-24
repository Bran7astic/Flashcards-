import { useContext, useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import Header from "./components/Header";
import Guess from "./components/Guess"
import Button from "./components/Button";
import Controls from "./components/Controls";
import { cardSet } from "./questions";
import { ActionContext } from "./ActionContext";

function App() {
  // console.log(cardSet[0].key, cardSet[0].val)

  const {index, reveal, toggleCard} = useContext(ActionContext);

  const front = cardSet[index].front;
  const back = cardSet[index].back;
  //console.log(key, val);

  return (
    <>
      <Header amount={cardSet.length} />
      <Flashcard text={reveal ? back : `${index+1}. ${front}`}/>
      <Guess/>
      <Controls/>
    </>
  );
}

export default App;

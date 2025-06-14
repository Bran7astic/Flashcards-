import { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard";

function App() {
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  const nextCard = () => {
    setIndex(Math.floor(Math.random() * 10));
    setReveal(true);
  };

  const toggleCard = () => {
    setReveal(!reveal);
    console.log(reveal)
  }

  const cardSet = [
    { key1: "value1" },
    { key2: "value2" },
    { key3: "value3" },
    { key4: "value4" },
    { key5: "value5" },
    { key6: "value6" },
    { key7: "value7" },
    { key8: "value8" },
    { key9: "value9" },
    { key10: "value10" },
  ];

  const key = Object.keys(cardSet[index])[0];
  const val = cardSet[index][key];
  console.log(key, val);

  return (
    <>
      <h1>Volleyball Flashcards!</h1>
      <h3 id="">Test your volleyball knowledge with these interactive flashcards!</h3>
      <h4 id="desc">Number of cards: {cardSet.length}</h4>
      <br/>
      <Flashcard text={reveal? key : val} onClick={toggleCard}/>
      <button className="nextButton" onClick={nextCard}> →</button>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard";
import Header from "./Header";

function App() {
  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  const nextCard = () => {
    setIndex(Math.floor(Math.random() * 10));
    setReveal(false);
  };

  const toggleCard = () => {
    setReveal(!reveal);
    console.log(reveal);
  };

  const cardSet = [
    {
      front: "How many total players are there on each team in volleyball?",
      back: "Twelve players. Two sides, with six players each",
    },
    {
      front: "Which position wears a differently colored jersey?",
      back: "Libero",
    },
    {
      front:
        "What is it called when two opposing players simultaneously contact the ball above the net?",
      back: "A joust",
    },
    {
      front:
        "How many touches is a team allowed once the ball is on their side?",
      back: "Three touches",
    },
    {
      front:
        "What is it called when the ball is spiked over the net, and lands on the floor of the opponent's side? ",
      back: "A kill",
    },
    {
      front:
        "What is it called when the score is tied at a point where one team needs two more points to win?",
      back: "A deuce",
    },
    {
      front: "In beach volleyball, how many players are on either side?",
      back: "There are two players on each side",
    },
    {
      front:
        "What is it called when a setter attacks the ball on the second contact, rather than setting it for another player",
      back: "A dump",
    },
    {
      front: "Which player (ideally) makes the second contact with the ball?",
      back: "The setter",
    },
    { front: 
        "What is the continuous sequence of plays from the moment the ball is served until a point is scored or a fault is committed called?", 
      back: "A rally" },
  ];

  // console.log(cardSet[0].key, cardSet[0].val)

  const front = cardSet[index].front;
  const back = cardSet[index].back;
  //console.log(key, val);

  return (
    <>
      <Header amount={cardSet.length} />
      <Flashcard text={reveal ? back : front} onClick={toggleCard} />
      <button className="nextButton" onClick={nextCard}>
        {" "}
        →
      </button>
    </>
  );
}

export default App;

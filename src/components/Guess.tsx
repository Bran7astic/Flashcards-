import { useContext, useEffect, useState } from "react";
import "../App.css";
import { ActionContext } from "../ActionContext";

function Guess() {
  const { index, back, reveal, correctAnswers, setCorrectAnswers} = useContext(ActionContext);
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(null);

  useEffect(() => {
    setAnswer("");
    setCorrect(null);
  }, [ index ])

  const answered = answer.trim();

  const handleSubmit = () => {
    if (!reveal) {
        const modifiedBack = back.toLowerCase().trim();
        const modifiedAnswer = answer.toLowerCase().trim()
        setCorrect(modifiedAnswer === modifiedBack);
        if (correct) {
            setCorrectAnswers( new Set(correctAnswers).add(index));
        } else {
            setCorrectAnswers( new Set() )
        }
    }
  };

  const borderColor =
    correct === null ? "transparent" : correct ? "green" : "red";

  return (
    <div className="guess">
      Answer:
      <input
        className="answer"
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{
          borderColor: borderColor,
          transition: "border-color 0.3s",
        }}
      />
      <br />
      <button onClick={handleSubmit} className="submit">
        Submit
      </button>
    </div>
  );
}

export default Guess;

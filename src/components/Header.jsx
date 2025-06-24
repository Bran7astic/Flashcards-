import { useContext, useEffect } from "react";
import "../App.css";
import { ActionContext } from "../ActionContext";

function Header(props) {

  const {correctAnswers} = useContext(ActionContext);

  useEffect(() => {console.log(correctAnswers)}, [correctAnswers])

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="volleyball.svg"
          alt="volleyball icon"
          id="spinningBall"
          style={{ height: "50px", width: "50px" }}
        />
        <h1>Volleyball Flashcards!</h1>
      </div>
      <hr></hr>
      <h3 id="desc">
        Test your volleyball knowledge with these interactive flashcards!
      </h3>
      <div style={{display: 'flex', justifyContent: "space-evenly"}}>
        <h4 id="">Number of cards: {props.amount} </h4>
        {/* <h4>Streak: {correctAnswers.size} </h4> */}
      </div>
      <br />
    </>
  );
}

export default Header;

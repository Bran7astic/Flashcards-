import "../App.css"

function Header(props) {
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
      <h4 id="">Number of cards: {props.amount}</h4>
      <br />
    </>
  );
}

export default Header;

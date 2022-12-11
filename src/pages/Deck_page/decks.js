import { Link } from "react-router-dom";
import Navbar from "Components/Header/Navbar/Navbar";
import BOX from "Components/Body/Side_boxd/Sideboxd";
import Deck from "./deck";
import "./decks.css";
function decks() {
  return (
    <div className="bodywrapper">
      <Navbar />
      <div className="bigbox">
        <Deck />

        {/* <Decks /> */}
        {/* <div className="Grid">
          <p className="innner">
            <Link to="/flashcard_page" className="decks">
              Deck 1
            </Link>
          </p>
          <p className="innner">Deck 2</p>
          <p className="innner">Deck 3</p>
          <p className="innner">Deck 4</p>
          <p className="innner">Deck 5</p>
          <p className="innner">Deck 6</p>
          <p className="innner">Deck 7</p>
        </div> */}
      </div>
      <BOX className="deckbox" />
    </div>
  );
}

export default decks;

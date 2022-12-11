import Navbar from "Components/Header/Navbar/Navbar";
import "./flashpage.css"
function flashpage() {
  return (
    <div className="bodywrapper">
      <Navbar />
      <div className="bigbox">
        <div className="Grid">
          <p className="innner">Name of Deck</p>
          <p className="innner">Topic</p>
          <p className="innner">Number of Flashcards</p>
          <p className="innner">Tags</p>
        </div>
      </div>
    </div>
  );
}

export default flashpage;

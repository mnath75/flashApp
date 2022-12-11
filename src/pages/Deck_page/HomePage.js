import QuizCard from "../../Components/Decks/QuizCard";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { FaRegSmileBeam, FaRegFrown } from "react-icons/fa";
import "./HomePage.css";
import { useState } from "react";

export default function HomePage({
  quizMode,
  selectedDeck,
  questionNumber,
  setQuestionNumber,
  cardSide,
  setCardSide,
  knowItCards,
  setKnowItCards,
  dontKnowItCards,
  setDontKnowItCards,
  updateCard
}) {

  console.log(selectedDeck.content, 'this is deck content')
const [theirAnswer, setTheirAnswer] = useState('')
const [ wrongAnswer, setWrongAnswer] = useState(0)
  // Increments the question number to display the next card's front side
  const incrementQuestionNumber = () => {
    if (questionNumber < selectedDeck.content.length - 1) {
      setQuestionNumber(prev => prev+1);
    } else {
      setQuestionNumber(0);
    }
    setCardSide("front");
  };

  // Decrements the question number to display the previous card's front side
  const decrementQuestionNumber = () => {
    if (questionNumber === 0) {
      setQuestionNumber(selectedDeck.content.length - 1);
    } else {
      setQuestionNumber(prev => prev-1);
    }
    setCardSide("front");
  };

  return (
    <h1> Hello</h1>>
    <div className="home-page">
      <div className="sidebar-block"></div>
      {quizMode === false ? (
        <div>
          <h1 className="home-page-title">Home Page</h1>
          <p>Select a deck to get started!</p>
        </div>
      ) : (
        <div>
          <h1 className="home-page-title">Practice Time!</h1>
          <h2 className="selected-deck-title">{selectedDeck.data.name}</h2>
          <h3 className="card-number">{`${questionNumber + 1}/${
            selectedDeck.content.length
          }`}</h3>
          <div className="quiz-section">
            <div disabled>
            <BsCaretLeftFill
              className="change-question-button"
              onClick={decrementQuestionNumber}
            />
            </div>
            <QuizCard
              selectedDeck={selectedDeck}
              questionNumber={questionNumber}
              cardSide={cardSide}
              setCardSide={setCardSide}
              theirAnswer={theirAnswer}
              wrongAnswer={wrongAnswer}
              setWrongAnswer={setWrongAnswer}
              updateCard={updateCard}
            />
            <BsFillCaretRightFill
              className="change-question-button"
              onClick={incrementQuestionNumber}
            />
          </div>
          <div className="know-it-button-section">

            {selectedDeck.content[questionNumber].options &&  selectedDeck.content[questionNumber].options.split(',').map((item,index) => {
              return (
                <button className="know-it-button" key={index} onClick={() => {
                  setTheirAnswer(item)
                  setWrongAnswer(prev => prev+1)
                  updateCard([...selectedDeck.content, selectedDeck.content[questionNumber].wrongAnswer = wrongAnswer])
                }}>
                  {item}
                </button>
              )
            })}

            <button
              className="know-it-button"
              onClick={() =>
                setKnowItCards([
                  ...knowItCards,
                  selectedDeck.content[questionNumber],
                ])
              }
            >
              <FaRegSmileBeam />I know it
            </button>
            <button
              className="know-it-button"
              onClick={() =>
                setDontKnowItCards([
                  ...dontKnowItCards,
                  selectedDeck.content[questionNumber],
                ])
              }
            >
              <FaRegFrown />I don't know it
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

// const array = [1,2,3,4,5]
const array = [1]
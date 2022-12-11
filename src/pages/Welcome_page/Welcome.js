import Navbar2 from "Components/Header/Navbar/Navbar2";
import "./Welcome.css";
import brain from "Images/brain.jpeg"
function Welcome() {
  return (
    <div> 
    <div className="WNav">
    <Navbar2 />
    </div>
    <div className="Wrapper">
        <div className="container first">
          {/* <img className="picutre" src={brain}/> */}
          <div className="bodyText">
            <h1 id="bodyTitle"> Title </h1>
            <p>The Future of E-Learning</p>
          </div>
        </div>
      </div>

      <div className="container second">
        <div className="split left">
          <div className="centered">
            <h1> What is Spaced Learning? </h1>
            <p>
              {" "}
              To put it briefly, spaced learning comprises breaking a long
              course into several sessions or modules of shorter durations with
              breaks in between the sessions. With this approach of teaching,
              learners can retain the information taught in the course.
            </p>
            <br />
            <p>
              To put it briefly, spaced learning comprises breaking a long
              course into several sessions or modules of shorter durations with
              breaks in between the sessions. With this approach of teaching,
              learners can retain the information taught in the course.
            </p>
          </div>
        </div>

        <div className="split right">
          <div className="centered">
          
          </div>
        </div>
      </div>

      <div className="container second">
        <div className="split left" id="braine">
          <div className="centered">
            <h1 className="titletext"> What are the benefits of Spaced Learning</h1>
          </div>
        </div>

        <div className="split right" id="brain">
          <div className="centered">
            <p>
              {" "}
              1. Easy Learning and Less Load: Working and learning at the same
              time is not easy. If the learner is challenged in their daily
              life, then adding more learning stuff to their schedule, is not
              going to benefit at all. And if their minds are exhausted, then
              their chances of learning, understanding, absorbing, and recalling
              new knowledge become slim. Then, what’s the point of investing
              time and resources into training programs, if learners are
              unlikely to recall that information? This is why spaced learning   g
              exercises are separated by breaks. Small breaks for the mind to
              think about something else, or nothing else. This way, the brain
              has less of a load to take at any given time. So, learners feel
              reduced mental exhaustion and are more likely to assimilate the
              information they’re learning when they’re learning it. They’ll
              have more mental energy for the daily challenge presented by work,
              too.
            </p>
            <br />
          </div>
        </div>
      </div>

      <div className="container second">
        <div className="split left">
          <div className="centered">
            <h1> What is Spaced Learning? </h1>
            <p>
              2. Spaced learning improves learning. But it’s very important to
              be specific about this. Spacing repetitions over time facilitates
              long-term remembering.
              <br />
              3. It also enables learners to store information in memory in a
              manner that makes the information more resistant.
              <br />
              4. Spaced learning makes the learning concepts more interesting.
              <br />
              5. Studying more efficiently by not wasting time.
              <br />
              6. Learners can access study material whenever they want. With so
              many benefits, wouldn’t you too want to adopt spaced learning into
              your eLearning courses, or rather create an effective ‘spaced
              eLearning course’?
            </p>
          </div>
        </div>

        <div className="split right">
          <div className="centered">
          </div>
        </div>
      </div>
      </div>
  );
}

export default Welcome;

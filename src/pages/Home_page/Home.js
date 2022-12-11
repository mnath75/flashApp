import Navbar from "Components/Header/Navbar/Navbar";
import BOX from "Pages/Home_page/Side_box/Sideboxh";
import "./Home.css";
import Calendar from "Components/Body/calendar/calendar";
function Home() {
  return (
    <div className="bodywrapper">
      <Navbar />
      <div className="bigbox">
        <div className="Grid">
          <div>
            <Calendar />
          </div>
        </div>
      </div>
      <BOX />
    </div>
  );
}

export default Home;

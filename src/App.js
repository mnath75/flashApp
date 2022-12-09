import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";


function App() {
  return (
<>
<Router>
  <Header />
  <Routes>

    <Route path ='/' element = {<Home/>} />
    <Route path ='/sign-in' element = {<Sign/>} />
    <Route path ='/login' element = {<Login/>} />
    <Route path ='/forgotPassword' element = {<ForgotPassword/>} />

    
  </Routes>
</Router>




</>
  
  ) ;
    
  
}

export default App;

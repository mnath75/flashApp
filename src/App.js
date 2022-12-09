import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  return (
<>
<Router>
  <Routes>

    <Route path ='/' element = {<Home/>} />
    <Route path ='/signin' element = {<Signin/>} />
    <Route path ='/login' element = {<Login/>} />
    <Route path ='/forgotPassword' element = {<ForgotPassword/>} />

    
  </Routes>
</Router>




</>
  
  ) ;
    
  
}

export default App;

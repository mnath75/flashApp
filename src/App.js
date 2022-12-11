import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateFlashcard from "./components/flashcardComponents/CreateFlashcard";
import Profile from "./components/profileComponents/Profile";


function App() {
  return (
<>
<Router>
  <Header />
  <Routes>
  <Route path="/prof" element={<PrivateRoute />}>
 
          </Route>
  <Route path ='/' element = {<Home/>} />
  <Route path ='/create' element = {<CreateFlashcard/>} />
  
    <Route path ='/sign-in' element = {<Sign/>} />
    <Route path ='/profile' element = {<Profile/>} />
    
  
    <Route path="/sign-up" element={<SignUp />} />  
    
    <Route path ='/forgot-Password' element = {<ForgotPassword/>} />
    

    
  </Routes>
</Router>
<ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />




</>
  
  ) ;
    
  
}

export default App;

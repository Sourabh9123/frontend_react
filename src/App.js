
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from './components/Home';
import StudentForm from './components/StudentForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
   <>
   
   <BrowserRouter>
   
   <Navbar/>
   <Routes>
   <Route excat  path='/' element={<Home/>}/>
    <Route excat  path='/about' element= {<AboutUs/>} />
    <Route excat  path='/Contact' element= {<ContactUs/>} />
    <Route excat  path='/newstudent' element= {<StudentForm/>} />
    <Route excat  path='/login' element= {<LoginForm/>} />

   
    

   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;

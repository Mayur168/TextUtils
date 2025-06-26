
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

  

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode enabled or not
  
  const [alert, setAlert] = useState(null);

  const showAlert = (messsage, type) =>{
    setAlert({
      msg : messsage,
      type : type,
    })
    setTimeout (()=>{
      setAlert(null);
    },2000)////it is use to hide the alert in 2 sec 
  }

  const toggleMode = () =>{
    if(mode ==="light"){
    setMode("dark");
    document.body.style.backgroundColor = '#042743';
    showAlert(" Dark mode has been enable "," success ");
    // document.title = `TextUtils - Darkmode`///show the page title

    // setInterval(() => {
    //   document.title = `TextUtils is amazing `
    // }, 2000);

    // setInterval(() => {
      // document.title = `TextUtils install now `
    // }, 1500);
  //  it is  only for practice

  }
  else{
    setMode("light");
    document.body.style.backgroundColor = 'white';
    showAlert(" light mode has been enable "," success ");
    // document.title = `TextUtils - Lightmode`///show the page title

  }

  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>  
    <div className='container my-3'>
    <Routes>
      <Route path="/about" element={<About mode={mode} />} />
      <Route path="/" element={<TextForm heading="Try Textutils world counter ,Character counter" mode={mode} showAlert={showAlert} />} />
    </Routes> 
    </div>
    </Router>
    </> 
  );
}

export default App;


// //aboutText="About TextUtils"//

// // the exact use bcz  the exact key words it iss going to the exact path  
// mode={mode} element={<About/> } />


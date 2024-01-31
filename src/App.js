
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React , {useState} from 'react'
function App() {
  const [mode,setMode] = useState("light");
  const [btnText,setBtnText] = useState("Dark");
  const [alert,setAlert] = useState("","");
  const showAlert = (message, type) => {
    setAlert({msg : message, 
      type : type});
      setTimeout(() => setAlert(""), 2000);
  }
  const toggleMode =() =>{
   if (mode === "light"){
      setMode("dark");
      setBtnText("Light Mode");
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#ffffff";
      document.getElementById("textbox").style.backgroundColor = "grey";
      document.getElementById("textbox").style.color = "white";
      //document.getElementsbyClassName("navbar")[0].style.backgroundColor = "#535154"
     //document.getElementsByClassName("navbar")[0].style.color = "white";
   }
   else{
    setMode("light");
    setBtnText("Dark Mode");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    document.getElementById("textbox").style.backgroundColor = "#ffffff";
      document.getElementById("textbox").style.color = "#000000";
      //document.getElementsbyClassName("navbar")[0].style.backgroundColor = "#ffffff"
      //document.getElementsbyClassName("navbar")[0].style.color = "#000000";
   
   }
  }
  return (
   <>
  <Navbar about="About Us" mode = {mode} toggleMode = {toggleMode} btnText = {btnText} />
  <Alerts alert = {alert} />
   <Textbox showAlert = {showAlert}/>
  
   </>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
      })

      setTimeout(()=>{
        setAlert(null);

      },1000)
    
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode is enabled", "success");
      document.title='DW- Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled", "success");
      document.title='DW- Light Mode';
    }
  }
  return (
    <>
<Router>

<Navbar title="DW" About="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
    <Routes>
        <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to Analyze Below" mode={mode}/>
} />
        <Route exact path="About/*" element={<About/>} />


      </Routes>


</div>
</Router>
</>
  );
}

export default App;

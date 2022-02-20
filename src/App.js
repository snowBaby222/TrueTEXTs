import './App.css';
//import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import React, { useState } from 'react';
/*import{  //importing react router
  BroserRouter,
 // Switch,
  Route,
  Routes,
  //Link,
} from 'react-router-dom';*/

function App() {
  const[mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#000033';
      document.body.style.color = 'white';
      document.title = 'TrueTEXTs - Dark Mode'

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'TrueTEXTs - Light Mode'
    }
  }

  const[mode2, setMode2] = useState('light')
  const toggleMode2 = ()=>{
    if(mode2 === 'light'){
      setMode2 ('dark');
      document.body.style.color = 'white';
     

    }
    else{
      setMode2('light');
      document.body.style.color = 'black';
    }
  }

  return (   //returning JSX  -------------   Jsx will be compiled by babel.
   <>

<Navbar title='TrueTEXTs' home='Home' about='About Us' mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
    <TextForm heading='Analyze your text' mode={mode} toggleMode={toggleMode} textToAnalyze='Enter text to analyze:'/>
    <Footer mode2={mode2} toggleMode2={toggleMode2}/>
</div>
</>
)
}

export default App;


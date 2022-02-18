import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import Footer from './components/Footer';
import React, { useState } from 'react';
import{  //importing react router
  BrowserRouter,
 // Switch,
  Route,
  Routes,
  //Link,
} from 'react-router-dom';

function App() {
  const[mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#000033';
      document.body.style.color = 'white';
      document.title = 'TrueTEXT - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'TrueTEXT - Light Mode'
    }
  }

  return (   //returning JSX  -------------   Jsx will be compiled by babel.
   <>
  { /*<BrowserRouter>
<Navbar title='TrueTEXT' home='Home' about='About Us' mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
  
<Routes>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/">
    <TextForm heading='Analyze your text' textToAnalyze='Enter text to analyze:'/>
    </Route>
</Routes>
</div>
  </BrowserRouter>*/}

<BrowserRouter>  {/*using react router*/}
<Navbar title='TrueTEXT' home='Home' about='About Us' mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
    <Routes>
      <Route exact path="/" element={<TextForm heading='Analyze your text' textToAnalyze='Enter text to analyze:'/>}>
      </Route>
      <Route exact path="About" element={<About />}>
      </Route>
    </Routes>
</div>
  </BrowserRouter>,
</>
  );
}
export default App;


import { useState } from 'react';
import './App.css';
import Intro from './Intro.jsx';
import Footer from './Footer.jsx'
import GetStarted from './GetStarted.jsx'
import Header from './Header.jsx';
import BottomNav from './BottomNav.jsx';

function App() {
  const [start, setStart] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  let handleStartClick = () => {
    setStart(true);
  }

  let handleBackHomeClick = ()=>{
    setStart(false);
  }

  let handleTheme= ()=>{
   setDarkTheme(!darkTheme)
   
  }
  
  return (
    <div className="App">

      {
        start ? <>
          <GetStarted handleBackEvent = {handleBackHomeClick} theme = {darkTheme}/>
          <Footer theme = {darkTheme}/>


        </> : <>
        <Header handleDarkTheme={handleTheme } theme = {darkTheme}/>
          <Intro  theme = {darkTheme}/>
          <BottomNav handleClick={handleStartClick} theme = {darkTheme}/>
          <Footer theme = {darkTheme}/>
        </>
      }



    </div>
  );
}

export default App;

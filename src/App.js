import { useState } from 'react';
import './App.css';
import Intro from './Intro.jsx';
import Footer from './Footer.jsx'
import GetStarted from './GetStarted.jsx'
import Header from './Header.jsx';
import BottomNav from './BottomNav.jsx';

function App() {
  const [start, setStart] = useState(false)

  let handleStartClick = () => {
    setStart(true);
  }

  let handleBackHomeClick = ()=>{
    setStart(false);
  }
  return (
    <div className="App">

      {
        start ? <>
          <GetStarted handleBackEvent = {handleBackHomeClick}/>
          <Footer />


        </> : <>
        <Header/>
          <Intro  />
          <BottomNav handleClick={handleStartClick}/>
          <Footer />
        </>
      }



    </div>
  );
}

export default App;

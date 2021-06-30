import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LogoStyleContainer from './Components/LogoStyleContainer/LogoStyleContainer';
import Canvas from './Components/Canvas/Canvas';
import TextContent from './Components/TextContent/TextContent';

import { BrowserRouter } from 'react-router-dom';

function App() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current = 0;
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])

  function onScroll() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > scrollRef.current) {
      setScrollingDown(true);
    } else {
      setScrollingDown(false);
    }
    scrollRef.current = st;
  }

  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Header scrollingDown={scrollingDown} isFixed={isFixed} />
        <section className="body-section">
          <LogoStyleContainer />
          <TextContent />
        </section>

      </div>
    </BrowserRouter>
  );
}

export default App;

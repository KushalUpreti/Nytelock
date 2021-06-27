import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';

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
    if (scrollRef.current > 80) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
    scrollRef.current = st;
  }

  return (
    <div className="App">
      <Header scrollingDown={scrollingDown} isFixed={isFixed} />
      <div style={{ height: "200vh" }}></div>
    </div>
  );
}

export default App;

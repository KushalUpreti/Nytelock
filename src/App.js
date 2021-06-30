import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import LogoStyleContainer from './Components/LogoStyleContainer/LogoStyleContainer';
import TextContent from './Components/TextContent/TextContent';

import { BrowserRouter } from 'react-router-dom';

function App() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [textLogo, setTextLogo] = useState({
    title: "Lettermark Logos",
    para1: "A Monogram or lettermark is a typography-based logo that’s comprised of a few letters " +
      "usually a company’s initials. The lettermark is all about simplicity.",
    para2: "By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name. ",
    logoLink: "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-12.58.49-AM-1536x503.png"
  })
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

  function textLogoHandler(link) {
    let obj;
    switch (link) {
      case "#ll":
        obj = {
          title: "Lettermark Logos",
          para1: "A Monogram or lettermark is a typography-based logo that’s comprised of a few letters " +
            "usually a company’s initials. The lettermark is all about simplicity.",
          para2: "By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name. ",
          logoLink: "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-12.58.49-AM-1536x503.png"
        }
        break;

      case "#wl":
        obj = {
          title: "Wordmark Logos",
          para1: "Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business’ name alone. Think Visa and Coca-Cola. Wordmark logos work" +
            " really well when a company has a succinct and distinct name. Google’s logo is a great example of this. " +
            "The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.",
          para2: "",
          logoLink: "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.03.05-AM-768x251.png"
        }
        break;

      case "#pml":
        obj = {
          title: "Pictorial Mark Logos",
          para1: "A pictorial mark (sometimes called brand mark or logo symbol) is an icon—or graphic-based logo. It’s probably the image that " +
            " comes to mind when you think “logo”: the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies’ logos is " +
            " so emblematic, and each brand so established, that the mark alone is instantly recognizable. ",
          para2: "A true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.",
          logoLink: "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.04.56-AM-1536x500.png"
        }
        break;

      case "#aml":
        obj = {
          title: "Abstract Mark Logos",
          para1: "An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it’s an " +
            " abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower. ",
          para2: "Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of" +
            " being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand.",
          logoLink: "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.07.50-AM-1536x500.png"
        }
        break;

      case "#ml":
        obj = {
          title: "Mascot Logos",
          para1: "Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, " +
            "the mascot logo is a great way to create your very own brand spokesperson",
          para2: "A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. " +
            "Famous mascots include the Kool-Aid Man, KFC’s Colonel and PUB’s cute Water Wally. ",
          logoLink: "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.10.49-AM-1536x490.png"
        }
        break;

      case "#cl":
        obj = {
          title: "Combination Logos",
          para1: "A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot." +
            " The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image. ",
          para2: "Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.",
          logoLink: "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.14.22-AM-1536x496.png"
        }
        break;

      default:
        obj = {
          title: "Lettermark Logos",
          para1: "A Monogram or lettermark is a typography-based logo that’s comprised of a few letters " +
            "usually a company’s initials. The lettermark is all about simplicity.",
          para2: "By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name. ",
          logoLink: "https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-1.14.22-AM.png"
        }
    }
    setTextLogo(obj);
  }

  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Header scrollingDown={scrollingDown} isFixed={isFixed} />
        <section className="body-section">
          <LogoStyleContainer changeContent={textLogoHandler} />
          <TextContent content={textLogo} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;

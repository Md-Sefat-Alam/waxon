import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import AboutCarousel from "./components/AboutCarousel/AboutCarousel";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Portfolio from "./components/Portfolio/Portfolio";
import PortfolioQuots from "./components/PortfolioQuots/PortfolioQuots";

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="home" className="appHeader">
        <div className="container">
          <Header offset={offset} />
        </div>
      </header>
      {/* end Header */}
      <main style={{ minHeight: "100vh" }}>
        <section className="flex flex-col items-center">
          <Home />
        </section>
        {/* end home */}
        <section
          style={{ margin: "0px 0px 193px", padding: "230px 0px 0px" }}
          className="flex flex-col items-center"
          id="about"
        >
          <About />
        </section>
        <section
          style={{ marginBottom: "140px" }}
          className="lg:flex flex-col items-center hidden "
        >
          <AboutCarousel />
        </section>
        {/* end About */}
        <section
          style={{ margin: "0px 0px 200px", padding: "205px 0px 100px" }}
          className="flex flex-col items-center sectionColor"
          id="portfolio"
        >
          <Portfolio />
        </section>
        {/* end portfolio */}
        <section
          style={{ margin: "0px 0px 100px", padding: "0px" }}
          className="sectionColorWhite flex flex-col items-center"
          id="portfolio_quots"
        >
          <PortfolioQuots />
        </section>
        {/* end portfolio quots */}
        <section
          style={{ padding: "205px 0px 100px" }}
          className="flex flex-col items-center sectionColor"
          id="news"
        >
          <News />
        </section>
        {/* end portfolio quots */}
        <section
          style={{ margin: "0px 0px 150px", padding: "205px 0px 0px" }}
          className="sectionColorWhite flex flex-col items-center"
          id="contact"
        >
          <Contact />
        </section>
        {/* end Contact */}
      </main>
      <footer
        id="footer"
        className="bg-black text-white flex flex-col items-center"
      >
        <Footer />
      </footer>
      {/* end footer */}
    </>
  );
}

export default App;

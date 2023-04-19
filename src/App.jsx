import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <div className="relative z-0 ">
        <div className="bg-hero-pattern bg-cover ">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-hero-pattern bg-contain ">
          {" "}
          <About />
          <Experience />
        </div>

        <div className=" bg-hero-pattern bg-cover bg-center realtive z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

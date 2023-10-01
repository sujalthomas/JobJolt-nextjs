import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary p-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='relative z-0'>
          <Experience />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
          </div>
          <StarsCanvas />
        </div>


      </div>

    </BrowserRouter>
  );
}

export default App;

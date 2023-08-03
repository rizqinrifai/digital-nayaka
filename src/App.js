import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import NavbarComponent from "./components/NavbarComponent";
import { Career } from "./pages/Career";
import { Project } from "./pages/Project";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { Counter } from "./pages/Counter";
import { Partners } from "./pages/Partners";

function App() {
  return (
    <div className="App">
      <BrowserRouter className="home">
        <NavbarComponent />

        <Home />
        <Services />
        <Project />
        <Counter />
        <Team />
        <Career />
        <Partners />
        <Contact />

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

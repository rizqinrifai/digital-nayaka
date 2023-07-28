import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import NavbarComponent from "./components/NavbarComponent";
import { Career } from "./pages/Career";
import { Project } from "./pages/Project";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter className="home">
        <NavbarComponent />

        <Home />
        <Services />
        <Career />
        <Project />
        <Team />
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

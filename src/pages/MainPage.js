import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Services } from "./Services";
import NavbarComponent from "../components/NavbarComponent";
import { Career } from "./Career";
import { Project } from "./Project";
import { Team } from "./Team";
import { Contact } from "./Contact";
import { Counter } from "./Counter";
import { Partners } from "./Partners";

function MainPage() {
  return (
    <div className="App">
      <NavbarComponent />

      <Home />
      <Services />
      <Project />
      <Counter />
      <Team />
      <Career />
      <Partners />
      <Contact />
    </div>
  );
}

export default MainPage;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Employee } from "./pages/Employee";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter className="home">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

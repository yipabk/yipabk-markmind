import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import LandingPage from "./pages/Landing";
import { Kontribusi } from "./pages/Kontribusi";

function App() {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="kontribusi" element={<Kontribusi />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

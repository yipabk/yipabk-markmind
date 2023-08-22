import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Kontribusi } from "./pages/Kontribusi";
import { TentangKami } from "./pages/TentangKami";
import { Partner } from "./pages/Partner";
import { Publikasi } from "./pages/Publikasi";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="kontribusi" element={<Kontribusi />} />
          <Route path="tentang-kami" element={<TentangKami />} />
          <Route path="partner" element={<Partner />} />
          <Route path="publikasi" element={<Publikasi />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

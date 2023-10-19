import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Kontribusi } from "./pages/Kontribusi";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Partner } from "./pages/Partner";
import { Care } from "./pages/Program/Care";
import { Life } from "./pages/Program/Life";
import { Raise } from "./pages/Program/Raise";
import { Teach } from "./pages/Program/Teach";
import { Adhd } from "./pages/Publikasi/Artikel/Adhd";
import { Autism } from "./pages/Publikasi/Artikel/Autism";
import { Dyslexia } from "./pages/Publikasi/Artikel/Dyslexia";
import { Dyspraxia } from "./pages/Publikasi/Artikel/Dyspraxia";
import { BeritaTerkini } from "./pages/Publikasi/BeritaTerkini/BeritaTerkini";
import { Publikasi } from "./pages/Publikasi/Publikasi";
import { TentangKami } from "./pages/TentangKami/TentangKami";
import { ToastContainer } from "react-toastify";

function App() {
  AOS.init();
  return (
    <div className="flex flex-col font-montserrat">
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Navbar></Navbar>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/kontribusi" element={<Kontribusi />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/publikasi">
            <Route index element={<Publikasi />} />
            <Route path="berita-terkini" element={<BeritaTerkini />} />
          </Route>
          <Route path="/program">
            <Route path="life" element={<Life />} />
            <Route path="raise" element={<Raise />} />
            <Route path="teach" element={<Teach />} />
            <Route path="care" element={<Care />} />
          </Route>
          <Route path="/artikel">
            <Route path="dyspraxia" element={<Dyspraxia />} />
            <Route path="dyslexia" element={<Dyslexia />} />
            <Route path="autism" element={<Autism />} />
            <Route path="adhd" element={<Adhd />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

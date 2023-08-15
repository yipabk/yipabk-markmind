import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;

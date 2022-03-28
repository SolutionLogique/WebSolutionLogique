import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./app.scss";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Home />
        <div className="sections">
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

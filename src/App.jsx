import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import LogicielsDev from "./components/logicielsDev/LogicielsDev";
import MaterielReseau from "./components/materielReseau/MaterielReseau";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./app.scss";




function App() {
  return (
    <Router>
        <Navbar/>
        <img
        className="banner"
        alt="logo_solution_logique_informatique"
        href=""
        src="assets/cloud.jpg"
      ></img>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path="/logicielsDev" element={<LogicielsDev />} />
          <Route path="/materielReseau" element={<MaterielReseau />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>

  );
}

export default App;

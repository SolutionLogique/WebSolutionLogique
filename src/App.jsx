import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import NosServices from "./components/nosServices/NosServices";
import MaterielReseau from "./components/materielReseau/MaterielReseau";
import MaterielsInformatiques from "./components/materielsInformatiques/MaterielsInformatiques";
import Print from "./components/print/Print";
import Data from "./components/data/Data";
import Telecom from "./components/telecom/Telecom";
import Security from "./components/security/Security";
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
          <Route path="/nosServices" element={<NosServices />} />
          <Route path="/materielReseau" element={<MaterielReseau />} />
          <Route path="/print" element={<Print />} />
          <Route path="/data" element={<Data />} ></Route>
          <Route path="/telecom" element={<Telecom />} ></Route>
          <Route path="/security" element={<Security />} ></Route>
          <Route path="/materielsInformatiques" element={<MaterielsInformatiques />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>

  );
}

export default App;

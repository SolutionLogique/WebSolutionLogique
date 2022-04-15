import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import LogicielsEbp from "./components/logicielsEBP/LogicielsEbp";
import Ebpcomptabilite from "./components/ebpcomptabilite/Ebpcomptabilite";
import Ebpgestionco from "./components/ebpgestionco/Ebpgestionco";
import Ebpbatiment from "./components/ebpbatiment/Ebpbatiment";
import NosServices from "./components/nosServices/NosServices";
import Informatique from "./components/informatique/Informatique";
import Telecom from "./components/telecom/Telecom";
import Securite from "./components/securite/Securite";
import Web from "./components/web/Web"
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
          <Route path="/logicielsEBP" element={<LogicielsEbp />}></Route>
          <Route path="/ebpcomptabilite" element={< Ebpcomptabilite />}></Route>
          <Route path="/ebpgestionco" element={< Ebpgestionco />}></Route>
          <Route path="/ebpbatiment" element={< Ebpbatiment />}></Route>
          <Route path="/nosServices" element={<NosServices />} />
          <Route path="/informatique" element={<Informatique />} />
          <Route path="/telecom" element={<Telecom />} ></Route>
          <Route path="/securite" element={<Securite />} ></Route>
          <Route path="/web" element={<Web />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>

  );
}

export default App;

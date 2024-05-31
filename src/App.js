import React from "react";
import NavBar from "./NavBar";
import InfoSection from "./InfoSection";
import Features from "./Features";
import OurTeam from "./OurTeam";
import MissionVisionValues from "./MissionVisionValues";
import News from "./News";
import Supporters from "./Supporters";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';


function App() {
  return (
    <div> 
      <NavBar />
      <InfoSection />
      <Features />
      <OurTeam />
      <MissionVisionValues />
      <News />
      <Supporters />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

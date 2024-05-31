import React from "react";
import "./styles.css";

function InfoSection() {
  return (
    
    <div className="card text-center" id="info-section">
      
      <div className="card-body">
        <blockquote className="card-title">NO PATIENT ALONE</blockquote>
        <br></br>
        <p className="card-text">
          Το <strong>Cordia Health</strong> είναι μια κοινωνική πλατφόρμα/εφαρμογή
          με στόχο την διασύνδεση ανθρώπων με χρόνια νοσήματα και παρόμοιες
          εμπειρίες. Μέσω της δύναμης της κοινότητας, της αλληλεγγύης και της
          ενσυναίσθησης, ο καθένας μας μπορεί να νιώθει πιο δυνατός, όταν έρχεται
          αντιμέτωπος με μια σημαντική δυσκολία.
        </p>
      </div>
    </div>
  );
}

export default InfoSection;

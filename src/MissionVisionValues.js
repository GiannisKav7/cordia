import React from "react";
import "./styles.css";

function MissionVisionValues() {
  return (
    <section id="mission-vision-values" className="container my-5">
      <h2 className="text-center">Όραμα</h2>
      <div className="row">
        <div className="col-md-4">
          <h4>Mission</h4>
          <p>Our mission statement.</p>
        </div>
        <div className="col-md-4">
          <h4>Vision</h4>
          <p>Our vision statement.</p>
        </div>
        <div className="col-md-4">
          <h4>Values</h4>
          <p>Our core values.</p>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionValues;

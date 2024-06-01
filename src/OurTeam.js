import React from "react";
import "./styles.css"; // Ensure you have the necessary styles

function OurTeam() {
  return (
    <section id="our-team" className="container my-5">
      <h2 className="text-center">Η Ομάδα μας</h2>
      <br></br>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="/images/teo.jpg" alt="Thodoris Spiliotis" className="img-fluid rounded-circle mb-3" />
          <h4>Thodoris Spiliotis</h4>
          <p><strong>CEO</strong></p>
          <ul className="list-unstyled">
            <li>Living with heart disease ICD</li>
            <li>TedxTalk about my health journey</li>
            <li>Business partner at Solidus Assyst</li>
            <li>Master in Translational engineering in Health and Medicine, NTUA</li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/jim.jpg" alt="Dimtrios Soulani" className="img-fluid rounded-circle mb-3" />
          <h4>Dimtrios Soulani</h4>
          <p><strong>Head of Product</strong></p>
          <ul className="list-unstyled">
            <li>Product Manager at Konica Minolta Business Solutions Greece </li>
            <li>Junior Technology Product Manager at PeopleCert</li>
            <li>Experience & Side Events Project Manager at TEDx Athens</li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/john.jpg" alt="Giannis Kavvetsos" className="img-fluid rounded-circle mb-3" />
          <h4>Giannis Kavvetsos</h4>
          <p><strong>Full Stack Developer</strong></p>
          <ul className="list-unstyled">
            <li>Software engineer specialist at Alpha Bank </li>
            <li>RPA consultant at Delotitte</li>
            <li>Master in Electrical Engineering, University of Patras</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;

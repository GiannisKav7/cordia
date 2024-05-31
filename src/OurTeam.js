import React from "react";
import "./styles.css"; // Ensure you have the necessary styles

function OurTeam() {
  return (
    <section id="our-team" className="container my-5">
      <h2 className="text-center">Ομάδα</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="team-member1.jpg" alt="Team Member 1" className="img-fluid rounded-circle mb-3" />
          <h4>Member 1</h4>
          <p>Role</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="team-member2.jpg" alt="Team Member 2" className="img-fluid rounded-circle mb-3" />
          <h4>Member 2</h4>
          <p>Role</p>
        </div>
        <div className="col-md-4 text-center">
          <img src="team-member3.jpg" alt="Team Member 3" className="img-fluid rounded-circle mb-3" />
          <h4>Member 3</h4>
          <p>Role</p>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;

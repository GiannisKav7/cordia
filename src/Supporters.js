import React from "react";
import "./styles.css";

function Supporters() {
  return (
    <section id="supporters" className="container my-5">
      <h2 className="text-center">Υποστηρικτές</h2>
      <div className="row">
        <div className="col-md-3 text-center">
          <img src="supporter1-logo.jpg" alt="Supporter 1" className="img-fluid mb-3" />
          <p>Supporter 1</p>
        </div>
        <div className="col-md-3 text-center">
          <img src="supporter2-logo.jpg" alt="Supporter 2" className="img-fluid mb-3" />
          <p>Supporter 2</p>
        </div>
        <div className="col-md-3 text-center">
          <img src="supporter3-logo.jpg" alt="Supporter 3" className="img-fluid mb-3" />
          <p>Supporter 3</p>
        </div>
        <div className="col-md-3 text-center">
          <img src="supporter4-logo.jpg" alt="Supporter 4" className="img-fluid mb-3" />
          <p>Supporter 4</p>
        </div>
      </div>
    </section>
  );
}

export default Supporters;

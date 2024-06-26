import React from "react";
import "./styles.css";

function Supporters() {
  return (
    <section id="supporters" className="container my-5">
      <h2 className="text-center">Οι Υποστηρικτές μας</h2>
      <br></br>
      <div className="row">
        <div className="col-md-6 text-center">
          <a href="https://startsmartsee.org/" target="_blank" rel="noopener noreferrer">
            <img src="/images/startsmart.jpg" alt="Supporter 1" className="img-fluid supporter-img mb-3" />
          </a>
        </div>
        <div className="col-md-6 text-center">
          <a href="https://acein.aueb.gr/en/" target="_blank" rel="noopener noreferrer">
            <img src="/images/acein.jpg" alt="Supporter 2" className="img-fluid supporter-img mb-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Supporters;

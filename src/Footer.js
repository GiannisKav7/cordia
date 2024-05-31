import React from "react";
import "./styles.css"; // Ensure you have a Footer.css file for styling this component

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>Email: teo15spiliotis@gmail.com</p>
            <p>Κινητό: +30 6936640707</p>
            <p>Σταθερό: +30 2100087541</p>
            <p>Διεύθυνση: Νέας Φωκαιας 10, Χαϊδάρι, 12461</p>
          </div>
          <div className="col-md-6">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/company/cordia-health/">LinkedIn</a> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

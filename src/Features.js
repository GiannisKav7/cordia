import React from "react";
import "./styles.css"; // Make sure to include your styling here

function Features() {
  return (
    <div id="features" className="container">
      <br></br>
      <h2 className="text-center">Δυνατότητες</h2>
      <br></br>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://uploads-ssl.webflow.com/645660b90d32812e743a7c83/645679c77006e1debf66d689_connectempathy.png"
            alt="Connect Empathy"
            className="resizable-image"
          />
          <p>
            Φιλτράρετε τις προτιμήσεις σας για να έρθετε σε επαφή με άτομα με
            παρόμοια εμπειρία με εσάς.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://uploads-ssl.webflow.com/645660b90d32812e743a7c83/645674a1bb983c27ea7aa6d0_us3ps07v79l8ihv865pthrag00-b85f0a7ab4729ad7d0dc6ccb7ce29742.png"
            alt="Digital Meetings"
            className="resizable-image"
          />
          <p>Οργανώστε ψηφιακές συναντήσεις και ανταλλάξτε μηνύματα.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://uploads-ssl.webflow.com/645660b90d32812e743a7c83/645678269d00791694fcacfe_pngwing.com.png"
            alt="Supporters"
            className="resizable-image"
          />
          <p>Γίνετε υποστηρικτές</p>
        </div>
        <div className="col-md-6">
          <img
            src="https://uploads-ssl.webflow.com/645660b90d32812e743a7c83/6456758d7d4faa6718604c0e_doctoricon.png"
            alt="Health Experts"
            className="resizable-image"
          />
          <p>Συμβουλευτείτε ειδικούς υγείας που θα συμμετέχουν στην εφαρμογή</p>
        </div>
      </div>
    </div>
  );
}

export default Features;

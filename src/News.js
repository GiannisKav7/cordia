import React from "react";
import "./styles.css";

function News() {
  return (
    <section id="news" className="container my-5">
      <h2 className="text-center">Τα Νέα μας</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Event 1</h4>
          <p>Details about event 1.</p>
        </div>
        <div className="col-md-6">
          <h4>Event 2</h4>
          <p>Details about event 2.</p>
        </div>
      </div>
    </section>
  );
}

export default News;

import React, { useState } from 'react';
import "./styles.css";
import { db } from './firebase-config'; // Ensure you import your Firebase config

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('contacts').add(formData);
      alert('Το μήνυμά σας έχει σταλεί!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Σφάλμα κατά την αποστολή μηνύματος!');
    }
  };

  return (
    <div id="form">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-form-heading-wrap">
              <h2 className="contact-heading">Πάρε μέρος</h2>
              <p className="paragraph-light">
                Για οποιαδήποτε ερωτήσεις ή πληροφορίες, είμαστε εδώ για εσάς. Συμπληρώστε τη φόρμα επικοινωνίας παρακάτω και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
              </p>
            </div>
          </div>
        </div>
        <form id="contact" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">ΟΝΟΜΑΤΕΠΩΝΥΜΟ</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">ΔΙΕΥΘΥΝΣΗ ΗΛΕΚΤΡΟΝΙΚΟΥ ΤΑΧΥΔΡΟΜΕΙΟΥ (EMAIL)</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">ΜΗΝΥΜΑ</label>
            <textarea name="message" rows="4" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">ΚΑΤΑΧΩΡΙΣΗ</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

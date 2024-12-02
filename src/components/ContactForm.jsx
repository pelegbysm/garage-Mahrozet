import React, { useState } from 'react';
import { db } from '../firebase/firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    licenseNum: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('נא להזין שם');
      return false;
    }
    if (!formData.phone.trim() || !/^[0-9]{9,10}$/.test(formData.phone)) {
      setError('נא להזין מספר טלפון תקין');
      return false;
    }
    if (!formData.licenseNum.trim() || !/^[0-9]{7,8}$/.test(formData.licenseNum)) {
      setError('נא להזין מספר רישוי תקין');
      return false;
    }
    if (!formData.message.trim()) {
      setError('נא להזין הודעה');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setError('');
    
    try {
      const dataToSubmit = {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'new'
      };

      await addDoc(collection(db, 'contacts'), dataToSubmit);
      
      setFormData({
        name: '',
        phone: '',
        licenseNum: '',
        message: ''
      });
      
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setError('אירעה שגיאה בשליחת הטופס. אנא נסה שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError(''); // נקה הודעות שגיאה בעת שינוי
  };

  return (
    <section id="contact" className="section container pb-4">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">צור קשר</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {submitStatus === 'success' && (
            <div className="alert alert-success" role="alert">
              הטופס נשלח בהצלחה!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="name" className="form-label">שם:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${error && !formData.name ? 'is-invalid' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="phone" className="form-label">טלפון:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`form-control ${error && !formData.phone ? 'is-invalid' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{9,10}"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="licenseNum" className="form-label">מספר רישוי:</label>
                <input
                  type="text"
                  id="licenseNum"
                  name="licenseNum"
                  className={`form-control ${error && !formData.licenseNum ? 'is-invalid' : ''}`}
                  value={formData.licenseNum}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{7,8}"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">הודעה:</label>
              <textarea
                id="message"
                name="message"
                className={`form-control ${error && !formData.message ? 'is-invalid' : ''}`}
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
              />
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="btn btn-primary mx-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'שולח...' : 'שלח'}
              </button>
              <button
                type="button"
                className="btn btn-secondary mx-2"
                onClick={() => {
                  setFormData({
                    name: '',
                    phone: '',
                    licenseNum: '',
                    message: ''
                  });
                  setError('');
                }}
                disabled={isSubmitting}
              >
                נקה
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
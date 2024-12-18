import React from 'react';
import ContactForm from '../components/ContactForm';
import Reviews from '../components/Reviews';

const AboutUs = () => {
  const features = [
    {
      icon: "fas fa-history",
      title: "ניסיון רב שנים",
      description: "מאז 1999 אנחנו מספקים שירותי מוסך מקצועיים ואמינים"
    },
    {
      icon: "fas fa-tools",
      title: "צוות מקצועי",
      description: "הצוות שלנו כולל מכונאים מוסמכים עם ניסיון רב בתחום"
    },
    {
      icon: "fas fa-certificate",
      title: "הסמכות והתמחויות",
      description: "עובדים עם כל היצרנים המובילים עם הסמכות מקצועיות"
    }
  ];

  const services = [
    {
      title: "החלפת מנועים",
      description: "התמחות בהחלפה ושיפוץ מנועים לכל סוגי הרכבים"
    },
    {
      title: "תיקון גירים",
      description: "מומחים בתיקון והחלפת תיבות הילוכים אוטומטיות וידניות"
    },
    {
      title: "טיפול בטורבו",
      description: "שירותי תיקון, שיפוץ והחלפת מגדשי טורבו"
    },
    {
      title: "פחחות וצבע",
      description: "שירותי פחחות מקצועיים וצביעה בסטנדרטים גבוהים"
    }
  ];

  return (
    <main className="container my-5">
      <section className="about-intro text-center mb-5">
        <h1 className="mb-4">מוסך מחרוזת - מקצועיות ואמינות מאז 1999</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead">
              מוסך מחרוזת הוקם מתוך אהבה למקצוע ומחויבות לאיכות. במשך למעלה מ-20 שנה
              אנחנו מספקים שירותי מוסך מקצועיים ואמינים, עם דגש על שירות אישי ומקצועיות ללא פשרות.
            </p>
          </div>
        </div>
      </section>

      <section className="features mb-5">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className={`${feature.icon} fa-3x mb-3 text-primary`}></i>
                  <h3 className="h4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="our-services mb-5">
        <h2 className="text-center mb-4">השירותים שלנו</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews mb-5">
        <Reviews />
      </section>

      <section className="location-info mb-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h2>איפה אנחנו נמצאים?</h2>
                <p>
                  <i className="fas fa-map-marker-alt me-2"></i>
                  מחרוזת 35, תל אביב יפו
                </p>
                <p>
                  <i className="fas fa-phone me-2"></i>
                  050-425-1000
                </p>
                <p>
                  <i className="fas fa-clock me-2"></i>
                  שעות פעילות:
                </p>
                <ul className="list-unstyled ms-4">
                  <li>ראשון - חמישי: 08:00 - 19:00</li>
                  <li>שישי: 08:00 - 15:00</li>
                  <li>שבת: סגור</li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13529.277086219661!2d34.7564733!3d32.0335485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b3915be26b51%3A0x7eadc8a9a47fd0b!2z157Xldeh15og157Xl9eo15XXlteq!5e0!3m2!1siw!2sil!4v1733384686288!5m2!1siw!2sil"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="מיקום המוסך"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-buttons text-center mb-5">
        <a href="tel:0504251000" className="btn btn-primary btn-lg me-3">
          <i className="fas fa-phone me-2"></i>
          חייגו עכשיו
        </a>
        <a href="https://wa.me/+972504251000" className="btn btn-success btn-lg">
          <i className="fab fa-whatsapp me-2"></i>
          צרו קשר בוואטסאפ
        </a>
      </section>

      <ContactForm />
    </main>
  );
};

export default AboutUs;
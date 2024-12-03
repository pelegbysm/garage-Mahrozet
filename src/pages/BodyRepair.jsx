import React from 'react';
import ContactForm from '../components/ContactForm';

const BodyRepair = () => {
  const bodyServices = [
    {
      title: "תיקוני פחחות",
      image: "/images/bodyshop.jpg",
      description: "החזרת רכבים למצבם המקורי לאחר תאונות עם גימור מושלם. שימוש בחומרים איכותיים ובטכנולוגיות מתקדמות להבטחת תוצאות מעולות."
    },
    {
      title: "צביעת רכב",
      image: "/images/painting.jpeg",
      description: "צביעה מקצועית ואיכותית של רכבים בכל צבע. שימוש בצבעים איכותיים, תנור צביעה מקצועי והתאמת צבע מדויקת."
    },
    {
      title: "שיטת PDR",
      image: "/images/pdr.jpeg",
      description: "תיקון שקעים ללא צבע - שיטה מתקדמת המאפשרת תיקון שקעים וכיפופים קלים ללא צורך בצביעה מחדש, תוך שמירה על הצבע המקורי."
    },
  ];

  return (
    <main className="container my-5">
      <h1 className="text-center mb-4">שירותי פחחות וצבע מקצועיים</h1>
      
      <div className="text-center mb-4">
        <p className="lead">
          המומחים שלנו מספקים שירותי פחחות וצבע ברמה הגבוהה ביותר, 
          עם דגש על איכות, דיוק ושירות מקצועי.
        </p>
      </div>

      <div className="row">
        {bodyServices.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 body-repair-card">
              <div className="image-container">
                <img 
                  src={service.image} 
                  className="card-img-top" 
                  alt={service.title}
                  style={{
                    width: '450px',
                    height: '350px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title h4 mb-3">{service.title}</h3>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card my-4">
        <div className="card-body">
          <h2 className="card-title h3 mb-4">למה לבחור בנו?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature">
                <i className="fas fa-tools mb-2 text-primary"></i>
                <h3 className="h5">ציוד מתקדם</h3>
                <p>שימוש בציוד החדיש ביותר לתיקוני פחחות וצבע</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature">
                <i className="fas fa-paint-brush mb-2 text-primary"></i>
                <h3 className="h5">חומרים איכותיים</h3>
                <p>עבודה עם חומרים מהמותגים המובילים בשוק</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature">
                <i className="fas fa-check-circle mb-2 text-primary"></i>
                <h3 className="h5">אחריות מלאה</h3>
                <p>אחריות על כל עבודות הפחחות והצבע</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </main>
  );
};

export default BodyRepair;
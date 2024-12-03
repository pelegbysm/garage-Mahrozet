import React from 'react';
import ContactForm from '../components/ContactForm';

const EnginesRebuild = () => {
  const rebuildServices = [
    {
      title: "שיפוץ מנועים לרכב פרטי",
      image: "/images/er.png",
      description: "שיפוץ מקצועי של מנועים לרכבים פרטיים, כולל החלפת חלקים פגומים ושחוקים, וביצוע עדכונים טכנולוגיים בהתאם לסטנדרטים המודרניים ביותר."
    },
    {
      title: "שיפוץ מנועים לדיזל",
      image: "/images/dieselRebuild.png",
      description: "החזרת מנועי דיזל למצב תקין תוך שמירה על הביצועים המקסימליים. התהליך כולל בדיקות מקיפות לזיהוי תקלות, תיקון והחלפה של חלקים פגומים."
    },
    {
      title: "שיפוץ והחלפת מנועי ספורט",
      image: "/images/espc.png",
      description: "שיפוץ מקצועי של מנועי ספורט, כולל שדרוגים מתקדמים שמטרתם לשפר את ביצועי הרכב ולהבטיח ביצועים אופטימליים."
    }
  ];

  return (
    <main className="container my-5">
      <h1 className="text-center mb-4">שירותי שיפוץ מנועים</h1>
      
      <div className="row">
        {rebuildServices.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ContactForm />
    </main>
  );
};

export default EnginesRebuild;
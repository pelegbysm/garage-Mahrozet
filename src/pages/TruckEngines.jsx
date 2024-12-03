import React from 'react';
import ContactForm from '../components/ContactForm';

const TruckEngines = () => {
  const services = [
    {
      title: "שירות למשאיות",
      image: "/images/truckService.jpeg",
      description: "מתן שירות מקיף ומקצועי למשאיות מכל הסוגים והגדלים, עם דגש על איכות ומקצועיות. כל מנוע שאנו מספקים נבדק בקפידה, ומגיע עם אחריות מלאה."
    },
    {
      title: "אבחון מתקדם",
      image: "/images/diagnostics.jpeg",
      description: "שימוש בציוד אבחון מתקדם לזיהוי מדויק של תקלות ובעיות במשאיות. הצוות שלנו כאן כדי להבטיח שתקבל את המנוע הנכון לצרכים שלך, עם התקנה מקצועית ושירות אישי."
    },
    {
      title: "טיפול במערכת הבלמים",
      image: "/images/brakeService.jpeg",
      description: "שירותי תיקון ותחזוקה למערכות בלמים, הבטחת בטיחות מקסימלית בכביש. הצוות שלנו כאן כדי להבטיח שתקבל את הטיפול הנכון לצרכים שלך, עם התקנה מקצועית ושירות אישי."
    }
  ];

  return (
    <main className="container my-5">
      <h1 className="text-center mb-4">מנועים למשאיות - האיכות שאתה צריך</h1>
      
      <div className="text-center mb-5">
        <p>
          המוסך שלנו מתמחה במכירה ובהתקנה של מנועים איכותיים למשאיות, 
          המתאימים לכל סוגי המשאיות והדרישות התובעניות ביותר. 
          מנועים אלו נבדקים בקפדנות, עומדים בסטנדרטים הגבוהים ביותר, 
          ומבטיחים ביצועים אמינים לאורך זמן.
        </p>
      </div>

      <div className="row mb-5">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={service.image} 
                className="card-img-top" 
                alt={service.title}
                style={{ 
                  height: '250px',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/er.png";
                }}
              />
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

export default TruckEngines;
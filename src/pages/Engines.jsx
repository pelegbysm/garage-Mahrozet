import React from 'react';
import ContactForm from '../components/ContactForm';

const Engines = () => {
  const engineServices = [
    {
      title: "החלפת מנוע לרכב פרטי",
      image: "/images/er.png",
      description: `מומחי המנועים שלנו מבצעים החלפת מנוע מקצועית הכוללת:
        • בדיקה מקיפה של המנוע הישן וזיהוי כל התקלות
        • התאמה מדויקת של המנוע החדש לדגם הרכב
        • שימוש בחלקים מקוריים ואיכותיים
        • בדיקות מקיפות לפני ואחרי ההתקנה
        • אחריות מלאה על העבודה והחלקים`,
      features: [
        "התמחות במנועי בנזין ודיזל",
        "עבודה עם כל היצרנים המובילים",
        "אפשרות למנוע חדש או משופץ",
        "בדיקת מערכות נלוות",
        "תמיכה טכנית לאורך כל הדרך"
      ]
    },
    {
      title: "החלפת מנוע לרכבי דיזל וג'יפים",
      image: "/images/dieselRebuild.png",
      description: `שירות מקצועי למנועי דיזל כבדים הכולל:
        • אבחון מתקדם של תקלות מנוע
        • התאמת פתרון אופטימלי - החלפה או שיפוץ
        • טיפול במערכות הזרקת דלק
        • כיול מערכות אלקטרוניות
        • בדיקות דינמומטר לאחר ההחלפה`,
      features: [
        "מומחיות במנועי דיזל מודרניים",
        "טיפול במערכות Common Rail",
        "כיול מערכות ניהול מנוע",
        "בדיקות עומס וביצועים",
        "אחריות מורחבת"
      ]
    },
    {
      title: "החלפת מנוע לרכבי יוקרה/ספורט",
      image: "/images/espc.png",
      description: `שירות מותאם אישית לרכבי יוקרה וספורט:
        • שימוש בכלים ייעודיים לכל יצרן
        • עבודה לפי הנחיות היצרן המקורי
        • שימוש בחלקים מקוריים בלבד
        • בדיקות מקיפות של כל מערכות הרכב
        • תיעוד מלא של כל שלבי העבודה`,
      features: [
        "התמחות ברכבי יוקרה אירופאים",
        "ציוד אבחון מתקדם",
        "חלקים מקוריים בלבד",
        "שמירה על אחריות יצרן",
        "ליווי מקצועי מלא"
      ]
    }
  ];

  return (
    <main className="container my-5">
      <section className="intro-section text-center mb-5">
        <h1 className="mb-4">החלפת מנועים מקצועית</h1>
        <p className="lead">
          במוסך מחרוזת אנו מתמחים בהחלפת מנועים לכל סוגי הרכבים. 
          עם צוות מקצועי ומנוסה, ציוד מתקדם וידע נרחב, 
          אנו מבטיחים עבודה איכותית ואמינה עם אחריות מלאה.
        </p>
      </section>

      <section className="services-section">
        {engineServices.map((service, index) => (
          <div key={index} className="service-card mb-5">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={service.image} className="img-fluid rounded-start" alt={service.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-text">{service.description}</p>
                    <div className="features mt-3">
                      <h4>יתרונות השירות:</h4>
                      <ul>
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="pricing-info card mb-5">
        <div className="card-body">
          <h3 className="card-title">מידע על מחירים ואחריות</h3>
          <div className="row">
            <div className="col-md-6">
              <h4>המחיר כולל:</h4>
              <ul>
                <li>החלפת מנוע מלאה</li>
                <li>שמן מנוע איכותי</li>
                <li>מסנן שמן חדש</li>
                <li>נוזל קירור</li>
                <li>בדיקות מקיפות</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4>אחריות:</h4>
              <ul>
                <li>3 חודשים על העבודה</li>
                <li>אחריות ללא הגבלת ק"מ</li>
                <li>אחריות על חלקים מקוריים</li>
                <li>תמיכה טכנית מלאה</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default Engines;
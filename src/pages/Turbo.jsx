import React from 'react';
import ContactForm from '../components/ContactForm';

const Turbo = () => {
  const turboServices = [
    {
      title: "שיפוץ ליבת טורבו",
      image: "/images/turbo1.jpeg",
      description: "שירות שיפוץ מקצועי הכולל החלפת מיסבים, איזון דינמי, והרכבה מחדש עם חלקים מקוריים.",
      features: [
        "שימוש בחלקים מקוריים בלבד",
        "איזון דינמי בציוד מתקדם",
        "בדיקת גאומטריה משתנה",
        "3 חודשי אחריות ללא הגבלת ק\"מ"
      ]
    },
    {
      title: "החלפת טורבו חדש",
      image: "/images/turbo2.jpeg",
      description: "התקנת טורבו חדש מקורי או חליפי איכותי, כולל כיול מערכות ובדיקות מקיפות.",
      features: [
        "טורבו מקורי או חליפי איכותי",
        "התקנה מקצועית",
        "כיול מערכות ממוחשב",
        "אחריות יצרן מלאה"
      ]
    },
    {
      title: "טיפול במערכת טורבו",
      image: "/images/turboReplace.png",
      description: "בדיקה וטיפול מקיף במערכת הטורבו כולל צנרת, שסתומים ובקרה אלקטרונית.",
      features: [
        "בדיקת מערכת בקרת לחץ",
        "ניקוי מערכת ה-EGR",
        "כיול שסתום פליטה",
        "בדיקת חיישנים ומפעילים"
      ]
    }
  ];

  const commonSymptoms = [
    {
      title: "סימני תקלה נפוצים",
      symptoms: [
        "ירידה בביצועי המנוע",
        "עשן כחול או שחור",
        "רעשים חריגים מהמנוע",
        "צריכת שמן מוגברת",
        "נורת תקלה דולקת"
      ]
    },
    {
      title: "מתי צריך טיפול?",
      indicators: [
        "כל 100,000 ק\"מ - בדיקה מקיפה",
        "בעת ירידה בביצועים",
        "כשיש רעשים חריגים",
        "בעת צריכת שמן חריגה",
        "לאחר תקלת מנוע משמעותית"
      ]
    }
  ];

  return (
    <main className="container my-5">
      <section className="intro-section text-center mb-5">
        <h1>מרכז הטורבו המקצועי</h1>
        <p className="lead">
          במוסך מחרוזת אנו מתמחים בשיפוץ, החלפה וטיפול במערכות טורבו.
          הצוות המקצועי שלנו מצויד בידע, ניסיון וציוד מתקדם לטיפול בכל סוגי הטורבו.
        </p>
      </section>

      <section className="services-section mb-5">
        <h2 className="text-center mb-4">השירותים שלנו</h2>
        <div className="row">
          {turboServices.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={service.image} className="card-img-top" alt={service.title} />
                <div className="card-body">
                  <h3 className="card-title h4">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="diagnosis-section mb-5">
        <div className="row">
          {commonSymptoms.map((item, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <ul className="list-unstyled">
                    {(item.symptoms || item.indicators).map((point, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section card mb-5">
        <div className="card-body">
          <h2>מידע טכני - מערכת הטורבו</h2>
          <p>
            מגדש טורבו הוא מערכת מתוחכמת המנצלת את גזי הפליטה של המנוע להגברת כוח וביצועים.
            המערכת מורכבת מטורבינה ומדחס המחוברים לציר משותף, ופועלת במהירויות גבוהות במיוחד.
          </p>
          <div className="row mt-3">
            <div className="col-md-6">
              <h4>חשיבות הטיפול התקופתי</h4>
              <ul>
                <li>מניעת נזקים למנוע</li>
                <li>שמירה על ביצועים מיטביים</li>
                <li>חיסכון בדלק</li>
                <li>הארכת חיי המערכת</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4>אחריות ושירות</h4>
              <ul>
                <li>3 חודשי אחריות</li>
                <li>ללא הגבלת קילומטרים</li>
                <li>בדיקות מקיפות</li>
                <li>תמיכה טכנית</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default Turbo;
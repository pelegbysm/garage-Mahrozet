import React from 'react';
import ContactForm from '../components/ContactForm';

const Transmission = () => {
  const transmissionTypes = [
    {
      title: "גירים אוטומטיים",
      content: [
        "מומחיות בכל סוגי תיבות ההילוכים האוטומטיות",
        "טיפול במערכות הידראוליות ואלקטרוניות",
        "החלפת רכיבים פנימיים וחיצוניים",
        "שיפוץ ממירי מומנט",
        "כיול ותכנות מחדש של יחידות הבקרה"
      ]
    },
    {
      title: "גירים ידניים",
      content: [
        "החלפת מצמדים ומשפמים",
        "טיפול במערכת ההעברה",
        "החלפת מיסבים וסינכרונים",
        "תיקון דליפות שמן",
        "כיוון מערכת המצמד"
      ]
    },
    {
      title: "גירים רובוטיים",
      content: [
        "אבחון מערכות אלקטרוניות",
        "החלפת אקטואטורים ומנועי העברה",
        "תיקון מערכות בקרה",
        "שדרוג תוכנה",
        "כיול מערכות"
      ]
    }
  ];

  const commonProblems = [
    {
      symptom: "החלפת הילוכים לא חלקה",
      solutions: [
        "בדיקת מערכת חיישנים",
        "כיול מחדש של יחידת הבקרה",
        "החלפת שמן גיר",
        "תיקון או החלפת סולנואידים"
      ]
    },
    {
      symptom: "רעשים חריגים",
      solutions: [
        "בדיקת מיסבים ומערכות סיבוב",
        "החלפת חלקים שחוקים",
        "איזון מערכת ההנעה",
        "טיפול במערכת המצמד"
      ]
    },
    {
      symptom: "דליפות שמן",
      solutions: [
        "החלפת אטמים",
        "תיקון סדקים",
        "בדיקת לחצי שמן",
        "החלפת צינורות ומחברים"
      ]
    }
  ];

  return (
    <main className="container my-5">
      <section className="intro-section text-center mb-5">
        <h1>שירותי גירים מקצועיים</h1>
        <p className="lead">
          במוסך מחרוזת אנו מספקים פתרונות מקיפים לכל סוגי תיבות ההילוכים.
          הצוות המקצועי שלנו מצויד בידע וניסיון רב בטיפול בגירים מכל הסוגים.
        </p>
      </section>

      <section className="transmission-types mb-5">
        <h2 className="text-center mb-4">התמחות בכל סוגי הגירים</h2>
        <div className="row">
          {transmissionTypes.map((type, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{type.title}</h3>
                  <ul className="list-unstyled">
                    {type.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-2">
                        <i className="fas fa-check text-success me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="common-problems mb-5">
        <h2 className="text-center mb-4">פתרונות לבעיות נפוצות</h2>
        <div className="row">
          {commonProblems.map((problem, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5">{problem.symptom}</h3>
                  <ul className="list-unstyled">
                    {problem.solutions.map((solution, solIndex) => (
                      <li key={solIndex} className="mb-2">
                        <i className="fas fa-tools text-primary me-2"></i>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="warranty-section card mb-5">
        <div className="card-body">
          <h2 className="card-title">אחריות ושירות</h2>
          <div className="row">
            <div className="col-md-6">
              <h4>אחריות מקיפה</h4>
              <ul>
                <li>6 חודשי אחריות על העבודה</li>
                <li>ללא הגבלת קילומטרים</li>
                <li>אחריות על חלקים מקוריים</li>
                <li>תמיכה טכנית זמינה</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4>יתרונות השירות</h4>
              <ul>
                <li>צוות מקצועי ומנוסה</li>
                <li>ציוד אבחון מתקדם</li>
                <li>חלקי חילוף מקוריים</li>
                <li>מחירים הוגנים</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default Transmission;
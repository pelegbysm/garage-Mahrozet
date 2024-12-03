import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const services = [
    {
      key: "engines",
      image: "/images/espc.png",
      title: "החלפת מנועים לרכב פרטי",
      description: "מומחים בהחלפה ושיפוץ של מנועי בנזין ודיזל מכל היצרנים",
      link: "/engines"
    },
    {
      key: "body-repair",
      image: "/images/bodyshop.jpg",
      title: "פחחות וצבע",
      description: "שירותי פחחות מקצועיים וצביעה באיכות גבוהה",
      link: "/body-repair"
    },
    {
      key: "transmission",
      image: "/images/transRebuild.jpg",
      title: "שיפוץ והחלפת גירים",
      description: "טיפול מקצועי בתיבות הילוכים אוטומטיות וידניות",
      link: "/transmission"
    },
    {
      key: "turbo",
      image: "/images/turbo2.jpeg",
      title: "שיפוץ והחלפת טורבו",
      description: "שירות מקצועי למגדשי טורבו כולל אבחון ושדרוג",
      link: "/turbo"
    },
    {
      key: "truck-engines",
      image: "/images/truckES.png",
      title: "החלפת מנועים למשאיות",
      description: "מומחים בהחלפה ושיפוץ של מנועי דיזל למשאיות",
      link: "/truck-engines"
    }
  ];


  return (
    <main>
      <div className="container">
        <div className="card intro-card mt-4 mb-4">
          <div className="card-body text-center">
            <h1 className="card-title mb-4">מוסך מחרוזת - המומחים להחלפת מנועים וגירים בתל אביב</h1>
            <div className="card-text mb-4">
              <p>מעל 20 שנות ניסיון בתחומי הרכב, עם דגש על מקצועיות, אמינות ושירות אישי. 
                המוסך שלנו, הממוקם במרכז תל אביב, מתמחה בהחלפת מנועים, תיקון גירים, 
                טיפול במערכות טורבו ושירותי פחחות וצבע.</p>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card feature-card h-100">
                  <div className="card-body">
                    <i className="fas fa-tools mb-3"></i>
                    <h3>מקצועיות ואמינות</h3>
                    <p>צוות מקצועי ומומחה עם שירות מקצועי</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card feature-card h-100">
                  <div className="card-body">
                    <i className="fas fa-shield-alt mb-3"></i>
                    <h3>אחריות מקיפה</h3>
                    <p>אחריות על כל העבודה והחלקים</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card feature-card h-100">
                  <div className="card-body">
                    <i className="fas fa-clock mb-3"></i>
                    <h3>זמינות גבוהה</h3>
                    <p>שירות מהיר ומקצועי בזמנים נוחים</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section id="services" className="mt-5">
          <h2 className="text-center mb-4">השירותים שלנו</h2>
          <div className="row">
            {services.map((service) => (
              <div key={service.key} className="col-md-4 mb-4">
                <div className="card service-card h-100">
                  <img src={service.image} className="card-img-top service-image" alt={service.title} />
                  <div className="card-body text-center">
                    <Link to={service.link} className="service-link">
                      <h3 className="card-title">{service.title}</h3>
                    </Link>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactForm />
      </div>
    </main>
  );
};

export default Home;
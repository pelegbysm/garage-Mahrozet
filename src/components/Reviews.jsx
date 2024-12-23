import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // מניעת טעינה כפולה של הסקריפט
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      return;
    }

    const loadGoogleMapsApi = () => {
      const mapDiv = document.createElement('div');
      document.body.appendChild(mapDiv);

      try {
        const service = new window.google.maps.places.PlacesService(
          new window.google.maps.Map(mapDiv, {
            center: { lat: 32.0335485, lng: 34.7564733 },
            zoom: 1
          })
        );

        service.getDetails({
          placeId: 'ChIJ3xKKW0mzAhURCYvznujrsPE',
          fields: ['reviews', 'rating']
        }, (result, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && result?.reviews) {
            setReviews(result.reviews);
          } else {
            setError('לא ניתן לטעון ביקורות');
          }
          setLoading(false);
          mapDiv.remove();
        });
      } catch (err) {
        console.error('Error:', err);
        setError('שגיאה בטעינת הביקורות');
        setLoading(false);
        mapDiv.remove();
      }
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = loadGoogleMapsApi;
    script.onerror = () => {
      setError('שגיאה בטעינת Google Maps API');
      setLoading(false);
    };
    document.head.appendChild(script);

  }, []);

  return (
    <div className="card my-4">
      <div className="card-header">
        <h2 className="text-center">ביקורות לקוחות</h2>
      </div>
      <div className="card-body">
        {loading && (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">טוען...</span>
            </div>
          </div>
        )}
        
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="row">
          {reviews.map((review, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 mb-0">{review.author_name}</h3>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${i < review.rating ? 'text-warning' : 'text-muted'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="card-text">{review.text}</p>
                  <small className="text-muted">{review.relative_time_description}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
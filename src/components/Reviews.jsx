import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
      const locationId = process.env.REACT_APP_GOOGLE_PLACE_ID;
      
      try {
        // שימוש ב-URL המלא במקום נתיב יחסי
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${locationId}&fields=reviews&key=${apiKey}`;
        
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        
        if (response.data && response.data.result && response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        } else {
          setReviews([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('אירעה שגיאה בטעינת הביקורות');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div className="text-center">טוען ביקורות...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <div className="card my-4">
      <div className="card-header">
        <h2 className="text-center">ביקורות לקוחות</h2>
      </div>
      <div className="card-body">
        <div className="row">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="col-md-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h3 className="h5 mb-0">{review.author_name || 'אנונימי'}</h3>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star ${
                              i < review.rating ? 'text-warning' : 'text-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="card-text">{review.text || 'אין תגובה'}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>אין ביקורות להצגה כרגע</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
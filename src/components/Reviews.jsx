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
        const url = `https://businessprofile.googleapis.com/v1/locations/${locationId}/reviews?key=${apiKey}&pageSize=5&orderBy=rating`;
        const response = await axios.get(url);
        setReviews(response.data.reviews);
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
          {reviews.map((review, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 mb-0">{review.reviewer.displayName || 'אנונימי'}</h3>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            i < review.starRating ? 'text-warning' : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="card-text">{review.comment || 'אין תגובה'}</p>
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
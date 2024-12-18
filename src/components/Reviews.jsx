import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

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
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <Card className="w-full max-w-4xl mx-auto my-4">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">ביקורות לקוחות</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="border-b p-4 last:border-b-0">
              <div className="flex items-center mb-2">
                <h3 className="font-semibold">{review.reviewer.displayName || 'אנונימי'}</h3>
                <div className="mx-2">•</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < review.starRating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment || 'אין תגובה'}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Reviews;
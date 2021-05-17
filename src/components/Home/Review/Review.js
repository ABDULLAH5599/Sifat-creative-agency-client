import React, { useEffect } from 'react';
import { useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect( () => {
        fetch('https://afternoon-beach-11581.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className="container my-5">
            <h2 style={{ color: "#555454"}} className="text-center">Our Clients <span style={{color:'#fc3030'}}>Feedback</span></h2>
            <div className="row mt-5">
                    {
                        reviews.map(review =><ReviewCard review={review}></ReviewCard>)
                    }
            </div>
        </section>
    );
};

export default Review;
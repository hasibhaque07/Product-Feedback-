import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import FeedbackCard from '../../components/feedbackCard/FeedbackCard';
import { useSelector } from 'react-redux';
import Comments from '../../components/comments/Comments';
import './FeedbackDetails.css'
import { FaAngleLeft } from "react-icons/fa6";

const FeedbackDetails = () => {
    const location = useLocation();
    const feedback = location.state.feedback;
    
    const feedbackItemsG = useSelector((state) => state.feedbackReducer.feedbackItems);
    const feedbackItem = feedbackItemsG.filter((feedbackItem) => feedbackItem.id === feedback.id);
    
    return (
      <div className='feedback-details-container'>
          
          <div className='details-container'>
            <div className='f-navigation'>
              <div>
                <FaAngleLeft className='back-icon'/>
                <Link to='/feedback-page' className='back-link'>Go back</Link>
              </div>
              <Link to='/edit-page' 
                state={{
                  feedback: feedback,
                  id: feedback.id,
                  title: feedback.title,
                  description: feedback.description,
                  category: feedback.category 
                }}><button className='edit-feedback-btn'>Edit Feedback</button>
              </Link>
            </div>
            <FeedbackCard feedback = {feedbackItem[0]}/>
            <div>
              <Comments feedback = {feedbackItem[0]}/>
            </div>
          </div>
      </div>
    ) 
}

export default FeedbackDetails

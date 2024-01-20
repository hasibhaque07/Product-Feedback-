import React from 'react'

import { Link } from 'react-router-dom';
import './FeedbackCard.css'
import { useDispatch} from 'react-redux';
import { upvoteUpdate } from '../../feedbackReducer/FeedbackSlice';
import { FaAngleUp } from "react-icons/fa6";

const FeedbackCard = ({feedback}) => {
    
    const dispatch = useDispatch();

    const btnClick = (id, e) => {
        e.preventDefault();
        dispatch(upvoteUpdate(id));
        
    }
    
    return (
        <Link to = '/feedback-details' state = {{feedback: feedback}} className='feedback-card-link'>
            <div className='feedback-card-container'>
                <div className='grid-container'>
                    <div className='grid-item upvote-btn-container'>
                        <Link>
                            <FaAngleUp className={`upvote-icon ${feedback.upvoted ? 'upvoted-icon-true' : 'upvoted-icon-false'}`}/>
                            {/* <button onClick={(e) => btnClick(feedback.id, e)} className='upvote-btn { feedback.upvoted?upvoted-true:upvoted-false}'>{feedback.upvotes}</button> */}
                            <button onClick={(e) => btnClick(feedback.id, e)} className={`upvote-btn ${feedback.upvoted ? 'upvoted-true' : 'upvoted-false'}`}>{feedback.upvotes}</button>
                        </Link>
                    </div>
                    <div className='grid-item content-container'>
                        <h3 className='feedback-title'>{feedback.title}</h3>  
                        <p className='feedback-description'>{feedback.description}</p>
                        <span className='feedback-category'>{feedback.category}</span>
                    </div>
                    
                    <div className='grid-item comment-container'>
                        <img src={require(`../../assets/shared/cmt.png`)} alt = 'comment'/>
                        <h2 className='feedback-comments-l'>{feedback.comments.length}</h2> 
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default FeedbackCard

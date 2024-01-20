import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { addNewFeedback } from '../../feedbackReducer/FeedbackSlice';
import { Link, useNavigate } from 'react-router-dom';
import './AddFeedback.css';
import { FaAngleLeft } from "react-icons/fa6";

const AddFeedback = () => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('feature');
    const [feedbackDetails, setFeedbackDetails] = useState('');

    const feedbackListG = useSelector((state) => state.feedbackReducer.feedbackItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newFeedback = {
        id: feedbackListG.length + 1,
        title: title,
        category: category,
        upvotes: 0,
        upvoted: false,
        status: 'suggested',
        description: feedbackDetails,
        comments: []
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNewFeedback(newFeedback));
        navigate('/feedback-page');
    }
    
    return (
        <div className='add-feedback-page-container'>
            <div className='add-feedback-page-content-container'>
                <div>
                    <FaAngleLeft className='back-icon'/>
                    <Link to='/feedback-page' className='back-link'>Go Back</Link>
                </div>
                <form className='add-feedback-container' onSubmit={handleSubmit}>
                    <h2 className='edit-page-headline'>Create New Feedback</h2>
                    <div className='feedback-titl'>
                        <p><b>Feedback Title</b></p>
                        <p className='title-desc'>Add a short, descriptive headline</p>
                        <input type='text'  className='input-box' onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='feedback-categoryy'>
                        <p><b>Category</b></p>
                        <p className='category-desc'>Choose a category for your feedback</p>
                        <select className='input-box' onChange={(e) => setCategory(e.target.value)}>
                            <option value='feature'>Feature</option>
                            <option value='ui'>UI</option>
                            <option value='ux'>UX</option>
                            <option value='enhancement'>Enhancement</option>
                            <option value='bug'>Bug</option>
                        </select>
                    </div>
                    <div className='feedback-details'>
                        <p><b>Feedback Details</b></p>
                        <p className='details-desc'>Include any specific comments on what should be improved, added, etc.</p>
                        <textarea className='text-box' onChange={(e) => setFeedbackDetails(e.target.value)}></textarea>
                    </div>
                    <div className='feedback-btn-container'>
                        <Link to = '/feedback-page'><button className='cancel-btn'>cancel</button></Link>
                        <button type='submit' className='add-feedback-btn'>Add Feedback</button>
                        
                    </div>
                </form>
            </div>
        
        </div>
    )
}

export default AddFeedback

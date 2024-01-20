import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { deleteFeedback, updateFeedback } from '../../feedbackReducer/FeedbackSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './EditPage.css'
import { FaAngleLeft } from "react-icons/fa6";

const EditPage = () => {

    const location = useLocation();
   

    const feedback = location.state.feedback;
   
    const [title, setTitle] = useState(location.state.title);
    const [category, setCategory] = useState(location.state.category);
    const [description, setDescription] = useState(location.state.description);
    

    // const feedbackListG = useSelector((state) => state.feedbackReducer.feedbackItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

   

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateFeedback({id: location.state.id, title, description, category}));
        navigate('/feedback-details', { state: { feedback:  feedback } });
    }
    const handleDelete = () => {
        dispatch(deleteFeedback(location.state.id))
        navigate('/feedback-page');
    }
    
    return (
        <div className='edit-page-container'>
            <div className='edit-page-content-container'>
                <div>
                    <FaAngleLeft className='back-icon'/>
                    <Link to='/feedback-details' state={{feedback: feedback}} className='back-link'>Go Back</Link>
                </div>
                <form className='edit-feedback-container' onSubmit={handleSubmit}>
                    <h2 className='edit-page-headline'>Edit 'Add tags for solutions'</h2>
                    <div >
                        <p><b>Feedback Title</b></p>
                        <p className='title-desc'>Add a short, descriptive headline</p>
                        <input type='text' className='input-box' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='feedback-categor'>
                        <p><b>Category</b></p>
                        <p className='category-desc'>Choose a category for your feedback</p>
                        <select className='input-box' value={category} onChange={(e) => setCategory(e.target.value)}>
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
                        <textarea className='text-box' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className='feedback-btn-container'>
                        <div>
                            <button className='delete-btn' type='button' onClick={handleDelete}>Delete</button>
                        </div>
                        <div className='cancel-save-btn-container'>
                            <Link to = '/feedback-details' state={{feedback: feedback}}><button className='cancel-btn'>cancel</button></Link>
                            <button type='submit' className='save-change-btn'>Save changes</button>
                            
                        </div>
                        
                    </div>
                </form>
        
            </div>
        </div>
    )
}

export default EditPage

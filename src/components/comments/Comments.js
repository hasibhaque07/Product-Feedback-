import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment } from '../../feedbackReducer/FeedbackSlice';
import './Comments.css'

const Comments = ({feedback}) => {
    
    const [newComment, setNewComment] = useState('');
    const currentUserG = useSelector((state) => state.feedbackReducer.currentUserG);
    const dispatch = useDispatch();
    
    const newCommentObj = {
        id: 99,
        content: newComment,
        user: currentUserG
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addNewComment({ id: feedback.id, newCommentObj }));
        setNewComment('');
    }
    return (
        <div className='comment-section-container'>
            <div className='all-comments'>
                <h3>{feedback.comments.length} Comments</h3>
                {feedback.comments.map((comment) =>{
                    return <div className='comm-container'>
                        
                        <div className='user-img'>
                            <img src= {require(`../../assets/user-images/${comment.user.image}`)} alt = 'logo' />
                        </div>
                        <div>
                            <h4>{comment.user.name}</h4>
                            <p className='userName'>@{comment.user.username}</p>
                            <p className='content'>{comment.content}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className='add-comment'>
                <h3>Add comment</h3>
                <form onSubmit={handleSubmit}>
                    <textarea className='text-area' value = {newComment} placeholder='Type your comment here' onChange={(e) => setNewComment(e.target.value)} required/>
                    <button type='submit' className='post-comment-btn'>Post comment</button>
                </form>
            </div>
        </div>
    )
}

export default Comments

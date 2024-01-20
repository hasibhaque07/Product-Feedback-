import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../../feedbackReducer/FeedbackSlice';
import './SideBar.css'

const SideBar = () => {
    const categoryFilterG = useSelector((state) => state.feedbackReducer.categoryFilterG);
    const [categoryFilter, setCategoryFilter] = useState(categoryFilterG);

    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(filterByCategory(categoryFilter));
    },[categoryFilter]);

    
    return (
        <div className='sidebar-container'>
            <div className='sidebar-header'>
                <h3 className='headline'>Frontend Mentor</h3>
                <p>Feedback Board</p>
            </div>
            <div className='sidebar-category'>
                <div className='category-btn-container'>
                    <button className={`category-btn ${categoryFilterG === '' ? 'category-btn-true' : 'category-btn-false'}`} onClick={() => setCategoryFilter('')}>All</button>
                    <button className={`category-btn ${categoryFilterG.includes('ui') ? 'category-btn-true' : 'category-btn-false'}`} onClick={() => setCategoryFilter('ui')}>UI</button>
                    <button className={`category-btn ${categoryFilterG.includes('ux') ? 'category-btn-true' : 'category-btn-false'}`} onClick={() => setCategoryFilter('ux')}>UX</button>
                    <button className={`category-btn ${categoryFilterG.includes('enhancement') ? 'category-btn-true' : 'category-btn-false'}`} onClick={() => setCategoryFilter('enhancement')}>Enhancement</button>
                    <button className={`category-btn ${categoryFilterG.includes('bug') ? 'category-btn-true' : 'category-btn-false'}`} onClick={() => setCategoryFilter('bug')}>Bug</button>
                    <button className={`category-btn ${categoryFilterG.includes('feature') ? 'category-btn-true' : 'category-btn-false'}`} onClick={() => setCategoryFilter('feature')}>Feature</button>
                </div>
                   
            </div>
        </div>
    )
}

export default SideBar

import React, { useEffect, useState } from 'react'

import './DropDown.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateSortBy } from '../../feedbackReducer/FeedbackSlice';
import { FaAngleDown } from "react-icons/fa6";

const DropDown = () => {
    const sortByG = useSelector((state) => state.feedbackReducer.sortByG);
    const [sortBy, setSortBy] = useState(sortByG);
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(updateSortBy(sortBy));
    },[sortBy]);

    let dropdownItems = document.getElementById('dropdown-items');
    let angleDownIcon = document.getElementById('angleDownIcon');
    
    const handleDropDown = (e) => {
        
        e.preventDefault();
        dropdownItems.classList.toggle('show');
        angleDownIcon.classList.toggle('rotate');
    }

    
    return (
        <div className='dropdown-container' >
            
            <span className='sortBy' onClick={handleDropDown}>Sort by: </span>
            <span className='sortByItem' onClick={handleDropDown}>{sortBy}</span>
            {/* <img src= {require(`../../assets/shared/icon-arrow-down.svg`)} alt = 'logo' /> */}
            <FaAngleDown onClick={handleDropDown} id='angleDownIcon'/>
            <div className='dropdown-items' id='dropdown-items' onClick={handleDropDown}>
                <span className='dropdown-item bottom-border' onClick={() => setSortBy('Most Upvotes')}>Most Upvotes</span>
                <span className='dropdown-item bottom-border' onClick={() => setSortBy('Least Upvotes')}>Least Upvotes</span>
                <span className='dropdown-item bottom-border' onClick={() => setSortBy('Most Comments')}>Most Comments</span>
                <span className='dropdown-item' onClick={() => setSortBy('Least Comments')}>Least Comments</span>
            </div>
            
        </div>
    )
}

export default DropDown

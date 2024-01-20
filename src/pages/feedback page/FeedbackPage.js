import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import FeedbackCard from '../../components/feedbackCard/FeedbackCard';
import {  useSelector } from 'react-redux';

import SideBar from '../../components/sideBar/SideBar';
import DropDown from '../../components/dropDown/DropDown';
import './FeedbackPage.css'
import { FaRegLightbulb } from "react-icons/fa6";

const FeedbackPage = () => {
    const feedbackItemsG = useSelector((state) => state.feedbackReducer.feedbackItems);
    const [feedbackItems, setFeedbackItems] = useState(feedbackItemsG);
    const categoryFilter = useSelector((state) => state.feedbackReducer.categoryFilterG);
    const sortByG = useSelector((state) => state.feedbackReducer.sortByG);
    
    useEffect(() =>{
      
      const categoryFilteredItems = feedbackItemsG.filter((feedbackItem) => feedbackItem.category.includes(categoryFilter));
      
      const sortedFeedbacItems = categoryFilteredItems.slice().sort((a, b) => {
        if(sortByG === 'Most Upvotes'){
          return b.upvotes - a.upvotes;
        }
        else if(sortByG === 'Least Upvotes'){
          return a.upvotes - b.upvotes;
        }
        else if(sortByG === 'Most Comments'){
          return b.comments.length - a.comments.length; 
        }
        else if(sortByG === 'Least Comments'){
          return a.comments.length - b.comments.length; 
        }
      });
      
      setFeedbackItems(sortedFeedbacItems);
    },[feedbackItemsG,categoryFilter, sortByG]);
    
    return (
      
        <div className='feedback-page-container'>
          <div className='left-side'>
              <SideBar />
          </div>
          <div className='right-side'>
              <div className='header-container'>
                <div className='suggesion-count-container'>
                  <FaRegLightbulb className='bulb-icon'/>
                  <h3 className='suggesion-count'>{feedbackItems.length} Suggestions</h3>
                </div>
                <div className='dropDown'>
                  <DropDown />
                </div>
                <Link to = '/add-feedback'><button className='add-feedback-btn'>+ Add feedback</button></Link>
              </div>
              <div className='feedback-cards-container'>
                {feedbackItems.map((feedback) => <FeedbackCard key = {feedback.id} feedback = {feedback}/>)}
              </div>
          </div>
          
          
      </div>
      
    )
}

export default FeedbackPage

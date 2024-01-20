import feedbackData from '../assets/data.json';
import { createSlice } from '@reduxjs/toolkit';

const initialData = {
  feedbackItems: feedbackData.productRequests,
  currentUserG: feedbackData.currentUser,
  categoryFilterG: '',
  sortByG: 'Most Upvotes'
  
};

const feedbackSlice = createSlice({
  name: 'feedback', // Provide a string name for your slice
  initialState: initialData,
  reducers: {
    upvoteUpdate: (state, action) => {

      state.feedbackItems = state.feedbackItems.map((feedbackItem) => {
        if(feedbackItem.id === action.payload) {
          if(!feedbackItem.upvoted){
            return { ...feedbackItem, upvotes: feedbackItem.upvotes + 1, upvoted: true };
          }
          else if(feedbackItem.upvoted){
            return { ...feedbackItem, upvotes: feedbackItem.upvotes - 1, upvoted: false };
          }
        }
        return feedbackItem; 
      })
      
    },
    addNewFeedback: (state, action) => {
      state.feedbackItems.push(action.payload);
    },

    filterByCategory: (state, action) => {
      
      state.categoryFilterG = action.payload;
      
    },
    addNewComment: (state, action) => {
      const {id, newCommentObj} = action.payload;
      

      state.feedbackItems.map((feedbackItem) => {
        if(feedbackItem.id === id) {
          
          feedbackItem.comments.push(newCommentObj);
          
          
        }
         
      });
    },
    updateFeedback: (state, action) =>{
      const {id, title, description, category} = action.payload;
     
      state.feedbackItems = state.feedbackItems.map((feedbackItem) => {
        if (feedbackItem.id === id) {
          // Return a new object with the updated properties
          return {
            ...feedbackItem,
            title: title,
            description: description,
            category: category
          };
        }
        return feedbackItem; // Return unchanged items
      });
    },
    deleteFeedback: (state, action) => {
      
      state.feedbackItems = state.feedbackItems.filter((feedbackItem) => feedbackItem.id !== action.payload); 
      
    },
    updateSortBy: (state, action) => {
      
      state.sortByG = action.payload;
    }
    
  }
});

export const { upvoteUpdate, addNewFeedback, filterByCategory, addNewComment, updateFeedback, deleteFeedback, updateSortBy } = feedbackSlice.actions;
export default feedbackSlice.reducer;

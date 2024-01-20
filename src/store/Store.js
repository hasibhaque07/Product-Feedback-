import {configureStore} from '@reduxjs/toolkit'

import feedbackReducer from '../feedbackReducer/FeedbackSlice';

const store = configureStore({
    reducer: {
        feedbackReducer : feedbackReducer
    }
})

export default store;
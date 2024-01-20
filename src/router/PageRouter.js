import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FeedbackPage from '../pages/feedback page/FeedbackPage';
import FeedbackDetails from '../pages/feedback details/FeedbackDetails';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AddFeedback from '../pages/addFeedback/AddFeedback';
import EditPage from '../pages/editPage/EditPage';

const PageRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/feedback-page' element = {<FeedbackPage/>}/>
            <Route path = '/' element = {<FeedbackPage/>}/>
            <Route path = '/feedback-details' element = {<FeedbackDetails />} />
            <Route path = '/add-feedback' element = {<AddFeedback />} />
            <Route path = '/edit-page' element = {<EditPage />} />
            <Route path = '*' element = {<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default PageRouter

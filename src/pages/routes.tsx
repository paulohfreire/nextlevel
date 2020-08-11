import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TeacherForm from './TeacherForm';
import Landing from './Landing';
import TeacherList from './TeacherList';

function Routes() {
    return (
        <BrowserRouter> 
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
        
}

export default Routes;
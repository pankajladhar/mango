import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './../pages/HomePage';
import Report from './../pages/ReportPage';

const App = props => {
    return (
        <Router>
            <div>
                <Route path="/mango" exact component={Home} />
                <Route path="/mango/report" exact component={Report} />
            </div>
        </Router>
    );
};

export default App;
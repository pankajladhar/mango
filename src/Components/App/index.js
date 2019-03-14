import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './../HomePage';
import Report from './../ReportPage';

const App = props => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/report" exact component={Report} />
            </Switch>
        </Router>
    );
};

export default App;
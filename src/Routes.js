import React from "react";
import {Router, Switch, Route} from "react-router-dom";

import SubmitForm from "./components/SubmitForm";
import SupportForm from "./components/SupportForm";
import history from './helpers/history';

const Routes = () => {
    return(
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={SupportForm} />
                <Route path="/Submitted" component={SubmitForm} />
            </Switch>
        </Router>
    )
};

export default Routes;
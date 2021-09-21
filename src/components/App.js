import React from 'react';
import {Router, Switch, Route} from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';

import SubmitForm from "./SubmitForm";
import SupportForm from "./SupportForm";
import history from './../helpers/history';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Router history={history} forceRefresh={true}>
        <Header/>
        <Switch>
            <Route path="/" exact component={SupportForm} />
            <Route path="/Submitted" component={SubmitForm} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

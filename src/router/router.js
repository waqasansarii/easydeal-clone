import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainCardActivate from '../components/activate/main_card';
import Login from '../components/login/login';
import Signup from '../components/signup/signup';


const RouterApp = ()=> {
    return(
        <Router >
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/activate'  component={MainCardActivate}/>
                <Route path='/signup' component={Signup} />
            </Switch>
        </Router>
    )
}

export default RouterApp
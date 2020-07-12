import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Dashboard from "./views/Dashboard"
import Sidebar from "./views/Sidebar"
const history = createHistory();

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path={"/"}  history={history} render={(props) =>
                    <div>
                        <Sidebar {...props}/>
                        <Dashboard {...props}/>
                    </div>
                } />
            </Router>
        );
    }
}

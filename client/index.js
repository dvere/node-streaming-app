
import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Switch } from 'react-router-dom';
import 'bootstrap';
require('./index.scss');
import Root from './components/Root.js';

if (document.getElementById('root')) {
    ReactDOM.render(
        <HashRouter>
            <Switch>
                <Root />
            </Switch>
        </HashRouter>,
        document.getElementById('root')
    );
}
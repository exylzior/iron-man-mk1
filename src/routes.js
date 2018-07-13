import React from 'react';
import { Route, Switch } from 'react-router';
import { FanModelCard, FanGroupCard, FanUnit, FanBuild, Header } from './components/_Index';




export default (
    <div>
        <Route path='/' component={Header} />
        <div className="container">
            <Switch>
                <Route exact path='/' component={FanGroupCard} />
                <Route path='/model/:value' component={FanModelCard} />
                <Route path='/unit/:group/:value' component={FanUnit} />
                <Route path='/new' component={FanBuild} />
            </Switch>
        </div>
    </div>
);
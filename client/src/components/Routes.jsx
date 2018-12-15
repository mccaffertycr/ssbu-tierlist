import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Create from '../pages/Create';
import Random from '../pages/Random';
import NoMatch from './NoMatch';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Random} />
      <Route exact path='/create' component={Create} />
      <Route exact path='/random' component={Random} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routes;

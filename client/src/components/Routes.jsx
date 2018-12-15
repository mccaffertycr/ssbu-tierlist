import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Create from '../pages/Create';
import NoMatch from './NoMatch';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Create} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Create from '../pages/Create';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Create} />
    </Switch>
  );
};

export default Routes;

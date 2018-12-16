import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Create from '../pages/Create';
import TierlistList from '../pages/TierlistList';
import TierlistContainer from '../pages/TierlistContainer';
import NoMatch from './NoMatch';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <TierlistList query={'top'} />} />
      <Route exact path='/create' component={Create} />
      <Route exact path='/top' render={() => <TierlistList query={'top'} />} />
      <Route exact path='/new' render={() => <TierlistList query={'new'} />} />
      <Route
        exact
        path='/random'
        render={() => <TierlistContainer random={true} />}
      />
      <Route exact path='/:id' render={() => <TierlistContainer />} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routes;

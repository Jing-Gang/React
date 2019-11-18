import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from '../views/IndexPage';
import RouterView from './RouterView'
import routes from './router.config'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={routes.routes}/>
    </Router>
  );
}

export default RouterConfig;

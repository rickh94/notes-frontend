import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import AppliedRoute from './components/AppliedRoute'

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: () => <div>Loading...</div>
})

const Login = Loadable({
  loader: () => import('./components/Login'),
  loading: () => <div>Loading...</div>
})

const NotFound = Loadable({
  loader: () => import('./components/NotFound'),
  loading: () => <div>Loading...</div>
})

export default function Routes({ childProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
      <AppliedRoute path="/login" exact component={Login} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  )
}

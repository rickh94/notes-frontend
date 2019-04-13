import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Login from './components/Login'

import AppliedRoute from './components/AppliedRoute'

export default function Routes({ childProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
      <AppliedRoute path="/login" exact component={Login} props={childProps} />
      <Route component={NotFound} />
    </Switch>
  )
}

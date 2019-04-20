import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import AppliedRoute from './components/AppliedRoute'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import UnauthenticatedRoute from './components/UnauthenticatedRoute'

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

const Signup = Loadable({
  loader: () => import('./components/Signup'),
  loading: () => <div>Loading...</div>
})

const NewNote = Loadable({
  loader: () => import('./components/NewNote'),
  loading: () => <div>Loading...</div>
})

const Notes = Loadable({
  loader: () => import('./components/Notes'),
  loading: () => <div>Loading...</div>
})

const Settings = Loadable({
  loader: () => import('./components/Settings'),
  loading: () => <div>Loading...</div>
})

export default function Routes({ childProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
      <UnauthenticatedRoute
        path="/signup"
        exact
        component={Signup}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/settings"
        exact
        component={Settings}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/notes/new"
        exact
        component={NewNote}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/notes/:id"
        exact
        component={Notes}
        props={childProps}
      />
      <Route component={NotFound} />
    </Switch>
  )
}

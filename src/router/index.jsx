import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'


import NoMatch from '$pages/no-match/views'
import Login from '$pages/login/views/index'

import '$styles/public.scss'
import 'nprogress/nprogress.css'


const App = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="login" />} />
    <Route path="/login" component={Login} />
    <Route component={NoMatch} />
  </Switch>
)


export default App


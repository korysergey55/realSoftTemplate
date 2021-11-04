import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import store from 'stores'
import history from 'utils/history'
import PrivateRoute from 'components/PrivateRoute'
import Loader from 'components/Loader'

const HomePage = lazy(() => import('containers/Public/HomePage/index'))

const App = () => {
  return (
    <Provider {...store}>
      <Router history={history}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PrivateRoute exact path="/sounter" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App

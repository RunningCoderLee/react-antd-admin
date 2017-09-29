/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import configureStore from '$redux/configure-store'

import '$styles/public.scss'

import App from './router'
import registerServiceWorker from './registerServiceWorker'


const history = createHistory()

const middleware = routerMiddleware(history)


const store = configureStore(middleware)


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} >
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./router', () => { render(App) })
}

registerServiceWorker()

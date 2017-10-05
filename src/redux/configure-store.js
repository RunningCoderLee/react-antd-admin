import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import _ from 'lodash';
import { loadState, saveState } from '$utils/local-storage'; // eslint-disable-line


import rootSaga from '$saga'
import rootReducer from './reducers'


const sagaMiddleware = createSagaMiddleware()


// redux devTool
let composeEnhancers = compose
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // eslint-disable-line
}


function configureStore(middleware, preloadState) {
  const finalMiddleware = [sagaMiddleware, ...middleware]

  const store = createStore(
    rootReducer,
    preloadState,
    composeEnhancers(applyMiddleware(...finalMiddleware)),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers') // eslint-disable-line
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(rootSaga)

  return store
}


export default configureStore

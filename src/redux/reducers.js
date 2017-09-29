import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


// import { reducer as authReducer, actions } from '$pages/auth';
import auth from '$pages/login/redux'


const rootReducers = combineReducers({
  auth,
  router: routerReducer,
})


export default rootReducers

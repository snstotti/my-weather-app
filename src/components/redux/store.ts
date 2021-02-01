import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import weatherDailyReducer from '../weatherReducer/weatherDailyReducer';
import weatherHourlyReducer from '../weatherReducer/weatherHourleReduce';
import  weatherReducer  from '../weatherReducer/weatherReducer'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

let reducer = combineReducers({
  weatherReducer: weatherReducer,
  weatherDailyReducer: weatherDailyReducer,
  weatherHourlyReducer:weatherHourlyReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
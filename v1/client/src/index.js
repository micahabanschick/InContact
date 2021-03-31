import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import usersReducer from './reducers/usersReducer'
import projectsReducer from './reducers/projectsReducer'
import worksReducer from './reducers/worksReducer'

import App from './App';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const initialState = {}
// const initialState = {
//   userId: null,
//   users: [],
//   username: '',
//   logo: ''
// };

const rootReducer = combineReducers({
  user: usersReducer,
  project: projectsReducer,
  work: worksReducer
})

const store = createStore(
  rootReducer, 
  // initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
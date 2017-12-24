import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducer/Counter';
import resultsReducer from './store/reducer/Results';
import { Provider } from 'react-redux';

// Merge reducers
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});
// create store with reducer
const store = createStore(rootReducer);

ReactDOM.render(
  // call Provider to connect redux state & react
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

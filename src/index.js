import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import counterReducer from './Reducer/counterReducer'
import nameReducer from './Reducer/nameReducer'

const rootReducer = combineReducers({
      counterReducer,
      nameReducer
})

const store = createStore(rootReducer)


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

// ########## Import Dependencies Here ##########
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(reduxThunk, reduxLogger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
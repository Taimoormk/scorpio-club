// ########## Import Dependencies Here ##########
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
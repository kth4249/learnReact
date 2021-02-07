import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// 18.2.2 redux-logger 사용하기
const logger = createLogger();

// const store = createStore(rootReducer);
// 스토어를 생성하는 과정에서 미들웨어 적용
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));


// 18.2.2 redux-logger 사용하기
// 18.3.1 redux-chunk
const store = createStore(rootReducer,
  applyMiddleware(logger, ReduxThunk)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
// import reportWebVitals from './reportWebVitals';
import {configureStore} from './store/store';
import Root from './components/root';
import { receiveQuestion } from './actions/loadActions';
import { fetchQuestion } from './util/loadUtil';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById("root");
  window.getState = store.getState
  window.receiveQuestion = receiveQuestion
  window.fetchQuestion = fetchQuestion
  ReactDOM.render(<Root store={store}/>, root);
})

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

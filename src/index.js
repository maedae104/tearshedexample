const React = require('react');
const ReactDOM = require('react-dom/client');
const { BrowserRouter: Router } = require('react-router-dom');
const App = require('./App.jsx');
const reportWebVitals = require('./reportWebVitals.js');
const AppRouter = require('./molecules/AppRouter.jsx');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);

reportWebVitals();





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App.jsx';
// // import reportWebVitals from './reportWebVitals.js';
// import AppRouter from './molecules/AppRouter.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <Router>
//   <AppRouter>
  
//     <App />
    
//     </AppRouter>
// </Router>


// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

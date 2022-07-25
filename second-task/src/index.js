import React from 'react';
import ReactDOM from 'react-dom/client';
import Members from './components/Members';
import Assistants from './components/Assistants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Members/>
    <Assistants/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


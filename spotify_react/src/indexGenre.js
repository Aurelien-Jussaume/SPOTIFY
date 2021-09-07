import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './Artists.css';
import './Genres.css';
// import App from './App';
// import Albums from './Albums.js';
// import Artists from './Artists.js';
import Genres from './Genres.js'
import Header from './Header.js';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
        <Header />
        <App />
        <Genres />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

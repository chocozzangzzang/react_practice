import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from "./chapter03/Library";
// import Clock from "./chapter04/Clock";
// import CommentList from './chapter05/CommentList';
// import NotificationList from './chapter06/NotificationList';
// import Accomodate from './chapter07/Accomodate';
// import ConfirmButton from './chapter08/ConfirmButton';
// import LandingPage from './chapter09/LandingPage';
// import AttandanceBook from './chapter10/AttandanceBook';
// import Signup from './chapter11/Signup';
// import Calculator from './chapter12/Calculator';
// import ProfileCard from './chapter13/ProfileCard';
import DarkOrLight from './chapter14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );

setInterval(() => {
  root.render(
    <React.StrictMode>
      <DarkOrLight />
    </React.StrictMode>,
  )
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FunCompo from './components/FunCompo';
import ClassCompo from './components/ClassCompo';
// import Product from './components/Props/DemoComponent';
// import NewMobile from './components/Props/DemoComponent';
import { NewMobile, Product } from './components/Props/DemoComponent';
import ShowMsg from './components/Events/Events';
import Lists from './components/Lists/Lists';
import Header from './components/Router/Header/Header';
import Shop from './components/Router/Shop/Shop';
import About from './components/Router/About/About';
import Contact from './components/Router/Contact/Contact';
import Home from './components/Router/Home/Home';
import MyRouterApp from './components/Router/MyRouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FunCompo />
    <ClassCompo /> */}

    {/* <Product />
    <NewMobile /> */}

    {/* <ShowMsg /> */}

    {/* <Lists /> */}


    {/* Router Tutorials Below [DON'T UNCOMMENT] */}
    <MyRouterApp />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

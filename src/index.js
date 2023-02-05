import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import main_pic from './images/main_im.png'
import { BrowserRouter as Router, Routes ,Route,BrowserRouter } from "react-router-dom";
import Contact from './contact'
import About from './about'
import Delivery from './delivery'

function Redirect_class() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Main_Page/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Delivery" element={<Delivery/>}/>
      </Routes>
    </>
  );
}


class Main_Page extends React.Component {
  

  render() {
    return(
      <div className="main_window">
        <div className="div_bag">
          <a href="" className="button_ main">Главная</a>
          <a href="/About" className="button_ about">О нас</a>          
          <a href="/Contact" className="button_ contact">Контакты</a>
          <a href="/Delivery" className='button_ delivery'>Доставка</a>
        </div>
          <img className="main_pic" src={main_pic}/>
          <h2 className='toptext'>Вода добытая из природного источника, прямого забора из скважины глубиной 80 метров</h2>
          <h2 className='h2_'>дает вам превосходное качество воды.</h2>
      </div>
    );


  }
}

ReactDOM.render(<React.StrictMode><BrowserRouter><Redirect_class /></BrowserRouter></React.StrictMode>, document.getElementById("root"));
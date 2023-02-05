import React from 'react';
import Slider from "react-slick";
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Pumps_and_tanks from './images/pumps_and_tanks.jpg'
import All from './images/all.jpg'
import Clean_and_refuel from './images/clean_and_refuel.jpg'
import Left_side from './images/left_side.jpg'

export default function About () {
  var settings = {
    dots: true,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1
  };
    return(
      <div className="about_window">
        <div>
          <a href="/" className="button_ main">Главная</a>
          <a href="/About" className="button_ about">О нас</a>          
          <a href="/Contact" className="button_ contact">Контакты</a>
          <a href="/Delivery" className='button_ delivery'>Доставка</a>
        </div>

        <Slider {...settings} className="slider">
          <div>
            <img className="img_pumps_and_tanks" src={Pumps_and_tanks}/>
          </div>

          <div>
            <img className="img_all" src={All}/>
          </div>

          <div>
            <img className="img_clean_and_refuel" src={Clean_and_refuel}/>
          </div>

          <div>
            <img className="img_clean_and_refuel" src={Left_side}/>
          </div>

        </Slider>
        <h2 className='h2_about1'>Торговая марка Живограй производит очищенную воду из собственной артезианской скважины глубиной добычи 80м расположенной в с. Беленькое, Запорожской области. Преимущество нашей воды - это природный источник добычи без примеси хлора и других побочных элементов по сравнению с городской очищенной водой. Доведение воды до высоких стандартов качества осуществляется на профессиональном оборудовании с использованием новейших технологий очистки. Ну и главным преимуществом является невысокая цена по сравнению с конкурентами в сфере доставки натуральных вод. </h2>
      </div>
    );
}
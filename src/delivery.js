import React from 'react';
import './index.css';

import map from './images/Map.png'

class Delivery extends React.Component {
  

  render() {
    return(
      <div className="delivery_window">
        <div>
          <a href="/" className="button_ main">Главная</a>
          <a href="/About" className="button_ about">О нас</a>          
          <a href="/Contact" className="button_ contact">Контакты</a>
          <a href="/Delivery" className='button_ delivery'>Доставка</a>
        </div>
        <div>
            <img className="img_map" title="Зеленый цвет отображает зону доставки" src={map}/>
            <h2 className='h2_top'>Открыто с 8:00 - 20:00 | Понидельник - субота</h2>
            <h2 className='h2_delivery'>Время работы может варьироваться</h2>
        </div>
      </div>
    );
  }
}
export default Delivery
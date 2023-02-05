import React from 'react';
import './index.css';

import vodafone from './images/Vodafone.png'
import kyivstar from './images/Kyivstar.png'
import instagram from './images/Instagram.png'
import facebook from './images/Facebook.png'
import telegtam from './images/Telegram.png'

class Contact extends React.Component {
  

  render() {
    return(
      <div className="contact_window">
        <div>
          <a href="/" className="button_ main">Главная</a>
          <a href="/About" className="button_ about">О нас</a>          
          <a href="/Contact" className="button_ contact">Контакты</a>
          <a href="/Delivery" className='button_ delivery'>Доставка</a>
        </div>
        <div>
        <a href="https://www.instagram.com/givograi/"><img className="img_instagram" src={instagram}/></a>
        <a href="https://www.facebook.com/zhivograi/"><img className="img_facebook" src={facebook}/></a>
        <a href="https://t.me/ZhyvograyBot"><img className="img_telegtam" src={telegtam}/></a>
        </div>
        <div> 
        <img className="img_vodafone" src={vodafone}/>
        <h2 className='text_vodafone'>+38 066 279 17 43</h2>
        <img className="img_kyivstar" src={kyivstar}/>
        <h2 className='text_kyivstar'>+38 068 886 76 24</h2>
        <h6>Product made by Igor Kosenkov in 2022 </h6>
        </div>
      </div>
    );
  }
}
export default Contact
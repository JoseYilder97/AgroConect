import { useState } from 'react'
/* import {
  FaSearch,
  FaFacebookF,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTwitter,
  FaUser,
  FaShoppingCart,
  FaChevronDown,
  FaCalendarDay,
  FaHome,
  FaPhoneAlt, FaStore,
} from 'react-icons/fa' */

import '../../stylesdshboard.css'
export default function CarInfoUser () {
  return (
    <div className='cardBox'>
      <div className='card'>
        <div>
          <div className='numbers'>14</div>
          <div className='cardName'>Clientes</div>
        </div>
        <div className='iconBx'>
        </div>
      </div>
      <div className='card'>
        <div>
          <div className='numbers'>80</div>
          <div className='cardName'>Doctores Veterinarios</div>
        </div>
        <div className='iconBx'>
          <ion-icon name='cart-outline'></ion-icon>
        </div>
      </div>
      <div className='card'>
        <div>
          <div className='numbers'>24</div>
          <div className='cardName'>Recepcionistas</div>
        </div>
        <div className='iconBx'>
          <ion-icon name='chatbubbles-outline'></ion-icon>
        </div>
      </div>
      <div className='card'>
        <div>
          <div className='numbers'>842</div>
          <div className='cardName'>Otros</div>
        </div>
        <div className='iconBx'>
          <ion-icon name='cash-outline'></ion-icon>
        </div>
      </div>
    </div>
  )
}

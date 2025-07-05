import React from 'react'
import BannerImage from '../assets/banner.png'
import '../styles/Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}>

      </div>
      <div className='rightSide ' >
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='Lütfen Adınızı Soyadınızı Giriniz ...' ></input>
          <label>Email</label>
          <input type='email' name='email' placeholder='Lütfen Emailinizi Giriniz ...' ></input>
          <label>Mesajınız</label>
          <textarea name='message' rows="5" placeholder='Lütfen Mesajınızı Giriniz ...' ></textarea>

        </form>

      </div>
    </div>
  )
}

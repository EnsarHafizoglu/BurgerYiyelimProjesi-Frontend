import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import '../styles/Footer.css'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon></FacebookIcon>
            <InstagramIcon></InstagramIcon>
            <XIcon></XIcon>
        </div>
        <p>Tüm Hakları Saklıdır | Ensar HAFIZOĞLU</p>
    </div>
  )
}

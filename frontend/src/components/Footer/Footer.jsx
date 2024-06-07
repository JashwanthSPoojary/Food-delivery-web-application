import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, explicabo molestiae cupiditate ex corporis quae illum aut perspiciatis debitis iusto suscipit aspernatur aliquid delectus odio facere. Voluptates optio porro ipsum?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-222-333-44</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
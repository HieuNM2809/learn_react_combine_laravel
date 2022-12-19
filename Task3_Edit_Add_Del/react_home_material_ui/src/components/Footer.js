import React from 'react'
import './Home.css'
import TextField from '@material-ui/core/TextField';
import {Link}  from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-text'>
           Nhập email để đăng ký nhận những thông tin hữu ích về HM.
          </p>
          <div className='input-areas'>
            <form className='form-email'>
                <input type='text' placeholder='Email' className='form-txt'/>
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="nav-item-btn"
                >
                    Gửi
                </Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Về chúng tôi</h2>
              <Link to='/sign-up'>Tuyển dụng</Link>
              <Link to='/'>Điều khoản</Link>
              <Link to='/'>Nhà dầu tư</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Liên hệ </h2>
              <Link to='/'>Liên hệ</Link>
              <Link to='/'>Ủng hộ</Link>
              <Link to='/'>Tài trợ</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Mạng xã hội</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        
      </div>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/StartPage.css";

function Login() {
  return (
    <div className='login d-flex'>
      <div className='leftSide'>
        <img src='/assets/logo.jpeg' className='w-full img-side' />
      </div>
      <div className='rightSide w-100'>
        <div className='mt-5 p-3 w-75'>
          <h2 className='text-center fw-bold mb-5'>MASUK</h2>
          <form>
            <input name='email' className='form-control rounded-pill' type='email' placeholder='Alamat Email' />

            <input name='password' className='form-control rounded-pill mt-3 mb-3' type='password' placeholder='Kata Sandi'/>
            <p className='text-end'><Link to='/forgotpassword'>Lupa Kata Sandi?</Link></p>
            <br/>
            <Link to='/home'>
              <input name='signin' className='btn btn-primary btn-lg mt-3 mb-5 w-100 rounded-pill fw-bold' type='submit' />
            </Link>
            
          </form>
          <p className='mt-5  text-center'>Belum punya akun? <Link to='/signup'> Daftar</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
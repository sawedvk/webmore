import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/StartPage.css";

function Login() {
  return (
    <div className='login'>
        <div className='leftSide'>
            <img src='/assets/logo.jpeg'/>
        </div>
        <div className='rightSide'>
            <h2>MASUK</h2>
            <form>
                <input name='email' type='email'/>
                <br/>
                <br/>
                <input name='password' type='password'/>
                <br/>
                <br/>
                <Link to='/forgotpassword'>Lupa Kata Sandi?</Link>
                <br/>
                <br/>
                <input name='signin' type='submit'/>
            </form>
            <p>Belum punya akun? <Link to='/signup'> Daftar</Link></p>
        </div>
    </div>
  )
}

export default Login
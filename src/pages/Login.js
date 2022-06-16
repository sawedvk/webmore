import React from 'react'
import {Logo} from '../assets/logo.jpeg';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        <div className='rightSide'>
            <h2>MASUK</h2>
            <form>
                <input name='email' type='email'/>
                <input name='password' type='password'/>
                <br/>
                <Link to='/forgotpassword'>Lupa Kata Sandi?</Link>
                <input name='signin' type='submit'/>
            </form>
            <p>Belum punya akun? <Link to='/signup'> Daftar</Link></p>
        </div>
    </div>
  )
}

export default Login
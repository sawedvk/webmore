import React from 'react';
import {Logo} from '../assets/logo.jpeg';
import {Link} from 'react-router-dom';

function SignUp() {
  return (
    <div className='signUp'>
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        <div className='rightSide'>
            <h2>DAFTAR</h2>
            <form>
                <input name='name' type='text'/>
                <input name='email' type='email'/>
                <input name='phone' type='number'/>
                <input name='password' type='password'/>
                <input name='repassword' type='password'/>
                <br/>
                <input name='signup' type='submit'/>
            </form>
            <p>Sudan punya akun? <Link to='/login'> Masuk </Link></p>
        </div>
    </div>
  )
}

export default SignUp
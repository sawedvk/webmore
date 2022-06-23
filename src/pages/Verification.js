import React from 'react';
import {Logo} from '../assets/logo.jpeg';
import {Link} from 'react-router-dom';

function Verification() {
  return (
    <div className='verification'>
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        <div className='rightSide'>
            <h2>VERIFIKASI</h2>
            <br/><br/>
            <h4>Kode Verifikasi telah dikirimkan ke email anda.</h4>
            <br/>
            <h4>Silahkan masukan untuk mengverifikasi email anda.</h4>
            <form>
                <input name='code' type='number'/>
                <br/><br/>
                <Link><p>Kirim ulang kode verisikasi</p></Link>
                <br/>
                <input name='verifikasi' type='submit'/>
                <br/><br/>
                <input name='batal' type='cancel'/>
            </form>
            <p>Sudan punya akun? <Link to='/login'> Masuk </Link></p>
        </div>
    </div>
  )
}

export default Verification
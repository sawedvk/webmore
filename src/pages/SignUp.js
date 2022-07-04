import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/StartPage.css";

function SignUp() {
  return (
    <div className='signUp d-flex'>
        <div className='leftSide'>
          <img src='/assets/logo.jpeg' className='w-full img-side' />
        </div>
        <div className='rightSide w-100'>
            <div className='mt-5 p-3 w-75'>
              <h2 className='text-center fw-bold mb-5'>DAFTAR</h2>
              <form>
                <input name='name' className='form-control rounded-pill' type='text' placeholder='Nama Lengkap'/>
                
                <input name='email' className='form-control rounded-pill mt-3' type='email' placeholder='Alamat Email'/>

                <input name='phone' className='form-control rounded-pill mt-3' type='tel' pattern='[0-9]{12}' placeholder='No. Telepon'/>

                <input name='password' className='form-control rounded-pill mt-3' type='password' placeholder='Kata Sandi'/>

                <input name='repassword' className='form-control rounded-pill mt-3 mb-5' type='password' placeholder='Ulang Kata Sandi'/>
                <Link to='/verification'>
                  <input name='signup' className='btn btn-primary btn-lg mt-3 mb-5 w-100 rounded-pill fw-bold' type='submit'/>
                </Link>
              </form>
              <p className='mt-4  text-center'>Sudan punya akun? <Link to='/'> Masuk </Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp
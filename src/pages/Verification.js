import React from 'react';
import { Link } from 'react-router-dom';

function Verification() {
  return (
    <div className='verification d-flex'>
      <div className='leftSide'>
        <img src='/assets/logo.jpeg' className='w-full img-side' />
      </div>
      <div className='rightSide w-100'>
        <div className='mt-5 p-3 w-75'>
          <h2 className='text-center fw-bold mb-5'>VERIFIKASI</h2>
          <p className='m-0 fs-6 fw-bold'>Kode Verifikasi telah dikirimkan ke Email anda.</p>
          <p className='m-0 fs-6 fw-bold'>Silahkan masukan untuk mengverifikasi Email anda.</p>
          <form>
            <input name='code' className='form-control rounded-pill mt-3 mb-3' type='text' placeholder='Masukan Kode' />

            <Link><p>Kirim ulang kode verifikasi</p></Link>

            <Link to='/pabrik'>
              <input name='verifikasi' className='btn btn-primary btn-lg mt-3 w-100 rounded-pill fw-bold' type='submit' />
            </Link>
            <br />
            <Link to='/'>
              <button className='btn btn-secondary btn-lg mt-3 mb-5 w-100 rounded-pill fw-bold'>
                Batal
              </button>
            </Link>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Verification
import React from 'react'
import { Link, Router, useHistory } from 'react-router-dom';

function FormPabrik() {
  const router = useHistory()
  return (
    <div className='formPabrik w-75 mx-auto'>
      {/* <form> */}
        <div className='row mt-3'>
          <p className='col-4'>Nama Pabrik</p>
          <div className='col-8'>
            <input className='form-control rounded-pill' name='namaPabrik' type='text' />
          </div>
        </div>

        <div className='row mt-3'>
          <p className='col-4'>Alamat Pabrik</p>
          <div className='col-8'>
            <input className='form-control rounded-pill' name='alamatPabrik' type='text' />
          </div>
        </div>

        <div className='row mt-3'>
          <p className='col-4'>Kab / Kota Pabrik</p>
          <div className='col-8'>
            <input className='form-control rounded-pill' name='kabkotaPabrik' type='text' />
          </div>
        </div>

        <div className='row mt-3'>
          <p className='col-4'>Provinsi Pabrik</p>
          <div className='col-8'>
            <input className='form-control rounded-pill' name='provinsiPabrik' type='text' />
          </div>
        </div>

        <div className='row mt-3'>
          <p className='col-4'>Tautan Peta</p>
          <div className='col-8'>
            <input className='form-control rounded-pill' name='linkPabrik' type='url' />
          </div>
        </div>

        <div className='row mt-3'>
          <p className='col-4'>Foto Pabrik</p>
          <div className='col-8'>
            <input className='form-control rounded-pill' name='fotoPabrik' type='file' />
          </div>
        </div>

        <div className='text-center mt-5'>
          <button className='btn btn-primary w-25 me-3 fw-bold'>TAMBAH</button>
          <button className='btn btn-danger w-25 ms-3 fw-bold' onClick={() => router.goBack()}>BATAL</button>
        </div>

      {/* </form> */}
    </div>
  )
}

export default FormPabrik
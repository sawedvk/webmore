import React from 'react'

function FormPabrik() {
  return (
    <div className='formPabrik w-75 mx-auto'>
      <form>
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
          <button className='btn btn-primary w-25 me-3'>SELESAI</button>
          <button className='btn btn-danger w-25 ms-3'>BATAL</button>
        </div>

      </form>
    </div>
  )
}

export default FormPabrik
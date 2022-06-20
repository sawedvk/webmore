import React from 'react'

function FormPabrik() {
  return (
    <div className='formPabrik'>
      <form>
        <p>Nama</p>
        <input name='namaPabrik' type='text'/>
        <p>Alamat</p>
        <input name='alamatPabrik' type='text'/>
        <p>Kab/Kota</p>
        <input name='kabkotaPabrik' type='text'/>
        <p>Provinsi</p>
        <input name='provinsiPabrik' type='text'/>
        <p>Tautan Peta</p>
        <input name='linkPabrik' type='text'/>
        <p>Foto</p>
        <input name='fotoPabrik' type='upload'/>
        <br/>
        <input name='submit' type='submit'/>
        <input name='cancel' type='cancel'/>  
      </form>
    </div>
  )
}

export default FormPabrik
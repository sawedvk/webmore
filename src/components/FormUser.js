import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom';

function FormUser() {

  const inputReff = useRef(null)

  const handleChange = (target) => {
    let input = target.target.files[0];
    console.log(input)
  }

  return (
    <div className='formUser container w-50'>
      <div className='align-items-center mt-3'>
        <Link to='/pabrik' className='text-decoration-none fw-bold'>Kembali</Link>
        <form className='mx-auto'>
          <img src='/assets/person.png' className='mx-auto d-flex mt-3' width={50} height={50}></img>
          <input className='align-items-center'
            type="file"
            ref={inputReff}
            hidden
            onChange={handleChange}
          />
          <button className='d-flex rounded-pill mx-auto align-items-center btn'
            onClick={() => inputReff.current.click()}
          >Ubah Gambar</button>

          <div className='form-control d-flex rounded-pill mt-3'>
            <input className='my-custom-form w-100' name='namaPengguna' type='text' />
            <div style={{ width: "16px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
          </div>
          <input className='form-control rounded-pill mt-3' name='emailPengguna' type='email' />

          <div className='form-control d-flex rounded-pill mt-3 mb-5'>
            <input className='my-custom-form w-100' name='phonePengguna' type='tel' pattern='[0-9]{12}' />
            <div style={{ width: "16px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
          </div>

          <Link to='/'>
            <button className='form-control rounded-pill mt-5 btn btn-warning fw-bold'>KELUAR</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default FormUser
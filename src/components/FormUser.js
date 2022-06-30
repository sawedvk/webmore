import React from 'react'
import { useRef } from 'react'

function FormUser() {

  const inputReff = useRef(null)

  const handleChange = (target) => {
    let input = target.target.files[0];
    console.log(input)
  }

  return (
    <div className='formUser container'>
      <div className='w-50 mx-auto'>
        <form>
          <img></img>

          <input
            type="file"
            ref={inputReff}
            hidden
            onChange={handleChange}
          />
          <button
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

          <div className='form-control d-flex rounded-pill mt-3'>
            <input className='my-custom-form w-100' name='phonePengguna' type='tel' pattern='[0-9]{12}' />
            <div style={{ width: "16px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default FormUser
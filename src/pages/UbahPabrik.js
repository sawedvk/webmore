import React from 'react'
import FormPabrik from '../components/FormPabrik'
import NavBar from '../components/NavBar'

function UbahPabrik() {
  return (
    <div className='ubahPabrik'>
        <NavBar/>
        <div className='container'>
            <h1 className='text-center fw-bold mt-3 mb-5'>Ubah Pabrik</h1>
            <FormPabrik/>
        </div>
    </div>
  )
}

export default UbahPabrik
import React, { useState } from 'react';
import NavBar from '../components/NavBar.js';
import ItemMesin from '../components/ItemMesin';
import { MesinList } from '../helpers/MesinList';
import { Link, Router, useHistory, useParams } from 'react-router-dom';
import NavbarHeader from '../components/navbarHeader.js';

export default function Mesin() {

  const router = useHistory()
  const { homeId } = useParams()
  console.log(homeId)

  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false)
  }

  return (
    <div className='mesin'>
      <NavBar />
      <NavbarHeader
        step1={1}
        homeId={homeId}
      />

      
      <div className='d-flex container'>
        <div className='mt-0 w-100 d-flex justify-content-between py-2'>
          <h1 className='me-2 fs-3 fw-bold text-nowrap'>Daftar Mesin</h1>
          <button className='me-5 px-5 btn-sm btn text-nowrap btn-primary rounded-pill' onClick={() => router.push('/tambah-mesin')} >+ Tambah</button>
          <input name='search' className='form-control rounded-pill w-25' type='search' placeholder='Cari' />
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row mx-0'>
          {MesinList.map((row, i) => (
            <ItemMesin
              key={i}
              type={row.type}
              brand={row.brand}
              image={row.image}
              name={row.name}
            />
          ))}
        </div>
      </div>
    </div>

  )
}
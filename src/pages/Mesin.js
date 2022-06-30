import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ItemMesin from '../components/ItemMesin';
import { MesinList } from '../helpers/MesinList';

export default function Mesin() {
  return (
    <div className='mesin'>
      <NavBar />
      <div className='px-5 my-2 border container rounded-3 shadow d-flex align-items-center'>
        <button className='btn'>
          <img
            src={'/assets/home.svg'}
            width={50}
            height={50}
          />
        </button>
        <div>
          <img
            src={'/assets/pabrik.svg'}
            width={50}
            height={50}
          />
          <a href='#' className='text-decoration-none' target={"_blank"}> buka peta </a>
        </div>
      </div>
      <div className='d-flex container'>
        <div className='mt-0 w-100 d-flex justify-content-between py-2'>
          <h1 className='me-2 fs-3 fw-bold text-nowrap'>Daftar Pabrik</h1>
          <button className='me-5 px-5 btn-sm btn text-nowrap btn-primary rounded-pill'>+ Tambah</button>
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
      {/* <Footer /> */}
    </div>

  )
}
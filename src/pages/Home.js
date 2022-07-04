import React from 'react';
import { useHistory } from 'react-router-dom';
import ItemPabrik from '../components/ItemPabrik.js';
import NavBar from '../components/NavBar.js';
import NavbarHeader from '../components/navbarHeader.js';
import { PabrikList } from '../helpers/PabrikList.js';

function Home() {
  const router = useHistory();
  return (
    <div className='home'>
      <NavBar />
      
      <NavbarHeader/>

      <div className='d-flex container'>
        <div className='mt-0 w-100 d-flex justify-content-between py-2'>
          <h1 className='me-2 fs-3 fw-bold text-nowrap'>Daftar Pabrik</h1>
          <button onClick={() => router.push('/tambah-pabrik')} className='me-5 px-5 btn-sm btn text-nowrap btn-primary rounded-pill'>+ Tambah</button>
          <input name='search' className='form-control rounded-pill w-25' type='search' placeholder='Cari' />
        </div>
      </div>
      <div className='pabrik container px-0'>
        <div className='row mx-0'>
          {PabrikList.map((menuItem, key) => {
            return (
              <ItemPabrik
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                caption={menuItem.caption} />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
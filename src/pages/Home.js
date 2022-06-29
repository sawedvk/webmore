import React from 'react';
import NavBar from '../components/NavBar.js';
// import ItemPabrik from '../components/ItemPabrik';
// import {PabrikList} from '../helpers/PabrikList';

function Home() {
  return (
    <div className='home'>
        <NavBar/>
        <div className='content d-flex'>
            <div className='navigator'>
              <img/>
            </div>
            <div className='mt-5 w-100 d-flex'>
             <h1 className='w-25 me-2 fw-bold'>Daftar Pabrik</h1>
             <button className='w-25 me-5 btn btn-primary rounded-pill'>+ Tambah</button>
             <p className='me-5'></p>
             <p className='me-5'></p>
             <p className='me-5'></p>
             <input name='search' className='form-control rounded-pill w-50 mx-5' type='search' placeholder='Cari'/>
              <div className='pabrik'>
                {/* {PabrikList.map((menuItem, key) => {
                return (
                  <ItemPabrik
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  caption={menuItem.caption}/>
                );
               })} */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
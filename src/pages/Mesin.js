import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ItemMesin from '../components/ItemMesin';
import {MesinList} from '../helpers/MesinList';

function Mesin() {
  return (
    <div className='mesin'>
        <NavBar/>
        <div className='content'>
            <div className='navigator'>
              <img/>
              <button>Anggota</button>
              <button>Ubah</button>
              <br/>
              <button>Hapus</button>
            </div>
            <h1>Daftar Mesin</h1>
            <button>+Tambah</button>
            <input name='search' type='text'/>
            <div className='pabrik'>
              {MesinList.map((menuItem, key) => {
                return (
                  <ItemMesin
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  type={menuItem.type}
                  brand={menuItem.brand}/>
                );
              })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Mesin
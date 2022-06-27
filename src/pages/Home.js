import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ItemPabrik from '../components/ItemPabrik';
import {PabrikList} from '../helpers/PabrikList';

function Home() {
  return (
    <div className='home'>
        <NavBar/>
        <div className='content'>
            <div className='navigator'>
              <img/>
            </div>
            <h1>Daftar Pabrik</h1>
            <button>+Tambah</button>
            <input name='search' type='text'/>
            <div className='pabrik'>
              {PabrikList.map((menuItem, key) => {
                return (
                  <ItemPabrik
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  caption={menuItem.caption}/>
                );
              })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
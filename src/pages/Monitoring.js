import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import MonitorItem from '../components/MonitorItem';
import {MonitoringList} from '../helpers/MonitoringList';

function Monitoring() {
  return (
    <div className='monitoring'>
      <NavBar/>
        <div className='content'>
            <div className='navigator'>
              <img/>
              <button>Ubah</button>
              <br/>
              <button>Hapus</button>
            </div>
            <div className='ribbon'>
              <h3>Pemantauan</h3>
              <h3>Laporan</h3>
              <h3>Dokumen</h3>
            </div>
            <div className='monitor'>
              {MonitoringList.map((menuItem, key) => {
                return (
                  <MonitorItem
                  key={key}
                  data={menuItem.data}
                  satuan={menuItem.satuan}
                  ket={menuItem.ket}/>
                );
              })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Monitoring
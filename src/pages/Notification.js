import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ItemNotifikasi from '../components/ItemNotifikasi';
import {NotifList} from '../helpers/NotificationList';

function Notification() {
  return (
    <div className='notification'>
        <NavBar/>
        <div className='content'>
          <h3>Kembali</h3>
          <br/>
          <br/>
          <h1>Pemberitahuan</h1>
          <br/>
          <div className='notif'>
          {NotifList.map((menuItem, key) => {
                return (
                  <ItemNotifikasi
                  key={key}
                  name={menuItem.name}
                  location={menuItem.location}/>
                );
              })}
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Notification
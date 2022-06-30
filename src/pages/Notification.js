import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ItemNotifikasi from '../components/ItemNotifikasi';
import { NotifList } from '../helpers/NotificationList';
import { Link } from 'react-router-dom';

function Notification() {
  return (
    <div className='notification'>
      <NavBar />
      <div className='content container w-50 mt-3'>
        <Link to='/pabrik' className='text-decoration-none fw-bold'>Kembali</Link>

        <h1 className='mt-4 text-center fw-bold mb-3'>Pemberitahuan</h1>

        <div className='notif'>
          {NotifList.map((menuItem, key) => {
            return (
              <ItemNotifikasi
                key={key}
                name={menuItem.name}
                location={menuItem.location} />
            );
          })}
        </div>
      </div>

    </div>
  )
}

export default Notification
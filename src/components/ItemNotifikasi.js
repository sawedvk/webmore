import React from 'react';
import '../styles/ItemNotif.css';

function ItemNotifikasi({name,location}) {
  return (
    <div className='itemNotifikasi'>
        <div className='leftSide'>
            <img src='/assets/Notif.png'/>
        </div>
        <div className='rightSide'>
            <h3>{name}</h3>
            <h4>{location}</h4>
            <p>Peringatan untuk melakukan perawatan pada mesin</p> 
        </div>
    </div>
  )
}

export default ItemNotifikasi
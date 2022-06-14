import React from 'react';
import {Notif} from '../assets/Notif.png';
import '../styles/ItemNotif.css';

function ItemNotifikasi({name,location}) {
  return (
    <div className='itemNotifikasi'>
        <div className='leftSide'>
            <img src={Notif}/>
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
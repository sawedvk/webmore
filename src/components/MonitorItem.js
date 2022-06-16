import React from 'react';
import { Link } from 'react-router-dom';
import {Setting} from '../assets/Settings.png';

function MonitorItem({data,satuan,ket}) {
  return (
    <div className='monitorItem'>
      <Link to='/setting'>
        <img src={Setting}/>
      </Link>
      <div className='isiData'>
        <h1>{data}</h1>
      </div>
      <div className='keterangan'>
        <h3>{satuan}</h3>
        <h4>{ket}</h4>
      </div>
    </div>
  )
}

export default MonitorItem
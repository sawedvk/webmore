import React from 'react';
import { Link } from 'react-router-dom';

function MonitorItem({ data, satuan, ket }) {
  return (
    <div className='col-2 mx-auto text-center mt-3 border my-border-radius shadow'>
      <Link to='/setting'>
        <img src='/assets/Settings.png' width={30} height={30} className='mt-2' />
      </Link>
      <div className='isiData mt-3'>
        <h1 className='fw-bold fs-1'>{data}</h1>
      </div>
      <div className='keterangan mt-3'>
        <h3 className='fw-bold fs-4'>{satuan}</h3>
        <h4 className='fw-bold fs-5'>{ket}</h4>
      </div>
    </div>
  )
}

export default MonitorItem
import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import MonitorItem from '../components/MonitorItem';
import { MonitoringList } from '../helpers/MonitoringList';

function Monitoring() {
  return (
    <div className='monitoring'>
      <NavBar />
      <div className='content'>


        <div className='navigator'>
          <div className='px-5 my-2 border container rounded-3 shadow d-flex align-items-center'>
            <button className='btn'>
              <img
                src={'/assets/home.svg'}
                width={80}
                height={80}
              />
            </button>
            <div className='me-3' >
              <img
                src={'/assets/chevron-left.png'}
                width={30}
                height={80}
              />
            </div>
            <div className='flex-column'>
              <img
                src={'/assets/pabrik.svg'}
                width={70}
                height={70}
              />
              <a href='#' className='text-decoration-none' target={"_blank"}> buka peta </a>
            </div>
            <div className='me-3' >
              <img
                src={'/assets/chevron-left.png'}
                width={30}
                height={80}
              />
            </div>
            <div className='flex-column'>
              <img
                src={'/assets/mesin.svg'}
                width={70}
                height={70}
              />
            </div>

            <div className='mx-auto flex-column'>
              <div className='d-flex align-items-end'>
                <button className='btn btn-primary rounded-pill d-flex'>
                  <img src='/assets/Edit.png' width={20} height={20} className='ms-1 me-2 w-25' />
                  Ubah
                </button>
              </div>
              <button className='btn btn-danger rounded-pill d-flex'>
                <img src='/assets/Edit.png' width={20} height={20} className='ms-1 me-2 w-25' />
                Hapus
              </button>
            </div>
          </div>


        </div>
        <div className='nav'>
          <nav className='navbar container' >

          </nav>
        </div>


        <div className='monitor d-flex container'>
          {MonitoringList.map((menuItem, key) => {
            return (
              <MonitorItem
                key={key}
                data={menuItem.data}
                satuan={menuItem.satuan}
                ket={menuItem.ket} />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Monitoring
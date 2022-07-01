import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import MonitorItem from '../components/MonitorItem';
import { MonitoringList } from '../helpers/MonitoringList';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link, Router, useHistory } from 'react-router-dom';
import PemantauanComp from '../components/PemantauanComp.js';
import LaporanComp from '../components/LaporanComp.js';
import DocumentComp from '../components/DocumentComp.js';


function Monitoring() {

  const router = useHistory()

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

            <div className='w-100 d-flex justify-content-end'>
              <div className=''>
                <button className='btn btn-primary rounded-pill d-flex'>
                  <img src='/assets/Edit.png' width={20} height={20} className='ms-1 me-2 w-25' onClick={()=> router.push('/ubah-mesin')} />
                  Ubah
                </button>
                <button className='btn btn-danger rounded-pill d-flex mt-2'>
                  <img src='/assets/Edit.png' width={20} height={20} className='ms-1 me-2 w-25' />
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className='nav container mt-5'>
          <Tabs
            defaultActiveKey="Pemantauan"
            id="uncontrolled-tab-example"
            className="mb-5 w-100"
          >
            <Tab eventKey="Pemantauan" title="Pemantauan" className="w-100">
              <PemantauanComp/>
            </Tab>
            <Tab eventKey="Laporan" title="Laporan">
              <LaporanComp/>
            </Tab>
            <Tab eventKey="Dokumen" title="Dokumen">
              <DocumentComp/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Monitoring
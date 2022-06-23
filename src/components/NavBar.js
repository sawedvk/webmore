import React from 'react';
import { Logo } from '../assets/logo.png';
import { Person } from '../assets/Group 8.png';
import { Notif } from '../assets/Notif.png';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";

function NavBar() {
    return (
    <div className='navbar'>
        <div className='leftSide'>
            <Link to="/"><img src={Logo}/></Link>
        </div>
        <div className='rightSide'>
            <Link to="/pengguna">Pengguna</Link>
            <Link to="/pengguna"><img src={Person}/></Link>
            <Link to="/notifikasi"><img src={Notif}/></Link>
        </div>
    </div>
  )
}

export default NavBar
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";

function NavBar() {
    return (
    <div className='navbar'>
        <div className='leftSide'>
            <Link to="/"><img src='/assets/logo.jpeg'/></Link>
        </div>
        <div className='rightSide'>
            <Link to="/pengguna">Pengguna</Link>
            <Link to="/pengguna"><img src='/assets/person.png'/></Link>
            <Link to="/notifikasi"><img src='/assets/Notif.png'/></Link>
        </div>
    </div>
  )
}

export default NavBar
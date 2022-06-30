import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";

function NavBar() {
    return (
    <div className='navbar'>
        <div className='leftSide'>
            <Link to="/pabrik"><img src='/assets/logo.jpeg'/></Link>
        </div>
        <div className='rightSide'>
            <Link to="/profile">Pengguna</Link>
            <Link to="/profile"><img src='/assets/person.png'/></Link>
            <Link to="/notifikasi"><img src='/assets/Notif.png'/></Link>
        </div>
    </div>
  )
}

export default NavBar
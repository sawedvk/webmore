import React from 'react';
import {Edit} from '../assets/Edit.png';
import {Delete} from '../assets/Trash 1.png';
import {Link} from 'react-router-dom';
import '../styles/Person.css';

function Person({image,name,email}) {
  return (
    <div className='person'>
        <div className='leftSide'>
            <img src={image}/>
        </div>
        <div className='center'>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
        <div className='rightSide'>
            <Link to='/edit'>
                <img src={Edit}/>
            </Link>
            <Link to='/delete'>
                <img src={Delete}/>
            </Link>
        </div>
    </div>
  )
}

export default Person
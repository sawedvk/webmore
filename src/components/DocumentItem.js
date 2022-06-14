import React from 'react';
import {Logo} from '../assets/document.png';
import {Delete} from '../assets/Trash 1.png';
import '../styles/DocumentItem.css';

function DocumentItem({name}) {
  return (
    <div className='documentItem'>
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        <div className='rightSide'>
            <h2>{name}.pdf</h2>
            <img src={Delete}/>
        </div>
    </div>
  )
}

export default DocumentItem